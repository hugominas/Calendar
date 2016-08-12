import React from "react";
import { Link, IndexLink } from "react-router";

import ClassesBlock from "../ClassesBlock";
import * as CalendarActions from "../../actions/CalendarActions";
import CalendarStore from "../../stores/CalendarStore";


export default class Filters extends React.Component {
  constructor(props) {
    super();
    CalendarActions.reloadFilters();
    this.getFilters = this.getFilters.bind(this);
    this.state = {
      filters: CalendarStore.getFilters(),
    };
  }
  componentWillMount() {
    CalendarStore.on("change", this.getFilters);
  }

  componentWillUnmount() {
    CalendarStore.removeListener("change", this.getFilters);
  }

  getFilters() {
    this.setState({
      filters: CalendarStore.getFilters(),
    });
  }

  reloadFilters() {
    CalendarActions.reloadFilters();
  }

  render() {

    const { location } = this.props
    console.log(this.state.filters)
    let currentView = 'Weekly';
    if(location.pathname.match(/daily/)){
      currentView = 'Daily';
    }
    return (

      <div class="section group scheduleFilters">
        <div class="col span_2_of_12 calendarMode">
          <p class="style">VIEW STYLE</p>
          <div class="weekly">
            <Link to="weekly" class="icon active"></Link>
          </div>
          <div class="daily">
            <Link to="daily" class="icon"></Link>
          </div>
          <p class="type">{currentView}</p>

        </div>
        <div class="col span_3_of_12 gymLocation">
          <p>CHOOSE A GYM</p>
          <div class="searchGym">
            <input type="text" class="gymInput"  />
          </div>
          <div class="optionsGym">
            <h3>Amadora</h3>
            <ul>
              <li>
              <input type="checkbox" id="vitaTejo" /><label for="vitaTejo"><span></span>Dolce Vita Tejo</label>
              </li>
            </ul>
            <h3>Centro</h3>
            <ul>
              <li><input type="checkbox" id="aveiro"/><label for="aveiro"><span></span>Aveiro</label></li>
              <li><input type="checkbox" id="coimbra"/><label for="coimbra"><span></span>Coimbra</label></li>
            </ul>
            <h3>Linha</h3>
            <ul>
              <li><input type="checkbox" id="alges"/><label for="alges"><span></span>Algés</label></li>
              <li><input type="checkbox" id="cascais"/><label for="cascais"><span></span>Cascais</label></li>
              <li><input type="checkbox" id="antigravidade"/><label for="antigravidade"><span></span>Estúdio Antigravidade</label></li>
              <li><input type="checkbox" id="miraflores"/><label for="miraflores"><span></span>Miraflores</label></li>
            </ul>
            <div class="resetChoises">
              <span>RESET CHOISES</span>
            </div>
          </div>
        </div>
        <div class="col span_3_of_12 gymActivities">
          <p>FILTER ACTIVITIES</p>
          <div class="searchClass">
            <input type="text" class="classInput" />
          </div>
          <div class="optionsClass">
            <h3>Dance</h3>
            <ul>
              <li><input type="checkbox" id="airfit"/><label for="airfit"><span></span>Air Fit</label></li>
              <li><input type="checkbox" id="bodyjam"/><label for="bodyjam"><span></span>Bodyjam</label></li>
              <li><input type="checkbox" id="kizomba"/><label for="kizomba"><span></span>Kizomba</label></li>
              <li><input type="checkbox" id="zumba"/><label for="zumba"><span></span>Zumba</label></li>
            </ul>
            <h3>Martial Arts</h3>
            <ul>
              <li><input type="checkbox" id="kickboxing"/><label for="kickboxing"><span></span>Kickboxing</label></li>
              <li><input type="checkbox" id="warrior"/><label for="warrior"><span></span>Warrior</label></li>
            </ul>
            <div class="allClasses">
              <span>VIEW ALL CLASSES</span>
            </div>
          </div>
        </div>
        <div class="col span_2_of_12 classIntensity">
          <p>INTENSITY</p>
          <div class="intensityLevel group section">
            <div class="grau1 intensityBlock active"></div>
            <div class="grau2 intensityBlock active"></div>
            <div class="grau3 intensityBlock active"></div>
            <div class="grau4 intensityBlock"></div>
            <div class="grau5 intensityBlock"></div>
            <div class="grau6 intensityBlock"></div>
          </div>
          <p class="type">III</p>
        </div>
        <div class="col span_2_of_12 classTime">
          <p>DAY TIME</p>
          <div class="dayTime">
            <span class="morning active"></span>
            <span class="afternoon active"></span>
            <span class="evening"></span>
          </div>
          <p class="type">07:00 to 12:00</p>
        </div>
      </div>
    );
  }
}
