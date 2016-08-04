import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Daily from "./pages/Daily";
import Layout from "./pages/Layout";
import Weekly from "./pages/Weekly";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Weekly}></IndexRoute>
      <Route path="weekly" component={Weekly}></Route>
      <Route path="daily" component={Daily}></Route>
    </Route>
  </Router>,
app);
