import React from "react";
// import { Route } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

class Header extends React.Component {

  state = {
    activeItem: ' ' ,
  }

  image = require('../images/logo.png')

  render() {
    return (
      <Menu secondary>
      <Menu.Item>
          <img
          src={this.image} alt="logo"
          style={{
            alignSelf: 'center',
            height: 70,
            width: 125,
            borderWidth: 1,
          }}
          />
        </Menu.Item>

        <Menu.Item
          name='Home'
          active={this.state.activeItem === 'home'}
          onClick={this.props.handleClick}
        />

        <Menu.Item
          name='New User'
          active={this.state.activeItem === 'newUser'}
          onClick={this.props.handleClick}
        />

        <Menu.Menu position='right' name='input'>
          <Menu.Item>
          LOGIN HERE:
            <Input name='username' type='text' placeholder='Username'
            onChange={(e) => this.props.onUChange("username", e.target.value)}/>
          </Menu.Item>
          <Menu.Item>
            <Input name='password' type='text' placeholder='Password'
            onChange={(e) => this.props.onUChange("password", e.target.value)}/>
          </Menu.Item>
          <Menu.Item
            name='submit'
            onClick={this.props.handleSubmit}
          /> 
      />}
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;
