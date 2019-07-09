import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import MapContainer from './components/MapContainer'
import Header from './components/Header'
import Quiz from './components/Quiz'
import CreateUser from './components/CreateUser'
import Profile from './components/Profile'


class App extends Component {

  state = {
    redirect: " ",
    user: {
      username: " ",
      password: " ",
      img_url: " ",
      zombie: " ",
      location_id: " ",
      quiz_id: " "
    }
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
    e.preventDefault()

    let object = {
      username: this.state.user.username,
      password: this.state.user.password
    }

    fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accepts: 'application/json'},
    body: JSON.stringify({user: object })
    })
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        alert("Error")
        this.setState({errors: data.message}, () => console.log("Errors:", this.state.errors))
      }
      else {
        this.setState({user: data.user, redirect: <Redirect to='/profile' /> })
        localStorage.setItem('token', data.jwt)
        window.history.pushState({url: "/profile"}, "", "/profile")
        this.forceUpdate()
      }
    })
  }
  
  onUChange = (key, value) => {
    this.setState({user: {...this.state.user, [key]: value}})
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="App">  
        <Router>
          {this.state.redirect}

          <Header 
            handleClick={this.handleClick} 
            handleSubmit={this.handleSubmit} 
            user={this.state.user}
            onUChange={this.onUChange}
          />
          <img src={this.image} style={{ alignSelf: 'center', height: 85, width: 450,}} alt="banner"/>

          <Route exact path="/CreateUser" component={CreateUser} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/profile" render = {() => (
            <Profile user={this.state.user}/>)}/>
        </Router>
      </div>
    );
  }

}

export default App;
