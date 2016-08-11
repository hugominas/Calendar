import axios from "axios";
import dispatcher from "../dispatcher";
import CalendarStore from "../stores/CalendarStore";

export function getCalendar() {
  dispatcher.dispatch({
    type: "GET_CALENDAR"
  });
}
export function filterCalendar(filter) {
  dispatcher.dispatch({
    type: "GET_CALENDAR",
    filter,
  });
}
export function getFilters() {
  dispatcher.dispatch({
    type: "GET_FILTERS"
  });
}
export function setToday(today) {
  dispatcher.dispatch({
    type: "SET_TODAY",
    today
  });
}
export function reloadCalendar() {


   axios(CalendarStore.getScheduleURL()).then((data) => {
     console.log("got the data!", data);
   })

  dispatcher.dispatch({type: "FETCH_CLASSES"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_CLASSES", classes: {
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
        "1400": [{
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
    }});
  }, 1000);
}
