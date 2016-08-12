import React from "react";
import { Link, IndexLink } from "react-router";

import ClassesBlock from "../ClassesBlock";
import * as CalendarActions from "../../actions/CalendarActions";
import CalendarStore from "../../stores/CalendarStore";


Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};



export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      clickedDay: new Date().getDay()-1
    };
    this.getToday()
    this.getWeekDays();
    this.getMonthNames();
  }
  getWeekDays(){
    this.weekDays=CalendarStore.getWeekDays();
  }

  getMonthNames(){
    this.MonthDays=CalendarStore.getMonthNames();
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  getToday(){
    this.state.today=CalendarStore.getToday();
  }
  filterDay(day) {
    //CHECK IF ITS ON DAY METHOD TO AVOID MEMORY LLEACK
    //fix for sunday offest
    day=((day.getDay())==0)?6:day.getDay()-1;
    CalendarActions.setToday(day);
    this.setState({ clickedDay: day });
  }


  render() {
    const { location } = this.props.location
    const { collapsed } = this.state;
    //console.log(Moment().add({day:1}));
    let x = 0;
    const headerTitle = this.weekDays.map((key) => {
      //ofset to start on monday
      let thisDayComp=x;
      let today  = (thisDayComp-this.state.today)+1;
      let thisDate  = new Date().addDays(today);
      let thisDay   = thisDate.getDate();
      thisDay = ((''+thisDay).length==1)?'0'+thisDay:thisDay;
      let thisMonth = this.MonthDays[thisDate.getMonth()].substring(0,3);
      x++;
      //Working with theoffset
      return <div class={'dayTitle'+((this.state.clickedDay==thisDayComp)?' active':'')} key={x} onMouseOver={() => this.filterDay(thisDate)}><div class="dayTop">{thisDay} {thisMonth}<span class="articleDashSchedule"></span></div><span class="dayBottom">{key}</span></div>
    })



    return (
      <div class="ScheduleDays section group">
      <div class="scheduleTime"><span>&nbsp;</span></div>
      {headerTitle}
      </div>
    );
  }
}
