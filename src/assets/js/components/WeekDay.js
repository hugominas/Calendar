import React from "react";

import ClassesBlock from "./ClassesBlock";
import CalendarStore from "../stores/CalendarStore";
import * as CalendarActions from "../actions/CalendarActions";

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};


export default class WeekDay extends React.Component {
  constructor(props) {
    super();
    this.getWeekDays();

  }
  getWeekDays(){
    this.weekDays=CalendarStore.getWeekDays();
  }

  render() {
    let i=0;
    const currWeekDay = new Date();
    const classComponents = this.weekDays.map((key1) => {
      //CHECK IF ITS ON THE CORRECT DAY AND ADD TO PROP
      let prop = []
        Object.keys(this.props.classes).map((key) => {
              Object.keys(this.props.classes[key]).map((k) => {
                //CHECK IF REPEATERS BELONG TO THE DAY
                let today  = (i-currWeekDay.getDay())+1;
                let thisDate  = new Date().addDays(today);
                if(new Date(this.props.classes[key][k].startDate)>thisDate || thisDate<new Date(this.props.classes[key][k].endDate)){
                  //let uniqueKey=Math.floor((Math.random() * 1000) + 1);
                  (typeof this.props.classes[key][k].repeat !=='undefined' && this.props.classes[key][k].repeat.indexOf(i)!==-1)?prop.push(<ClassesBlock key={this.props.classes[key][k].id} {... this.props.classes[key][k]}/>):false;
                }

              });
          })
        i++;
        return <div class="dayTitle" key={i}>{prop}</div>;
    });

/*    const classComponents = Object.keys(this.props).map((key) => {
      console.log(this.props)
      i++;
        return <div class="classesBlock" key={i}><ClassesBlock {... this.props[key]}/></div>;
    }); */

    return (
        <div class="weekClasses section group">
          <div class={'scheduleTime vertical-text-'+this.props.period}><span class={this.props.period+'Sche'}>{this.props.period}</span></div>
          {classComponents}
          <div class="scheduleBorder"></div>
        </div>
    );
  }
}
