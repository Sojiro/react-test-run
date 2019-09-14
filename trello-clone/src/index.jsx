import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import App from './App';
import { Board } from './board';
import { BoardList } from './board-list';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { NotFound } from './util/not-found';

const routing = (
  <Router>
    <div>
      <Link to="/">
        <div className="trello-logo"></div>
      </Link>
      <Switch>
        <Route path="/boards/:id" component={Board} />
        <Route path="/boards" component={BoardList} />
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
