const React = require('react') ;
const Link = require('react-router').Link;
const Filters = require('../components/layout/Filters').Filters;
const Calendar = require('../components/layout/Calendar').Calendar;

//import Filters from "../components/layout/Filters";
//import * as CalendarActions from "../actions/CalendarActions";

export class Layout extends React.Component {
  render() {
    return (
      <div>
      <Filters location={location} />
      <Calendar location={location} />
      </div>
    );
  }
}
