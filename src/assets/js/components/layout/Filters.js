import React from "react";
import { Link, IndexLink } from "react-router";

import ClassesBlock from "../ClassesBlock";
import * as CalendarActions from "../../actions/CalendarActions";


export default class Filters extends React.Component {
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
    const featuredClass = this.props.location.pathname === "/" ? "active" : "";
    const archivesClass = this.props.location.pathname.match(/^\/favorites/) ? "active" : "";
    const settingsClass = this.props.location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div class="section group scheduleFiltersn">
        <div class="container">
  
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
      </div>
    );
  }
}
