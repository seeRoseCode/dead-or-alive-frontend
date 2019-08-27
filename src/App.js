import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Login from './views/Login'
import SignUp from './views/SignUp'

import Quiz from './components/Quiz'
import CreateUser from './components/CreateUser'
import Profile from './components/Profile'


class App extends Component {
  state={
    redirect: '',
    user: {
      username: "",
      password: "",
      id: "",
      img_url: "",
      zombie: false,  
    }
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
    let object = {
      username: this.state.user.username,
      password: this.state.user.password
    }
    
    fetch('http://localhost:3000/users', {
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

  createUser = (e) => {
    e.preventDefault()
    let object = {
      username: this.state.user.username,
      password: this.state.user.password,
      img_url: this.state.user.img_url
    }
    fetch('http://localhost:3000/users', {
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
    fetch(`http://localhost:3000/users/${userId}`, {
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
  
  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({ redirect: <Redirect to='/' /> })
  }

  render() {

    return (
      <div className="App">
       
        <Router>
          {this.state.redirect}

          <Navbar handleLogout={this.handleLogout}/>
          <img src={this.image} style={{ alignSelf: 'center', height: 85, width: 450,}} alt="banner"/>

          <Route exact path="/login" render = {() => (<Login redirect={this.state.redirect} />)}/>
            
          <Route exact path="/sign_up" render = {() => (<SignUp redirect={this.state.redirect} />)}/>

          <Route exact path="/quiz" render = {() => (<Quiz redirect={this.state.redirect} userInfo={this.state.user} handleQuizForm={this.handleQuizForm}/>)}/>

          <Route exact path="/profile" render = {() => (<Profile handleClick={this.handleClick} user={this.state.user}/>)}/>

          <Route exact path="/CreateUser" render = {() => (<CreateUser onUChange={this.onUChange} user={this.state.user} createUser={this.createUser}/>)} />

        </Router>
      </div>
    );
  }
}

export default App;
