import React from "react";
import CalendarStore from "../stores/CalendarStore";

export default class ClassLines extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filters: CalendarStore.getFilters(),
    }
  }

  render() {
    const { class_id, club_id, category, club, duration, endDate, intensity, pt, repeat, room, startDate, zona, hour } = this.props;
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
      <div class="dailyClassCorp section group">
        <div class={'classColor orange-bg '+this.state.filters.class[class_id].color_class}></div>
				<div class="col dailyAula"><span>{this.state.filters.class[class_id].name}</span><span class="dailyCross"></span></div>
				<div class="col dailyHora"><span>{hour} | {duration}'</span></div>
				<div class="col dailyLocal"><span>{room}</span></div>
				<div class="col dailyCategoria"><span>{this.state.filters.class[class_id].category_name}</span></div>
				<div class="col dailyClube"><span>{this.state.filters.clubs[club_id]}</span><span class="dailyCross"></span></div>

			</div>

    );
  }
}
