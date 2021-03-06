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
      id: "",
      img_url: null,
      zombie: false,
      location_id: " ",
      quiz_id: " "
    },
  }

  image = require('./images/bannerlogo.png')


  handleClick = (e, { name }) => {

    if(name === 'Home'){
      this.setState({ redirect: <Redirect to='/' /> })
    }
    else if (name === 'New User') {
      this.setState({ redirect: <Redirect to='/CreateUser' /> })
    }
    else if (name === 'Quiz') {
      this.setState({ redirect: <Redirect to='/Quiz' /> })
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)

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
      console.log(data)
      if (data.message) {
        alert("Error")
        this.setState({errors: data.message}, () => console.log("Errors:", this.state.errors))
      }
      else {
        this.setState({user: data.user, redirect: <Redirect to='/profile' /> })
        localStorage.setItem('token', data.jwt)
        window.history.pushState({url: "/profile"}, "", "/profile")
        this.forceUpdate()
        // console.log(this.state.user)
      }
    })

  }

  onUChange = (key, value) => {
    this.setState({user: {...this.state.user, [key]: value}})
  }


  handleQuizForm = (e, score, user) => {
    let userId = user.userInfo.id

    if(score > 3){
      let zombieChange = user.userInfo.zombie = !user.userInfo.zombie
      this.setState({
        user: { ...this.state.user,
        zombie: zombieChange
        }
      })

    }
    else {
      let zombieChange = user.userInfo.zombie = !user.userInfo.zombie
      this.setState({
        user: { ...this.state.user,
        zombie: zombieChange
        }
      })
    }
    fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: this.state.user})
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
    .then(this.setState({
      redirect: <Redirect to='/profile'/>
    }))
  }



  // render() {

  createUser = (e) => {
    e.preventDefault()
    let object = {
      username: this.state.user.username,
      password: this.state.user.password,
      img_url: this.state.user.img_url
    }
    console.log(object)
    fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
    mode: "cors",
    body: JSON.stringify({user: object })
    })
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        alert("Error")
        this.setState({errors: data.message}, () => console.log("Errors:", this.state.errors))
      }
      else {
        this.setState({object, redirect: <Redirect to='/profile' /> })
        localStorage.setItem('token', data.jwt)
        window.history.pushState({url: "/profile"}, "", "/profile")
        this.forceUpdate()
      }
    })
  }

    // handleLogout = () => {
    //   localStorage.removeItem('token')
    //   this.setState({ redirect: <Redirect to='/' /> })
    // }

  render() {

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


          <Route exact path="/quiz" render = {() => (
            <Quiz redirect={this.state.redirect} userInfo={this.state.user} handleQuizForm={this.handleQuizForm}/>)}/>


          <Route exact path="/profile" render = {() => (
            <Profile handleClick={this.handleClick} user={this.state.user}/>)}/>

          <Route exact path="/CreateUser" render = {() => (
            <CreateUser onUChange={this.onUChange} user={this.state.user} createUser={this.createUser}/>)} />

        </Router>
      </div>
    );
  }
}

export default App;
