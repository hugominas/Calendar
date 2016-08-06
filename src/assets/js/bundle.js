require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');

const React = require('react');
const ReactDOM = require('react-dom');
//DEFAUT TO CLASS NAME important import class name with var
const Calendar = require('./components/layout/Calendar').Calendar;

ReactDOM.render(
  <div><Calendar/></div>,
  document.getElementById('app'));
