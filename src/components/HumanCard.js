import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import zombieImage from '../images/zombie-girl.png'


// import { Route } from 'react-router-dom';




class HumanCard extends React.Component {
  //
  imgUrl = () => {
    if(this.props.user.zombie === false && this.props.user.img_url === null) {return 'https://image.flaticon.com/icons/svg/145/145859.svg'}
    else {return this.props.user.img_url}
  }

render(){
  return (
    <div className='humanCard' style={{ float: 'center'}}>

      <div className="ui column">
        <div className="ui card">
          <div className="image">
            <img src={this.imgUrl()} alt="profile"/>
          </div>
          <div className="content">
            <div className="header">
            Name: {this.props.user.username}<br/><br/>
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
}

export default HumanCard;
