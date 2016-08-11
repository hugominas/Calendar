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
      collapsed: true
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
    CalendarActions.setToday(day);
    console.log(day)
    this.setState({ today: day });
  }


  render() {
    const { location } = this.props.location
    const { collapsed } = this.state;
    //console.log(Moment().add({day:1}));
    const currWeekDay = new Date();
    let x = 0;
    const headerTitle = this.weekDays.map((key) => {
      let today  = (x-this.state.today)+1;
      let thisDate  = new Date().addDays(today);
      let thisDay   = thisDate.getDate();
      thisDay = ((''+thisDay).length==1)?'0'+thisDay:thisDay;
      let thisMonth = this.MonthDays[thisDate.getMonth()].substring(0,3);
      x++;
      return <div class={'dayTitle'+((today==0)?' active':'')} key={x} onClick={() => this.filterDay(today+3)}><div class="dayTop">{thisDay} {thisMonth}<span class="articleDashSchedule"></span></div><span class="dayBottom">{key}</span></div>
    })



    return (
      <div class="ScheduleDays section group">
      <div class="scheduleTime"><span>&nbsp;</span></div>
      {headerTitle}
      </div>
    );
  }
}
