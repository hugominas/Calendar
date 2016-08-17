import { EventEmitter } from "events";
import dispatcher from "../dispatcher";



class CalendarStore extends EventEmitter {
  constructor() {
    super()
    this.defaults     = window.defaultClass;
    this.view         = 'weekly'
    this.defaults.schedule=this.defaults.path+'/schedule.json';
    this.defaults.filters=this.defaults.path+'/filters.json';
    this.calendar     = {morning:{},afternoon:{},nigth:{}};
    this.dayTitleTable= ['Aula','Hora','Local','Categoria','Clube'];
    this.weekDays     = ['Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.monthNames   = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.filters      = {};
    this.activeFilters= {intensity:0,clubs:[]};
    this.classes      = {};
    this.times        = ['morning','afternoon','evening'];
    this.selectedDay  = new Date().getDay();
    this.selectedClass= '';

  }

  getView(){
    return this.view;
  }

  getActiveClass(){
    return this.selectedClass;
  }

  getIntensity(){
    return this.activeFilters.intensity;
  }

  updateFilter(filt, val) {
    return this.activeFilters[filt]=val;
  }

  getToday() {
    return this.selectedDay;
  }

  getTitleTable() {
    return this.dayTitleTable;
  }

  getScheduleURL() {
    return this.defaults.schedule;
  }

  getFiltersURL() {
    return this.defaults.filters;
  }

  getWeekDays() {
    return this.weekDays;
  }

  getMonthNames() {
    return this.monthNames;
  }

  getFilters() {
    return this.filters;
  }

  getTimes() {
    return this.times;
  }

  getAll() {
    return this.calendar = {
      morning:this.getMorning(),
      afternoon:this.getAfternoon(),
      evening:this.getNigth()
    };
  }

  doFiltersOn(ele){
    ele=ele.map((e) => {
      let isValid = e;
      //INTENSITY
      isValid = (e.intensity==this.activeFilters.intensity || this.activeFilters.intensity==0)?e:false;

      return isValid;
    });
    return ele;
  }

  getNigth() {
    let idAula=0;
    const nigthClasses = Object.keys(this.classes).map((key) => {
      //SET TIME WITH :
      this.classes[key].map((ele) => {
        ele.id=idAula;
        idAula++;
        ele.hour=ele.hour.slice(0, 2)+':'+ele.hour.slice(2, 4)
      });
      // RETURN KEY
      return (parseInt(key) >= 1800 && parseInt(key) < 2300)?this.doFiltersOn(this.classes[key]):false;
    })
    return nigthClasses;
  }

  getAfternoon() {
    const afternoonClasses = Object.keys(this.classes).map((key) => {
      // RETURN KEY
      return (parseInt(key) >= 1200 && parseInt(key) < 1800)?this.doFiltersOn(this.classes[key]):false;
    })
    return afternoonClasses;
  }

  getMorning() {
    const morningClasses = Object.keys(this.classes).map((key) => {
      //SET CORRTECT TIME
      this.classes[key].map((ele) => {ele.hour=(key.length==3)?'0'+(''+key):key;});
      // RETURN KEY
      return (parseInt(key) >= 700 && parseInt(key) < 1200)?this.doFiltersOn(this.classes[key]):false;
    })
    return morningClasses;
  }

  handleActions(action) {
    switch(action.type) {
      case 'SET_VIEW': {
        this.view = action.view;
        this.emit("change");
        break;
      }
      case 'RECEIVE_CLASSES': {
        this.classes = action.classes;
        this.getAll();
        this.emit("change");
        break;
      }
      case 'RECEIVE_FILTERS': {
        this.filters = action.filters;
        this.emit("change");
        break;
      }
      case "GET_CALENDAR": {
        this.getAll();
        break;
      }
      case "GET_FILTERS": {
        this.classes = action.calendar;
        this.emit("change");
        break;
      }
      case "SET_TODAY": {
        this.selectedDay = action.today;
        this.emit("change");
        break;
      }
      case "DO_FILTER": {
        this.updateFilter(action.filter);
        this.emit("change");
        break;
      }
      case "SET_TIMES": {
        this.times = action.times;
        this.emit("change");
        break;
      }
      case "SET_ACTIVECLASS": {
        this.selectedClass = (action.classId!=this.selectedClass)?action.classId:'';
        this.emit("change");
        break;
      }
      case "SET_INTENCITY": {
        this.activeFilters.intensity = action.inten;
        this.getAll();
        this.emit("change");
        break;
      }
      case "SET_CLUBFILTER": {
        let indexClub = this.activeFilters.clubs.indexOf(action.clubid);
        if(indexClub!==-1){
          this.activeFilters.club.splice(indexClub, 1);
        }else{
          this.activeFilters.clubs.push(action.clubid)
        };
        this.getAll();
        this.emit("change");
        break;
      }

    }
  }

}

const calendarStore = new CalendarStore;

calendarStore.setMaxListeners(0)
dispatcher.register(calendarStore.handleActions.bind(calendarStore));
export default calendarStore;
