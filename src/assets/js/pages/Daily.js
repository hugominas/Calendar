import React from "react";
import { Link } from "react-router";

import Filters from "../components/layout/Filters";
import Calendar from "../components/layout/Calendar";

export default class Daily extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <Filters/>
        <Calendar location={location} />
        {this.props.children}
      </div>
    );
  }
}
