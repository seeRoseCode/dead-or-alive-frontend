import React from "react";
// import { Route } from 'react-router-dom';

const ZombieCard = props =>{

  return (
    <div className='ZombieCard'> 
    <div className="ui column">
      <div className="ui card">
        <div className="image">
        <img src={props.user.img_url} alt="profile"  />
        </div>
        <div className="content">
          <div className="header">
            {"Zombie"}
          </div>

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