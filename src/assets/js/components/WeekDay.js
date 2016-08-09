const React = require('react');
const ClassesBlock = require('./ClassesBlock').ClassBlocks;
const CalendarStore = require('../stores/CalendarStore');


export class WeekDay extends React.Component {
  constructor(props) {
    super();
    this.getWeekDays();
  }
  getWeekDays(){
    this.weekDays=CalendarStore.getWeekDays();
  }
  render() {

    let i=0;
    const classComponents = this.weekDays.map((key) => {
      //CHECK IF ITS ON THE CORRECT DAY AND ADD TO PROP
      let prop = []
      Object.keys(this.props).map((key) => {
            Object.keys(this.props[key]).map((k) => {
              //CHECK IF REPEATERS BELONG TO THE DAY
              //Todo: CHECK IF DATE IS TODAY///////////////////////7
              (typeof this.props[key][k].repeat !=='undefined' && this.props[key][k].repeat.indexOf(i)!==-1)?prop.push(<ClassesBlock {... this.props[key][k]}/>):false;
            });
        })
      i++;
        return <div class="weekDay" key={i}>{prop}</div>;
    });

/*    const classComponents = Object.keys(this.props).map((key) => {
      console.log(this.props)
      i++;
        return <div class="classesBlock" key={i}><ClassesBlock {... this.props[key]}/></div>;
    }); */

    return (
        <div>
          {classComponents}
        </div>
    );
  }
}
