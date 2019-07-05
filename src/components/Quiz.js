import React from "react";
import { Route } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class Quiz extends React.Component{
  constructor(){
    super()
    this.state={
      appetite: false,
      skinOff: false,
      craveMeat: false,
      motorSkills: false
    }
  }


  render(){
    return(
      <div>
      <Form>
      Please Answer all of the Following Questions to the Best of Your Ability
      <Form.Group grouped >
        <label>Are you experiencing a larger appetite than usual?</label>
        <Form.Field label='Yes' control='input' type='checkbox' checked={this.state.appetite}/>
        <Form.Field label='No' control='input' type='checkbox' checked={this.state.appetite}/>
      </Form.Group>
      <Form.Group grouped>
        <label>Is your skin falling off?</label>
        <Form.Field label='Yes' control='input' type='checkbox' />
        <Form.Field label='No' control='input' type='checkbox' />
      </Form.Group>
      <Form.Group grouped>
        <label>Are you craving red meat?</label>
        <Form.Field label='Yes' control='input' type='checkbox'/>
        <Form.Field label='No' control='input' type='checkbox' />
      </Form.Group>
      <Form.Group grouped>
        <label>Have you noticed a decline in your fine motor skills?</label>
        <Form.Field label='Yes' control='input' type='checkbox' />
        <Form.Field label='No' control='input' type='checkbox' />
      </Form.Group>
      <Form.Field onClick={(e) => this.props.handleSubmit(e)} control={Button}>Submit</Form.Field>
    </Form>

      </div>

    )
  }
}

export default Quiz
