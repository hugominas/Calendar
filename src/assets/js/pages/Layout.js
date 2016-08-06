const React = require('react');

//import Filters from "../components/layout/Filters";
import Calendar from "../components/layout/Calendar";
//import * as CalendarActions from "../actions/CalendarActions";

export class Layout extends React.Component { 
  render() {
    return (
      <div>
      <Calendar/>
      </div>
    );
  }
}
