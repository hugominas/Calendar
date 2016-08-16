import React from "react";
import { Link } from "react-router";

import Filters from "../components/layout/Filters";
import Calendar from "../components/layout/Calendar";
import Header from "../components/layout/Header";

//import * as CalendarActions from "../actions/CalendarActions";

export default class Layout extends React.Component {

  render() {
    const { location } = this.props;
    return (
      <div>
      <Filters location={location} />
        <div class={(location.pathname.match(/weekly/))?'weeklySchedule':'dailySchedule'+' section group'}>
          <Header location={location} />
          <Calendar location={location} />
        </div>
      </div>
    );
  }
}
