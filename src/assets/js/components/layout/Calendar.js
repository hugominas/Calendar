import React from "react";
import { Link, IndexLink } from "react-router";

import ClassesBlock from "../ClassesBlock";
import CalendarStore from "../../stores/CalendarStore";
import * as CalendarActions from "../../actions/CalendarActions";
import WeekDay from "../WeekDay";
import Day from "../Day";



export default class Calendar extends React.Component {
  constructor() {
    super();
    CalendarActions.reloadCalendar();
    this.getCalendar = this.getCalendar.bind(this);
    this.state = {
      calendars: CalendarStore.getAll(),
      times: CalendarStore.getTimes(),
    };
  }
  componentWillMount() {
    CalendarStore.on("change", this.getCalendar);
  }

  componentWillUnmount() {
    CalendarStore.removeListener("change", this.getCalendar);
  }

  getCalendar() {
    this.setState({
      calendars: CalendarStore.getAll(),
      times: CalendarStore.getTimes()
    });
  }

  reloadCalendar() {
    CalendarActions.reloadCalendar();
  }

  render() {
    const  calendars = this.state.calendars;
    const { location } = this.props;
    // Visit non-inherited enumerable keys
    let a=0;
    const CalendarComponents = Object.keys(calendars).map((key) => {
      a++;
      let props = {
        classes: (calendars[key]||[]),
        period:key
      }
      //CHECK I
        if(location.pathname.match(/weekly/)){
          return <div className={this.state.times.indexOf(key)!==-1 ? '' : 'hidden'}><WeekDay key={a} {... props}/></div>;
        }else{
          return <div className={this.state.times.indexOf(key)!==-1 ? '' : 'hidden'}><Day key={a} {... props}/></div>;
        }
    });

    return (
      <div>
      {CalendarComponents}
      </div>
    );
  }
}
