const React = require('react');

const Link = require('react-router').Link;
const Filters = require('../components/layout/Filters').Filters;
const Calendar = require('../components/layout/Calendar').Calendar;
const Header = require('../components/layout/Header').Header;

export class Daily extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <Filters/>
        <Filters location={location} />
        <Header location={location} />
        <Calendar location={location} />
        {this.props.children}
      </div>
    );
  }
}
