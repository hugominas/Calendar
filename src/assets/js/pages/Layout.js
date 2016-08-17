import React from "react";

import Filters from "../components/layout/Filters";
import Calendar from "../components/layout/Calendar";
import Header from "../components/layout/Header";

import CalendarStore from "../stores/CalendarStore";

//import * as CalendarActions from "../actions/CalendarActions";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state={
      view: CalendarStore.getView()
    }
  }

  componentWillMount() {
    CalendarStore.on("change", this.getCalendarView.bind(this));
  }

  componentWillUnmount() {
    CalendarStore.removeListener("change", this.getCalendarView.bind(this));
  }

  getCalendarView() {
    this.setState({
      view: CalendarStore.getView()
    });
  }


  render() {
    return (
      <div>
      <Filters location={location} />
        <div class={(this.state.view=='weekly')?'weeklySchedule':'dailySchedule'+' section group'}>
          <Header location={location} />
          <Calendar location={location} />
        </div>
      </div>
    );
  }
}
