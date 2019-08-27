import React from "react";
// import { Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class ZombieCard extends React.Component {

  imgUrl = () => {
    if (this.props.user.zombie === true && this.props.user.img_url === null) {return `https://image.flaticon.com/icons/png/512/1141/1141441.png`}
    else {return this.props.user.img_url}
  }

  render(){
      return (
    <div className='ZombieCard'>
    <h1>{this.props.user.username}</h1>
    <div className="ui column">
      <div className="ui card">
        <div className="image">
        <img src={this.imgUrl()} alt="profile" className="myFilter" />
        </div>
        <div className="content">
          <div className="header">
          Name: {this.props.user.username}<br/><br/>
          </div>
          <Menu.Item
            name='Quiz'
            onClick={this.props.handleClick}
          />
          <div className="meta text-wrap">
            <small>STATUS: {"Brainnnsssss...."}</small>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
}


export default ZombieCard;
