import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class CalendarStore extends EventEmitter {
  constructor() {
    super()
    this.calendar = {morning:{},afternoon:{},nigth:{}};
    this.weekDays=['Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.filters=[];
    this.classes ={
        "2000": [{
                    "duration": "",
                    "pt": "",
                    "repeat": [1,2,3],
                    "startDate": "02-08-2016",
                    "endDate": "02-08-2017",
                    "intensity": 2,
                    "zona": 1,
                    "club": 2,
                    "category": 3,
                    "room": 1
                  },
                  {
                    "duration": "",
                    "pt": "",
                    "repeat": [1,3,5],
                    "startDate": "02-08-2016",
                    "endDate": "02-08-2017",
                    "intensity": 2,
                    "zona": 1,
                    "club": 3,
                    "category": 4,
                    "room": 3
                }],
        "2100": [{
                    "duration": "",
                    "pt": "",
                    "repeat": [6],
                    "startDate": "02-08-2016",
                    "endDate": "02-08-2017",
                    "intensity": 2,
                    "zona": 1,
                    "club": 3,
                    "category": 4,
                    "room": 3
          }],
          "1500": [{
                      "duration": "",
                      "pt": "",
                      "repeat": [1,2,3],
                      "startDate": "02-08-2016",
                      "endDate": "02-08-2017",
                      "intensity": 2,
                      "zona": 1,
                      "club": 2,
                      "category": 3,
                      "room": 1
                    },
                    {
                      "duration": "",
                      "pt": "",
                      "repeat": [1,3,5],
                      "startDate": "02-08-2016",
                      "endDate": "02-08-2017",
                      "intensity": 2,
                      "zona": 1,
                      "club": 3,
                      "category": 4,
                      "room": 3
                  }],
          "900": [{
                      "duration": "",
                      "pt": "",
                      "repeat": [3],
                      "startDate": "02-08-2016",
                      "endDate": "02-08-2017",
                      "intensity": 2,
                      "zona": 1,
                      "club": 3,
                      "category": 4,
                      "room": 3
            }]
    }
  }


  updateFilter(filt) {
    return this.filters.push(filt);
  }

  getWeekDays() {
    return this.weekDays;
  }
  getMonthNames() {
    return this.monthNames;
  }
  getAll() {
    return this.calendar = {
      morning:this.getMorning(),
      afternoon:this.getAfternoon(),
      evening:this.getNigth()
    };
  }

  getNigth() {
    const nigthClasses = Object.keys(this.classes).map((key) => {this.classes[key].map((ele) => {ele.hour=key}); return (parseInt(key) >= 1800 && parseInt(key) < 2300)?this.classes[key]:false;})
    return nigthClasses;
  }

  getAfternoon() {
    const afternoonClasses = Object.keys(this.classes).map((key) => {this.classes[key].map((ele) => {ele.hour=key}); return (parseInt(key) >= 1200 && parseInt(key) < 1800)?this.classes[key]:false;})
    return afternoonClasses;
  }

  getMorning() {
    const morningClasses = Object.keys(this.classes).map((key) => {this.classes[key].map((ele) => {ele.hour=key}); return (parseInt(key) >= 700 && parseInt(key) < 1200)?this.classes[key]:false;})
    return morningClasses;
  }

  handleActions(action) {
    switch(action.type) {
      case "GET_CALENDAR": {
        this.getAll();
        break;
      }
      case "GET_FILTERS": {
        this.classes = action.calendar;
        this.emit("change");
        break;
      }
      case "DO_FILTER": {
        this.updateFilter(action.filter);
        this.emit("change");
        break;
      }
    }
  }

}

const calendarStore = new CalendarStore;
dispatcher.register(calendarStore.handleActions.bind(calendarStore));
export default calendarStore;
