const React = require('react');
const CalendarActions = require('../../actions/CalendarActions');
const CalendarStore = require('../../stores/CalendarStore');
const WeekDay = require('../WeekDay').WeekDay;

export class Calendar extends React.Component {
  constructor() {
    super();
    this.getCalendar = this.getCalendar.bind(this);
    this.state = {
      calendars: CalendarStore.getAll(),
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
    const  calendars = this.state.calendars;

    // Visit non-inherited enumerable keys
    let a=0;
    const CalendarComponents = Object.keys(calendars).map((key) => {
      a++;
        return <div class="calendarBlock" key={a}><WeekDay {... calendars[key]}/></div>;
    });

    return (
      <div>{CalendarComponents}</div>
    );
  }
}
