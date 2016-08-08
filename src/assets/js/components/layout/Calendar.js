const React = require('react');
const CalendarActions = require('../../actions/CalendarActions');
const CalendarStore = require('../../stores/CalendarStore');
const WeekDay = require('../WeekDay');

export class Calendar extends React.Component {
  constructor() {
    super();
    this.getCalendar = this.getCalendar.bind(this);
    this.state = {
      calendar: CalendarStore.getAll(),
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
    const  calendars  = this.state.calendar;

    // Visit non-inherited enumerable keys
    const CalendarComponents = Object.keys(calendars).forEach((key) => {
      console.log(calendars[key])
        return <WeekDay key={key} {...calendars[key]}/>;
    });

console.log(CalendarComponents)
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <div>
      <div>{CalendarComponents}</div>
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; perfect.com</p>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}
