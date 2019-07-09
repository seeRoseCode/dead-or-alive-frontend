import React, { Component } from 'react'
// import { Route } from 'react-router-dom';

class CreateUser extends Component {

  render() {
    console.log(this.props)
  return (
    <div className='createUser'> 
      <form style={{ float: 'left'}}>
        <div>
          <input type="text" name="username" placeholder="Username" 
          onChange={(e) => this.props.onUChange("username", e.target.value)}/>
          <label htmlFor="username"> Enter a Username</label><br/><br/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" 
          onChange={(e) => this.props.onUChange("password", e.target.value)}/>
          <label htmlFor="password"> Enter a Password</label><br/><br/>
        </div>
        <div>
          <input type="imgUrl" name="imgUrl" placeholder="Image URL" 
          onChange={(e) => this.props.onUChange("img_url", e.target.value)}/>
          <label htmlFor="url"> Enter an image URL</label><br/><br/>
        </div>
        <input type="submit" onClick={this.props.createUser} />
      </form>
    </div>
    );
  }
}

export default CreateUser;