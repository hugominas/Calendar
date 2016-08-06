import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CalendarStore extends EventEmitter {
  constructor() {
    super()
    this.calendar =
      {
    "2000": {
      "Linha": {
        "Cascais Linha": {
          "Dance": {
            "Kizomba": [
              {"Piscina 1": {
                "duration": "",
                "pt": "",
                "repeat": [1,2,3],
                "startDate": "02-08-2016",
                "endDate": "02-08-2017",
                "intensity": "0"
                }
              },
              {"Piscina 2": {
                  "duration": "",
                  "pt": "",
                  "intensity": "1"
                }
              }
            ]
          },
          "AQUA": {
            "Kizomba": {
              "Piscina 2": {
                "duration": "",
                "pt": "",
                "intensity": "intensityNone"
              }
            }
          }
        }
      }
    },
    "2100": {
      "Linha": {
        "Cascais Linha": {
          "Dance": {
            "Kizomba": {
              "Piscina 1": {
                "duration": "",
                "pt": "",
                "intensity": "intensityNone"
              }
            }
          }
        }
      }
    }

};

  }

  createClasses(text) {
    const id = Date.now();

    this.calendar.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.calendar;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createClasses(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}

const calendarStore = new CalendarStore;
dispatcher.register(calendarStore.handleActions.bind(calendarStore));

export default calendarStore;
