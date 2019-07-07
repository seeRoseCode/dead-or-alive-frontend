import React from "react";
import { Route } from 'react-router-dom';

const HumanCard = props =>{

  return (
    <div className='humanCard'> 
      <h1>{props.user.username}</h1>
      <div className="ui column">
        <div className="ui card">
          <div className="image">
            <img src={props.user.img_url} alt="profile image"  />
          </div>
          <div className="content">
            <div className="header">
              {"Human"}
            </div>

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