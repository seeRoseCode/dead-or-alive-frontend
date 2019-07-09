import React from "react";
import { Input, Menu } from 'semantic-ui-react'
// import { Route } from 'react-router-dom';

const HumanCard = props =>{
  console.log(props.user)
  return (
    <div className='humanCard' style={{ float: 'center'}}>
      <h1>{props.user.username}</h1>
      <div className="ui column">
        <div className="ui card">
          <div className="image">
            <img src={props.user.img_url} alt="profile"  />
          </div>
          <div className="content">
            <div className="header">
              {"Human"}
            </div>
            <Menu.Item
              name='Quiz'
              onClick={props.handleClick}
            />
            <div className="meta text-wrap">
              <small>{"I'm alive"}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HumanCard;
