import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import UserContainer from './components/UserContainer'
import MapContainer from './components/MapContainer'
import Header from './components/Header'
import Quiz from './components/Quiz'
import CreateUser from './components/CreateUser'
import Profile from './components/Profile'

class App extends Component {

  state = {
    redirect: null
  }
  
  image = require('./images/bannerlogo.png')

  handleClick = (e, { name }) => {
      // console.log(name)
      if(name === 'Home'){
        this.setState({ redirect: <Redirect to='/' /> })
      }
      else if (name === 'New User') {
        this.setState({ redirect: <Redirect to='/CreateUser' /> })
      } 
    }

    handleSubmit = (e) => {
      console.log(e.target)
    }
  
  render() {
    return (
      <div className="App">  
        <Router>
          {this.state.redirect}

          <Header handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
          <img src={this.image} style={{ alignSelf: 'center', height: 85, width: 450,}} />

          <Route exact path="/CreateUser" component={CreateUser} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/profile/:id" component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;
