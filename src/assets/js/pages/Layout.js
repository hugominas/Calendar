import React from "react";

import Filters from "../components/layout/Filters";
import Calendar from "../components/layout/Calendar";
import Header from "../components/layout/Header";


//import * as CalendarActions from "../actions/CalendarActions";

export default class Layout extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Filters location={location} />
        <Header location={location} />
        <Calendar location={location} />
      </div>
    );
  }
}
