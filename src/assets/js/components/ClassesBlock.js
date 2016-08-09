const React = require('react');

export class ClassBlocks extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { category, club, duration, endDate, intensity, pt, repeat, room, startDate, zona } = this.props;
    //const icon = complete ? "\u2714" : "\u2716"

    /*if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }*/

    return (
      <li>
        <span>{category}</span><span>{club}</span><span>{duration}</span><span>{endDate}</span><span>{intensity}</span><span>{pt}</span><span>{repeat}</span><span>{room}</span><span>{startDate}</span><span>{zona}</span>
      </li>
    );
  }
}
