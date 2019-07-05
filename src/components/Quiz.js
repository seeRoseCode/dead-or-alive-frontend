import React from "react";
import { Route } from 'react-router-dom';
import { Button, Checkbox, Form, Radio } from 'semantic-ui-react'


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
       <Form.Field>
         What makes a person sexy? <b>{this.state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label='their brain'
           name='radioGroup'
           value='their-brain'
           checked={this.state.value === 'brain'}
           onChange={this.handleChange}
         />
         <Radio
           label='their face'
           name='radioGroup'
           value='their face'
           checked={this.state.value === 'face'}
           onChange={this.handleChange}
         />
         <Radio
           label='their personality'
           name='radioGroup'
           value='their personality'

           checked={this.state.value === 'personality'}
           onChange={this.handleChange}
         />
         <Radio
           label='their body'
           name='radioGroup'
           value='their body'

           checked={this.state.value === 'body'}
           onChange={this.handleChange}
         />
       </Form.Field>

       <Form.Field>
         Would you run a 5k marathon? <b>{this.state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label="Who me?! I'm way too slow!"
           name='radioGroup'
           value="Who me?! I'm way too slow!"

           checked={this.state.value === 'slow'}
           onChange={this.handleChange}
         />
         <Radio
           label="I'm training for one right now!"
           name='radioGroup'
           value="I'm training for one right now!"

           checked={this.state.value === 'training'}
           onChange={this.handleChange}
         />
         <Radio
           label="I would love to but I don't have the time!"
           name='radioGroup'
           value="I would love to but I don't have the time!"

           checked={this.state.value === 'time'}
           onChange={this.handleChange}
         />
         <Radio
           label="I hate running!"
           name='radioGroup'
           value="I hate running!"
           checked={this.state.value === 'hate'}

           onChange={this.handleChange}
         />
       </Form.Field>

       <Form.Field>
         Are you hungry? If so, for what? <b>{this.state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label="Lately, I just want meat. like any kind of flesh at all will work!"
           name='radioGroup'
           value="Lately, I just want meat. like any kind of flesh at all will work!"

           checked={this.state.value === 'meat'}
           onChange={this.handleChange}
         />
         <Radio
           label="Honestly, I've been craving junk food lately"
           name='radioGroup'
           value="Honestly, I've been craving junk food lately"

           checked={this.state.value === 'junk'}
           onChange={this.handleChange}
         />
         <Radio
           label="I've been vegan for a month now. I really want a f***ing hamburger."
           name='radioGroup'
           value="I've been vegan for a month now. I really want a f***ing hamburger."

           checked={this.state.value === 'vegan'}
           onChange={this.handleChange}
         />
         <Radio
           label="Ice Cream and french fries!"
           name='radioGroup'
           value="Ice Cream and french fries!"
           checked={this.state.value === 'icecream'}

           onChange={this.handleChange}
         />
       </Form.Field>

       <Form.Field>
         How is your relationship with your mom?<b>{this.state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label="I hate her. We're just so different now. I've been waiting for my chance to tear her apart."
           name='radioGroup'
           value="I hate her. We're just so different now. I've been waiting for my chance to tear her apart."

           checked={this.state.value === 'hate'}
           onChange={this.handleChange}
         />
         <Radio
           label="She ruined my childhood. I don't talk to her anymore"
           name='radioGroup'
           value="She ruined my childhood. I don't talk to her anymore"

           checked={this.state.value === 'childhood'}
           onChange={this.handleChange}
         />
         <Radio
           label="My mom is my best friend!"
           name='radioGroup'
           value="My mom is my best friend!"

           checked={this.state.value === 'bff'}
           onChange={this.handleChange}
         />
         <Radio
           label="I hate her. We're just so different now. She just sits and waits for any chance to tear me apart"
           name='radioGroup'
           value="I hate her. We're just so different now. She just sits and waits for any chance to tear me apart"
           checked={this.state.value === 'shehates'}

           onChange={this.handleChange}
         />
       </Form.Field>

       <Form.Field>
         Are you well-rested?<b>{this.state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label= "I’m well rested"
           name='radioGroup'
           value=" I’m well rested"

           checked={this.state.value === 'rested'}
           onChange={this.handleChange}
         />
         <Radio
           label="I don’t need much sleep"
           name='radioGroup'
           value="I don’t need much sleep"

           checked={this.state.value === 'sleep'}
           onChange={this.handleChange}
         />
         <Radio
           label="I’m dead on my feet"
           name='radioGroup'
           value="I’m dead on my feet"

           checked={this.state.value === 'dead'}
           onChange={this.handleChange}
         />
         <Radio
           label="Who needs rest when you've got coldbrew?"
           name='radioGroup'
           value="Who needs rest when you've got coldbrew?"
           checked={this.state.value === 'coldbrew'}

           onChange={this.handleChange}
         />
       </Form.Field>

       <Form.Field>
         What best describes your complexion?<b>{this.state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label= "Vibrant"
           name='radioGroup'
           value="Vibrant"

           checked={this.state.value === 'vibrant'}
           onChange={this.handleChange}
         />
         <Radio
           label="Pale"
           name='radioGroup'
           value="Pale"

           checked={this.state.value === 'pale'}
           onChange={this.handleChange}
         />
         <Radio
           label="Lifeless"
           name='radioGroup'
           value="Lifeless"

           checked={this.state.value === 'lifeless'}
           onChange={this.handleChange}
         />
         <Radio
           label="Healthy"
           name='radioGroup'
           value="Healthy"
           checked={this.state.value === 'healthy'}

           onChange={this.handleChange}
         />
       </Form.Field>

       <Form.Field>
         What best describes your walk?<b>{this.state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label= "Graceful"
           name='radioGroup'
           value="Graceful"

           checked={this.state.value === 'graceful'}
           onChange={this.handleChange}
         />
         <Radio
           label="Brisk"
           name='radioGroup'
           value="Brisk"

           checked={this.state.value === 'brisk'}
           onChange={this.handleChange}
         />
         <Radio
           label="Staggering"
           name='radioGroup'
           value="Staggering"

           checked={this.state.value === 'staggering'}
           onChange={this.handleChange}
         />
         <Radio
           label="I haven’t gotten out of bed"
           name='radioGroup'
           value="I haven’t gotten out of bed"
           checked={this.state.value === 'bed'}

           onChange={this.handleChange}
         />
       </Form.Field>

       <Form.Field>
         What best describes your communication skills?<b>{this.state.value}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label= "I”m not much of a talker"
           name='radioGroup'
           value="I”m not much of a talker"

           checked={this.state.value === 'notalk'}
           onChange={this.handleChange}
         />
         <Radio
           label="I speak my mind"
           name='radioGroup'
           value="I speak my mind"

           checked={this.state.value === 'mind'}
           onChange={this.handleChange}
         />
         <Radio
           label="I have trouble expressing myself verbally"
           name='radioGroup'
           value="I have trouble expressing myself verbally"

           checked={this.state.value === 'trouble'}
           onChange={this.handleChange}
         />
         <Radio
           label="Communication is key"
           name='radioGroup'
           value="Communication is key"
           checked={this.state.value === 'communication'}

           onChange={this.handleChange}
         />
       </Form.Field>

     </Form>

      </div>

    )
  }
}

export default Quiz
