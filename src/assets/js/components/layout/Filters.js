import React from "react";
import { Link, IndexLink } from "react-router";

import ClassesBlock from "../ClassesBlock";
import * as CalendarActions from "../../actions/CalendarActions";
import CalendarStore from "../../stores/CalendarStore";


export default class Filters extends React.Component {
  constructor(props) {
    super();
    this.reloadFilters();
    this.getFilters = this.getFilters.bind(this);
    this.state = {
      filters: CalendarStore.getFilters(),
      intensity: CalendarStore.getIntensity(),
      time:CalendarStore.getTimes(),
      view:CalendarStore.getView(),
    };
  }

  componentWillMount() {
    CalendarStore.on("change", this.getFilters);
  }

  componentWillUnmount() {
    CalendarStore.removeListener("change", this.getFilters);
  }

  getFilters() {
    this.setState({
      filters: CalendarStore.getFilters(),
      intensity: CalendarStore.getIntensity(),
      time:CalendarStore.getTimes(),
      view:CalendarStore.getView()
    });
  }

  updateViewTime(time) {
      let thisPosition=this.state.time.indexOf(time);
      (thisPosition!==-1)?this.state.time.splice(thisPosition,1):this.state.time.push(time);
      CalendarActions.setViewTimes(this.state.time);
  }

  updateIntensity(inten) {
      CalendarActions.updateIntensity(inten);
  }

  updateClubFilter(clubId) {
    console.log(clubId)
      CalendarActions.updateClubFilter(clubId);
  }

  updateView(view) {
      CalendarActions.updateView(view);
  }

  reloadFilters() {
      CalendarActions.reloadFilters();
  }

  render() {

    const { location } = this.props
    let currentView = 'Weekly';
    let weekActive = "active"
    let dayActive = ""
    //SET TYPE LABEL
    if(this.state.view=='daily'){
      currentView = 'Daily';
      weekActive = ""
      dayActive = "active"
    }
    let fromToTime ='07:00 to 12:00';
    let actMor=(this.state.time.indexOf('morning')!==-1)?'active':'';
    let actEve=(this.state.time.indexOf('evening')!==-1)?'active':'';
    let actAft=(this.state.time.indexOf('afternoon')!==-1)?'active':'';

    //SET TIME LABEL
    if(actMor=='active'&&actEve=='active'&&actAft=='active'){fromToTime='07:00 to 23:00';}
    else if(actMor=='active'&&actAft=='active'){fromToTime='07:00 to 19:00';}
    else if(actEve=='active'&&actAft=='active'){fromToTime='12:00 to 23:00';}
    else if(actMor=='active'&&actEve=='active'){fromToTime='07:00 to 23:00';}
    else if(actEve=='active'){fromToTime='19:00 to 23:00';}
    else if(actAft=='active'){fromToTime='12:00 to 19:00';}

    //SET INT label
    let intLabel=''
    for(let a=0;a<this.state.intensity;a++){intLabel+='I'}

    //SET CLUBS LIST
    let localList = '';
    console.log(this.state.filters)
    if(this.state.filters.locations){
      localList = Object.keys(this.state.filters.locations.clubs).map((location)=>{
        let clublist = Object.keys(this.state.filters.locations.clubs[location]).map((club)=>{
          let thisId = this.state.filters.locations.clubs[location][club];
          return <li key={thisId}><input type="checkbox" id={thisId} onChange={()=>this.updateClubFilter(thisId)} /><label for={thisId}><span></span>{this.state.filters.clubs[thisId]}</label></li>;
        })
        return <div key={location}><h3>{location}</h3><ul>{clublist}</ul></div>;
      })
    }



    return (

      <div class="section group scheduleFilters">
        <div class="col span_2_of_12 calendarMode">
          <p class="style">VIEW STYLE</p>
          <div class="weekly">
            <div class={'icon '+weekActive} onClick={()=>this.updateView('weekly')}></div>
          </div>
          <div class="daily">
            <div class={'icon '+dayActive} onClick={()=>this.updateView('daily')}></div>
          </div>
          <p class="type">{currentView}</p>

        </div>
        <div class="col span_3_of_12 gymLocation">
          <p>CHOOSE A GYM</p>
          <div class="searchGym">
            <input type="text" class="gymInput"  />
          </div>
          <div class="optionsGym">
          {localList}

            <div class="resetChoises">
              <span>RESET CHOISES</span>
            </div>
          </div>
        </div>
        <div class="col span_3_of_12 gymActivities">
          <p>FILTER ACTIVITIES</p>
          <div class="searchClass">
            <input type="text" class="classInput" />
          </div>
          <div class="optionsClass">
            <h3>Dance</h3>
            <ul>
              <li><input type="checkbox" id="airfit"/><label for="airfit"><span></span>Air Fit</label></li>
              <li><input type="checkbox" id="bodyjam"/><label for="bodyjam"><span></span>Bodyjam</label></li>
              <li><input type="checkbox" id="kizomba"/><label for="kizomba"><span></span>Kizomba</label></li>
              <li><input type="checkbox" id="zumba"/><label for="zumba"><span></span>Zumba</label></li>
            </ul>
            <div class="allClasses">
              <span>VIEW ALL CLASSES</span>
            </div>
          </div>
        </div>
        <div class="col span_2_of_12 classIntensity">
          <p>INTENSITY</p>
          <div class="intensityLevel group section">
          <div class={(this.state.intensity>=0)?'first intensityBlock active':'intensityBlock'} onClick={()=>this.updateIntensity(0)}></div>
          <div class={(this.state.intensity>=1)?'intensityBlock active':'intensityBlock'} onClick={()=>this.updateIntensity(1)}></div>
          <div class={(this.state.intensity>=2)?'intensityBlock active':'intensityBlock'} onClick={()=>this.updateIntensity(2)}></div>
          <div class={(this.state.intensity>=3)?'intensityBlock active':'intensityBlock'} onClick={()=>this.updateIntensity(3)}></div>
          <div class={(this.state.intensity>=4)?'intensityBlock active':'intensityBlock'} onClick={()=>this.updateIntensity(4)}></div>
          <div class={(this.state.intensity>=5)?'intensityBlock active':'intensityBlock'} onClick={()=>this.updateIntensity(5)}></div>

          </div>
          <p class="type">{intLabel}</p>
        </div>
        <div class="col span_2_of_12 classTime">
          <p>DAY TIME</p>
          <div class="dayTime">
            <span class={'morning '+actMor} onClick={()=>this.updateViewTime('morning')}></span>
            <span class={'afternoon '+actAft} onClick={()=>this.updateViewTime('afternoon')}></span>
            <span class={'evening '+actEve} onClick={()=>this.updateViewTime('evening')}></span>
          </div>
          <p class="type">{fromToTime}</p>
        </div>
      </div>
    );
  }
}
