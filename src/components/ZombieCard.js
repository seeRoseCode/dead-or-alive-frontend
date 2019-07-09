import React from "react";
// import { Route } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

const ZombieCard = props =>{

  return (
    <div className='ZombieCard'>
    <h1>{props.user.username}</h1>
    <div className="ui column">
      <div className="ui card">
        <div className="image">
        <img src={props.user.img_url} alt="profile"  />
        </div>
        <div className="content">
          <div className="header">
            {"Zombie"}
          </div>
          <Menu.Item
            name='Quiz'
            onClick={props.handleClick}
          />
          <div className="meta text-wrap">
            <small>{"Brainnnsssss...."}</small>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ZombieCard;
