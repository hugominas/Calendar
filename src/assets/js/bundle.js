require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');

const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require("react-router").hashHistory;
const IndexRoute = require("react-router").IndexRoute;
const Route = require("react-router").Route;
const Router = require("react-router").Router;
//DEFAUT TO CLASS NAME important import class name with var
const Calendar = require('./components/layout/Calendar').Calendar;
const Layout = require('./pages/Layout').Layout;
const Weekly = require('./pages/Weekly').Weekly;
const Daily = require('./pages/Daily').Daily;


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    <IndexRoute component={Weekly}></IndexRoute>
    <Route path="weekly" component={Weekly}></Route>
    <Route path="daily" component={Daily}></Route>
   </Route>
</Router>,
  document.getElementById('app'));
