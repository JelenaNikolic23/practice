import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";

import './style/main.scss';
import About from "./components/About/About";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/about/:flight" component={About} />
          <Route path="/" component={HomePage} />
      </Switch>
  </BrowserRouter>,
    document.getElementById('root')
);
