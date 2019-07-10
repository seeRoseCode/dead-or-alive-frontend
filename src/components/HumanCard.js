import React from "react";

import { Input, Menu, Card, Icon, Image } from 'semantic-ui-react'

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
            Name: {props.user.username}<br/><br/>
            </div>
            <Menu.Item
              name='Quiz'
              onClick={props.handleClick}
            />
            <div className="meta text-wrap">
              <small>STATUS: {"I'm alive"}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

     {/* <Card>
    <h1></h1>
    <Image src={props.user.img_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.user.username}</Card.Header>
      <Card.Description>
        Location: {props.user.location_id}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {"I'm alive"}
      </a>
    </Card.Content>
  </Card>
  ) */}
}

export default HumanCard;