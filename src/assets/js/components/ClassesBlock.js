import React from "react";

import CalendarStore from "../stores/CalendarStore";
import * as CalendarActions from "../actions/CalendarActions";

export default class ClassBlocks extends React.Component {
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
    const { class_id, category, club, duration, endDate, intensity, pt, repeat, room, startDate, zona, hour, selectClass, class_link } = this.props;
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
      <div class={(selectClass)?'classBlock '+selectClass:'classBlock'} onClick={()=>this.highligthSame(class_id)}>
				<div class={'classColor orange-bg '+this.state.filters.class[class_id].color_class}></div>
				<span class="hourTime">{hour} | {duration}'</span>
        <span class="className">{this.state.filters.class[class_id].name}</span>
        <span class="placeDetails">{room}</span>
        <a href={class_link} class="linkDetails">CLASS DETAILS ></a>
			</div>

    );
  }
}
