const React = require('react');
const Link = require('react-router').Link;
const IndexLink = require('react-router').IndexLink;


export class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props
    const { collapsed } = this.state;
    //TEMP
    const featuredClass = location.href === "/" ? "active" : "";
    const archivesClass = location.href.match(/^\/favorites/) ? "active" : "";
    const settingsClass = location.href.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">

      </nav>
    );
  }
}
