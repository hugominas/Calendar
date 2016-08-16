import React from "react";
import { Link, IndexLink } from "react-router";

import ClassesBlock from "../ClassesBlock";
import * as CalendarActions from "../../actions/CalendarActions";
import CalendarStore from "../../stores/CalendarStore";


export default class Filters extends React.Component {
  constructor(props) {
    super();
    CalendarActions.reloadFilters();
    this.getFilters = this.getFilters.bind(this);
    this.state = {
      filters: CalendarStore.getFilters(),
      time:CalendarStore.getTimes(),
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
      time:CalendarStore.getTimes()
    });
  }
  updateViewTime(time) {
      let thisPosition=this.state.time.indexOf(time);
      (thisPosition!==-1)?this.state.time.splice(thisPosition,1):this.state.time.push(time);
      CalendarActions.setViewTimes(this.state.time);
  }
  reloadFilters() {
    CalendarActions.reloadFilters();
  }

  render() {

    const { location } = this.props
    let currentView = 'Weekly';
    let weekActive = "active"
    let dayActive = ""
    if(location.pathname.match(/daily/)){
      currentView = 'Daily';
      weekActive = ""
      dayActive = "active"
    }
    let fromToTime ='07:00 to 12:00';
    let actMor=(this.state.time.indexOf('morning')!==-1)?'active':'';
    let actEve=(this.state.time.indexOf('evening')!==-1)?'active':'';
    let actAft=(this.state.time.indexOf('afternoon')!==-1)?'active':'';

    if(actMor=='active'&&actEve=='active'&&actAft=='active'){fromToTime='07:00 to 23:00';}
    else if(actMor=='active'&&actAft=='active'){fromToTime='07:00 to 19:00';}
    else if(actEve=='active'&&actAft=='active'){fromToTime='12:00 to 23:00';}
    else if(actMor=='active'&&actEve=='active'){fromToTime='07:00 to 23:00';}
    else if(actEve=='active'){fromToTime='19:00 to 23:00';}
    else if(actAft=='active'){fromToTime='12:00 to 19:00';}



    return (

      <div class="section group scheduleFilters">
        <div class="col span_2_of_12 calendarMode">
          <p class="style">VIEW STYLE</p>
          <div class="weekly">
            <Link to="weekly" class={'icon '+weekActive}></Link>
          </div>
          <div class="daily">
            <Link to="daily" class={'icon '+dayActive}></Link>
          </div>
          <p class="type">{currentView}</p>

        </div>
        <div class="col span_3_of_12 gymLocation">
          <p>CHOOSE A GYM</p>
          <div class="searchGym">
            <input type="text" class="gymInput"  />
          </div>
          <div class="optionsGym">
            <h3>Amadora</h3>
            <ul>
              <li>
              <input type="checkbox" id="vitaTejo" /><label for="vitaTejo"><span></span>Dolce Vita Tejo</label>
              </li>
            </ul>
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
            <div class="grau1 intensityBlock active"></div>
            <div class="grau2 intensityBlock active"></div>
            <div class="grau3 intensityBlock active"></div>
            <div class="grau4 intensityBlock"></div>
            <div class="grau5 intensityBlock"></div>
            <div class="grau6 intensityBlock"></div>
          </div>
          <p class="type">III</p>
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
