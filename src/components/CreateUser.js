import React, { Component } from 'react'
// import { Route } from 'react-router-dom';

class CreateUser extends Component {

  render() {
  return (
    <div className='createUser'> 
      <form style={{ float: 'left'}}>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username"> Enter a Username</label><br/><br/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password"> Enter a Password</label><br/><br/>
        </div>
        <div>
          <input type="imgUrl" name="imgUrl" placeholder="Image URL" />
          <label htmlFor="url"> Enter an image URL</label><br/><br/>
        </div>
        <input type="submit" value="Create Account" />
      </form>
    </div>
    );
  }
}

export default CreateUser;