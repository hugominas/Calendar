const dispatcher = require("../dispatcher");
const axios = require('axios'); 

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

export function reloadCalendar() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_CLASSES"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_CLASSES", todos: [
      {
        id: 8484848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});
  }, 1000);
}
