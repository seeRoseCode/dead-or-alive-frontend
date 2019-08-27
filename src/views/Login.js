import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Login extends Component {
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
    

    handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        let object = {
	        username: form.username.value,
	        password: form.password.value
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
    render(){

    return(
        <div>
            {this.state.redirect}
            <form className="ui-form" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col s12 m4">
                        <div className="field">
                            <label>Username</label>
                            <input required type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input required type="password" name="password" placeholder="Password"/>
                            <button className="waves-effect waves-light green lighten-1 btn" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
    }
}

export default Login