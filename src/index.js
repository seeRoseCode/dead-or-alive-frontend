import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateUser from './components/CreateUser'
import Profile from './components/Profile'
import Quiz from './components/Quiz'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Application = () => {

  return (
    <App />
  )
}

const newUserForm = () => {
  return (
    <CreateUser />
  )
}

const quiz = () => {
  return (
    <Quiz />
  )
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" render={Application} />
      <Route exact path="/CreateUser" render={newUserForm} />
      <Route exact path="/Quiz" render={quiz} />
      <Route exact path="/profile/:id" component={Profile} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
