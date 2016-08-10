import React from "react";
import { Link, IndexLink } from "react-router";

import ClassesBlock from "../ClassesBlock";
import CalendarStore from "../../stores/CalendarStore";
import * as CalendarActions from "../../actions/CalendarActions";
import WeekDay from "../WeekDay";



export default class Calendar extends React.Component {
  constructor() {
    super();
    this.getCalendar = this.getCalendar.bind(this);
    this.state = {
      calendars: CalendarStore.getAll(),
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
      calendar: CalendarStore.getAll(),
    });
  }

  reloadCalendar() {
    CalendarActions.reloadCalendar();
  }

  render() {
    const  calendars = this.state.calendars;

    // Visit non-inherited enumerable keys
    let a=0;
    const CalendarComponents = Object.keys(calendars).map((key) => {
      a++;
      let props = {classes: (calendars[key]||[]), period:key}
        return <WeekDay key={a} {... props}/>;
    });

    return (
      <div>
      {CalendarComponents}
      </div>
    );
  }
}
