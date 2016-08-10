import React from "react";
import { Link } from "react-router";

import Filters from "../components/layout/Filters";
import Calendar from "../components/layout/Calendar";
import Header from "../components/layout/Header";


export default class Daily extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <Filters location={location} />
        <div class="weeklySchedule section group">
          <Header location={location} />
          <Calendar location={location} />
        </div>
      </div>
    );
  }
}
