import React from "react";
import * as CalendarActions from "../actions/CalendarActions";
import CalendarStore from "../stores/CalendarStore";

export default class ClassesLineClass extends React.Component {
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
    const { class_id, club_id, category, club, duration, endDate, intensity, pt, repeat, room, startDate, zona, hour, selectClass, class_link, delay  } = this.props;
    //const icon = complete ? "\u2714" : "\u2716"
    console.log(this.props);

    //GET FILTERSS
    return (
      <div style={{animationDelay: delay+'s'}} class={(selectClass)?'hourBlock fadeInUp animated '+selectClass:'hourBlock fadeInUp animated'} onClick={()=>this.highligthSame(class_id)}>
        <div>{hour} | {duration}'<span class="profSlice yellow"></span></div>
			</div>

    );
  }
}
