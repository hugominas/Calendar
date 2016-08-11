import React from "react";

export default class ClassLines extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { category, club, duration, endDate, intensity, pt, repeat, room, startDate, zona, hour } = this.props;
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
        <div class="classColor green-bg"></div>
				<div class="col dailyAula"><span>HIDROGINÁSTICA</span><span class="dailyCross"></span></div>
				<div class="col dailyHora"><span>{hour} | {duration}'</span></div>
				<div class="col dailyLocal"><span>{room}</span></div>
				<div class="col dailyCategoria"><span>{category}</span></div>
				<div class="col dailyClube"><span>{club}</span><span class="dailyCross"></span></div>

			</div>

    );
  }
}
