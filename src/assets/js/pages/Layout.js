const React = require('react') ;
const Link = require('react-router').Link;
const Filters = require('../components/layout/Filters').Filters;
const Calendar = require('../components/layout/Calendar').Calendar;
const Header = require('../components/layout/Header').Header;

//import Filters from "../components/layout/Filters";
//import * as CalendarActions from "../actions/CalendarActions";

export default class Layout extends React.Component {
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
