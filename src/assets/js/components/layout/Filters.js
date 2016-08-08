const React = require('react');
const Link = require('react-router').Link;
const IndexLink = require('react-router').IndexLink;


export class Filters extends React.Component {
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
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              
              <li class={archivesClass}>
                <Link to="weekly" onClick={this.toggleCollapse.bind(this)}>Weekly</Link>
              </li>
              <li class={settingsClass}>
                <Link to="daily" onClick={this.toggleCollapse.bind(this)}>Daily</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
