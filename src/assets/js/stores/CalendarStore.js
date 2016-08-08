const EventEmitter = require('events').EventEmitter;
const dispatcher = require('../dispatcher');

class CalendarStore extends EventEmitter {
  constructor() {
    super()
    this.calendar ={"2000":{"Linha":{"Cascais Linha":{"Dance":{"Kizomba":[{"Estudio 2":{"startDate":"04-07-2016","endDate":"31-08-2016","duration":"45","repeat":"","pt":"","capacity":"","intensity":0}},{"Piscina 1":{"startDate":"04-07-2016","endDate":null,"duration":"","repeat":["1","3","5","7"],"pt":"","capacity":"","intensity":0}}]}}}},"1130":{"Linha":{"Cascais Linha":{"Dance":{"Zumba":[{"Estudio 2":{"startDate":"21-07-2016","endDate":null,"duration":"30","repeat":null,"pt":"","capacity":"","intensity":1}}]}}}}}
  }


  getAll() {
    return this.calendar;
  }

  handleActions(action) {
    switch(action.type) {
      case "GET_CALENDAR": {
        this.getAll();
        break;
      }
      case "GET_FILTERS": {
        this.calendar = action.calendar;
        this.emit("change");
        break;
      }
      case "DO_FILTER": {
        this.calendar = action.calendar;
        this.emit("change");
        break;
      }
    }
  }

}

const calendarStore = new CalendarStore;
dispatcher.register(calendarStore.handleActions.bind(calendarStore));
module.exports = calendarStore;
