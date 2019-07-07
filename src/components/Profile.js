import React, { Component } from 'react'
import HumanCard from './HumanCard'
import ZombieCard from './ZombieCard'

class Profile extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch('http://localhost:3000/profile/'+id)
    .then(res => res.json())
    .then(res => this.setState({ user: res }) )
  }

  getProfileType = ()=> {
    if(this.state.user.zombie)
      return <ZombieCard user={this.state.user} />
    else
      return <HumanCard user={this.state.user} />
  }

  render() {
    return (
      <div id="profile">
        { this.getProfileType() }
      </div>
    )
  }
}

export default Profile
