import React from "react";
// import { Route } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'
import CreateUser from './CreateUser'

class Header extends React.Component {

  state = { activeItem: ' ' }

  image = require('../images/logo.png')

  render() {
    return (
      <Menu secondary>
      <Menu.Item>
          <img 
          src={this.image}
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
        <Menu.Menu position='right'>
          <Menu.Item>
          LOGIN HERE:
            <Input name='username' placeholder='Username' />
          </Menu.Item>
          <Menu.Item>
            <Input name='password' placeholder='Password' />
          </Menu.Item>
          <Menu.Item
            name='submit'
            onClick={(e) => this.props.handleSubmit(e)}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;