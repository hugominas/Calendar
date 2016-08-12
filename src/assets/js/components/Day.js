import React from "react";

import ClassesLine from "./ClassesLine";
import * as CalendarActions from "../actions/CalendarActions";
import CalendarStore from "../stores/CalendarStore";

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

export default class Day extends React.Component {

  constructor() {
    super();
    this.state = {
      today: new Date().getDay()-2
    };
    this.getWeekDays();
    this.getTitleTable();
  }
  componentWillMount() {
    CalendarStore.on("change", this.getToday.bind(this));
  }

  componentWillUnmount() {
    CalendarStore.removeListener("change", this.getToday.bind(this));
  }
  getWeekDays(){
    this.weekDays=CalendarStore.getWeekDays();
  }
  getTitleTable(){
    this.TitleTable=CalendarStore.getTitleTable();
  }
  getToday(){
    let today = CalendarStore.getToday()+1;
    this.state.today=today;
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
                if(today+5==this.state.today){
                  let thisDate  = new Date().addDays(today);
                  if(new Date(this.props.classes[key][k].startDate)>thisDate || thisDate<new Date(this.props.classes[key][k].endDate)){
                    let uniqueKey=Math.floor((Math.random() * 1000) + 1);
                    (typeof this.props.classes[key][k].repeat !=='undefined' && this.props.classes[key][k].repeat.indexOf(i)!==-1)?prop.push(<ClassesLine key={uniqueKey} {... this.props.classes[key][k]}/>):false;
                  }
                }

              });
          })
        i++;
        return <div class="dailyClassCorp section group" key={i}>{prop}</div>;
    });


    const tableTitle=this.TitleTable.map((title)=>{
					return <div class={'col daily'+this.TitleTable[title]}>this.TitleTable[title]</div>
    })

    return (
        <div class="dailyClasses section group">
          <div class={'scheduleTime vertical-text-'+this.props.period}><span class={this.props.period+'Sche'}>{this.props.period}</span></div>
          <div class="dailyClass">
            <div class="dailyClassHeader section group">

            </div>
            {classComponents}
          </div>
          <div class="scheduleBorder"></div>
        </div>
    );
  }
}
