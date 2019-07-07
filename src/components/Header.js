import React from "react";
import { Route } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item 
        name='home' 
        active={activeItem === 'home'} 
        onClick={this.handleItemClick} 
        />

        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='New User'
          active={activeItem === 'newUser'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
          LOGIN:
            <Input icon='userName' placeholder='Username' />
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Password' />
          </Menu.Item>
          <Menu.Item
            name='submit'
            active={activeItem === 'submit'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;