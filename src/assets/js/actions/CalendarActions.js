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
export function setViewTimes(times) {
  dispatcher.dispatch({
    type: "SET_TIMES",
    times
  });
}

export function reloadFilters() {
  dispatcher.dispatch({type: "FETCH_FILTERS"});
   axios(CalendarStore.getFiltersURL()).then((data) => {
     dispatcher.dispatch({type: "RECEIVE_FILTERS", filters: data.data});
   })
}

export function reloadCalendar() {
  dispatcher.dispatch({type: "FETCH_CLASSES"});
   axios(CalendarStore.getScheduleURL()).then((data) => {
     dispatcher.dispatch({type: "RECEIVE_CLASSES", classes: data.data});
   })
}
