import React, { Component } from 'react';
// import { handleSignUp } from '../actions/user_actions';

class SignUp extends Component {
    
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

    render(){
        return(
            <>{this.state.redirect}
            <div className="row" id="signup">
                <form className="col s8" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="username" type="text" className="validate" />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <i className="material-icons prefix">add_a_photo</i>
                            <input id="photo" type="text" className="validate" />
                            <label htmlFor="photo">Link to a photo of you</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="waves-effect waves-light green darken-3 btn-large">Sign Up!</button>
                        </div>
                    </div>
                </form>
            </div>
            </>

        )
    }
}

export default SignUp