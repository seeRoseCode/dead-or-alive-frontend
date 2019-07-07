import React from "react";
import { Route } from 'react-router-dom';

const HumanCard = props =>{

  return (
    <div className='humanCard'> 
    <div className="ui column">
      <div className="ui card">
        <div className="image">
          <img alt="oh no!" src={"https://i.imgur.com/1DLxwJZ.jpg"} />
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