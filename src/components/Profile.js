import React, { Component } from 'react'
import HumanCard from './HumanCard'
import ZombieCard from './ZombieCard'

class Profile extends Component {

  getProfileType = ()  => {
    if(this.props.user.zombie)
      return <ZombieCard handleClick={this.props.handleClick} user={this.props.user} />
    else
      return <HumanCard handleClick={this.props.handleClick} user={this.props.user} />
  }

  render() {
    return (
      <div id="profile">
      {this.getProfileType()}
      </div>
    )
  }
}

export default Profile
