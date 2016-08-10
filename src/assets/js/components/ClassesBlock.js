import React from "react";

export default class ClassBlocks extends React.Component {
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
      <div class="classBlock">
				<div class="classColor orange-bg"></div>
				<span class="hourTime">{hour} | {duration}'</span>
				<span class="className">{category}</span>
			</div>

    );
  }
}
