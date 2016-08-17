import React from "react";
import * as CalendarActions from "../actions/CalendarActions";
import CalendarStore from "../stores/CalendarStore";

export default class ClassLines extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filters: CalendarStore.getFilters(),
    }
  }
  highligthSame(classId){
    CalendarActions.setActiveClass(classId);
  }

  render() {
    const { class_id, club_id, category, club, duration, endDate, intensity, pt, repeat, room, startDate, zona, hour, selectClass, class_link  } = this.props;
    //const icon = complete ? "\u2714" : "\u2716"

    /*if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }*/
    //GET FILTERSS
    return (
      <div class={(selectClass)?'dailyClassCorp section group '+selectClass:'dailyClassCorp section group'} onClick={()=>this.highligthSame(class_id)}>
        <div class={'classColor orange-bg '+this.state.filters.class[class_id].color_class}></div>
				<div class="col dailyAula"><span>{this.state.filters.class[class_id].name}</span><span class="dailyCross"></span></div>
				<div class="col dailyHora"><span>{hour} | {duration}'</span></div>
				<div class="col dailyLocal"><span>{room}</span></div>
				<div class="col dailyCategoria"><span>{this.state.filters.class[class_id].category_name}</span></div>
				<div class="col dailyClube"><span>{this.state.filters.clubs[club_id]}</span><span class="dailyCross"></span></div>
        <div class="seeDetails"><a href={class_link} class="linkDetails">CLASS DETAILS ></a></div>

			</div>

    );
  }
}
