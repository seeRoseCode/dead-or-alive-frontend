import React from "react";
// import { Route } from 'react-router-dom';
import { Button, Checkbox, Form, Radio } from 'semantic-ui-react'
import HumanCard from './HumanCard'
import ZombieCard from './ZombieCard'



class Quiz extends React.Component{
state={
  zombieScore: 0,
  submitted: false
}

handleq1Change = (e, {q1Answer}) => {
this.setState({ q1Answer: e.target.innerText })
}

handleq2Change = (e, {q2Answer}) => {
  if(this.state.q1Answer === 'their brain'){
    this.setState({zombieScore: this.state.zombieScore + 1})
  }
this.setState({ q2Answer: e.target.innerText })
}

handleq3Change = (e, {q3Answer}) => {
  if(this.state.q2Answer === "Who me?! I'm way too slow!"){
    this.setState({zombieScore: this.state.zombieScore + 1})
  }
this.setState({ q3Answer: e.target.innerText })
}

handleq4Change = (e, {q4Answer}) => {
  if(this.state.q3Answer === "Lately, I just want meat. Like, any kind of flesh at all will work!"){
    this.setState({zombieScore: this.state.zombieScore + 1})
  }
this.setState({ q4Answer: e.target.innerText })
}

handleq5Change = (e, {q5Answer}) => {
  if(this.state.q4Answer === "I hate her. We're just so different now. I've been waiting for my chance to tear her apart."){
    this.setState({zombieScore: this.state.zombieScore + 1})
  }
this.setState({ q5Answer: e.target.innerText })
}

handleq6Change = (e, {q6Answer}) => {
  if(this.state.q5Answer === "I’m dead on my feet"){
    this.setState({zombieScore: this.state.zombieScore + 1})
  }
this.setState({ q6Answer: e.target.innerText })
}

handleq7Change = (e, {q7Answer}) => {
  if(this.state.q6Answer === "Lifeless"){
    this.setState({zombieScore: this.state.zombieScore + 1})
  }
this.setState({ q7Answer: e.target.innerText })
}

handleq8Change = (e, {q8Answer}) => {
  if(this.state.q7Answer === "Staggering"){
    this.setState({zombieScore: this.state.zombieScore + 1})
  }
this.setState({ q8Answer: e.target.innerText })
}

handleSubmit = (e) => {
  if (this.state.zombieScore > 4){
    this.setState({zombie: true})
  }
  else {
    this.setState({zombie: false})
  }
this.setState({submitted: true})

}
  render(){
    console.log(this.state)
    return(
      <div>
      <Form>
       <Form.Field id="sexy">
         What makes a person sexy? <b>{this.state.q1Answer}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label='their brain'
           name='radioGroup'

           q1Answer='their brain'
           checked={this.state.q1Answer === 'their brain'}
           onChange={this.handleq1Change}
         />
         <Radio
           label='their face'
           name='radioGroup'

           q1Answer='their face'
           checked={this.state.q1Answer === 'their face'}
           onChange={this.handleq1Change}
         />
         <Radio
           label='their personality'
           name='radioGroup'

           q1Answer='their personality'
           checked={this.state.q1Answer === 'their personality'}
           onChange={this.handleq1Change}
         />
         <Radio
           label='their body'
           name='radioGroup'

           q1Answer='their body'
           checked={this.state.q1Answer === 'their body'}
           onChange={this.handleq1Change}
         />
       </Form.Field>

       <Form.Field id="run">
         Would you run a 5k? <b>{this.state.q2Answer}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label="Who me?! I'm way too slow!"
           name='radioGroup'

           q2Answer="Who me?! I'm way too slow!"
           checked={this.state.q2Answer === "Who me?! I'm way too slow!"}
           onChange={this.handleq2Change}
         />
         <Radio
           label="I'm training for one right now!"
           name='radioGroup'

           q2Answer="I'm training for one right now!"
           checked={this.state.q2Answer === "I'm training for one right now!"}
           onChange={this.handleq2Change}
         />
         <Radio
           label="I would love to but I don't have the time!"
           name='radioGroup'

           q2Answer="I would love to but I don't have the time!"
           checked={this.state.q1Answer || this.state.q2Answer === "I would love to but I don't have the time!"}
           onChange={this.handleq2Change}
         />
         <Radio
           label="I hate running!"
           name='radioGroup'

           q2Answer="I hate running!"
           checked={this.state.q2Answer === "I hate running!"}
           onChange={this.handleq2Change}
         />
       </Form.Field>

       <Form.Field id="hungry">
         Are you hungry? If so, for what? <b>{this.state.q3Answer}</b>

       </Form.Field>
       <Form.Field>
         <Radio
           label="Lately, I just want meat. like any kind of flesh at all will work!"
           name='radioGroup'

           q3Answer="Lately, I just want meat. Like, any kind of flesh at all will work!"
           checked={this.state.q3Answer === "Lately, I just want meat. Like, any kind of flesh at all will work!"}
           onChange={this.handleq3Change}
         />
      
         <Radio
           label="Honestly, I've been craving junk food lately"
           name='radioGroup'

           q3Answer="Honestly, I've been craving junk food lately"
           checked={this.state.q3Answer === "Honestly, I've been craving junk food lately"}
           onChange={this.handleq3Change}
         />
         <Radio
           label="I've been vegan for a month now. I really want a f***ing hamburger."
           name='radioGroup'

           q3Answer="I've been vegan for a month now. I really want a f***ing hamburger."
           checked={this.state.q3Answer === "I've been vegan for a month now. I really want a f***ing hamburger."}
           onChange={this.handleq3Change}
         />
      
         <Radio
           label="Ice Cream and french fries!"
           name='radioGroup'

           q3Answer="Ice Cream and french fries!"
           checked={this.state.q3Answer === "Ice Cream and french fries!"}
           onChange={this.handleq3Change}
         />
       </Form.Field>

       <Form.Field id="mom">
         How is your relationship with your mom?<b>{this.state.q4Answer}</b>

       </Form.Field>
       <Form.Field>
         <Radio
           label="I hate her. We're just so different now. I've been waiting for my chance to tear her apart."
           name='radioGroup'

           q4Answer="I hate her. We're just so different now. I've been waiting for my chance to tear her apart."
           checked={this.state.q4Answer === "I hate her. We're just so different now. I've been waiting for my chance to tear her apart."}
           onChange={this.handleq4Change}
         />
         <Radio
           label="She ruined my childhood. I don't talk to her anymore"
           name='radioGroup'

           q4Answer="She ruined my childhood. I don't talk to her anymore"
           checked={this.state.q4Answer === "She ruined my childhood. I don't talk to her anymore"}
           onChange={this.handleq4Change}
         />
         <Radio
           label="My mom is my best friend!"
           name='radioGroup'

           q4Answer="My mom is my best friend!"
           checked={this.state.q4Answer === "My mom is my best friend!"}
           onChange={this.handleq4Change}

         />
         <Radio
           label="I hate her. We're just so different now. She just sits and waits for any chance to tear me apart"
           name='radioGroup'

           q4Answer="I hate her. We're just so different now. She just sits and waits for any chance to tear me apart"
           checked={this.state.q4Answer === "I hate her. We're just so different now. She just sits and waits for any chance to tear me apart"}
           onChange={this.handleq4Change}
         />
       </Form.Field>

       <Form.Field id="rested">
         Are you well-rested?<b>{this.state.q5Answer}</b>

       </Form.Field>
       <Form.Field>
         <Radio
           label= "I’m well rested"
           name='radioGroup'

           q5Answer="I’m well rested"
           checked={this.state.q5Answer === "I’m well rested"}
           onChange={this.handleq5Change}

         />
         <Radio
           label="I don’t need much sleep"
           name='radioGroup'

           q5Answer="I don’t need much sleep"
           checked={this.state.q5Answer === "I don’t need much sleep"}
           onChange={this.handleq5Change}

         />
         <Radio
           label="I’m dead on my feet"
           name='radioGroup'

           q5Answer="I’m dead on my feet"
           checked={this.state.q5Answer === "I’m dead on my feet"}
           onChange={this.handleq5Change}

         />
         <Radio
           label="Who needs rest when you've got coldbrew?"
           name='radioGroup'

           q5Answer="Who needs rest when you've got coldbrew?"
           checked={this.state.q5Answer === "Who needs rest when you've got coldbrew?"}
           onChange={this.handleq5Change}
         />
       </Form.Field>

       <Form.Field id="complexion">
         What best describes your complexion?<b>{this.state.q6Answer}</b>

       </Form.Field>
       <Form.Field>
         <Radio
           label= "Vibrant"
           name='radioGroup'

           q6Answer="Vibrant"
           checked={this.state.q6Answer === "Vibrant"}
           onChange={this.handleq6Change}

         />
         <Radio
           label="Pale"
           name='radioGroup'

           q6Answer="Pale"
           checked={this.state.q6Answer === "Pale"}
           onChange={this.handleq6Change}

         />
         <Radio
           label="Lifeless"
           name='radioGroup'

           q6Answer="Lifeless"
           checked={this.state.q6Answer === "Lifeless"}
           onChange={this.handleq6Change}

         />
         <Radio
           label="Healthy"
           name='radioGroup'

           q6Answer="Healthy"
           checked={this.state.q6Answer === "Healthy"}
           onChange={this.handleq6Change}
         />
       </Form.Field>

       <Form.Field id="walk">
         What best describes your walk?<b>{this.state.q7Answer}</b>

       </Form.Field>
       <Form.Field>
         <Radio
           label= "Graceful"
           name='radioGroup'

           q7Answer="Graceful"
           checked={this.state.q7Answer === "Graceful"}
           onChange={this.handleq7Change}

         />
         <Radio
           label="Brisk"
           name='radioGroup'

           q7Answer="Brisk"
           checked={this.state.q7Answer === "Brisk"}
           onChange={this.handleq7Change}
         />
         <Radio
           label="Staggering"
           name='radioGroup'

           q7Answer="Staggering"
           checked={this.state.q7Answer === "Staggering"}
           onChange={this.handleq7Change}
         />
         <Radio
           label="I haven’t gotten out of bed"
           name='radioGroup'

           q7Answer="I haven’t gotten out of bed"
           checked={this.state.q7Answer === "I haven’t gotten out of bed"}
           onChange={this.handleq7Change}
         />
       </Form.Field>

       <Form.Field id="communication">
         What best describes your communication skills?<b>{this.state.q8Answer}</b>
       </Form.Field>
       <Form.Field>
         <Radio
           label= "I”m not much of a talker"
           name='radioGroup'
           q8Answer="I”m not much of a talker"
           checked={this.state.q8Answer === "I”m not much of a talker"}
           onChange={this.handleq8Change}
         />
         <Radio
           label="I speak my mind"
           name='radioGroup'
           q8Answer="I speak my mind"
           checked={this.state.q8Answer === "I speak my mind"}
           onChange={this.handleq8Change}
         />
         <Radio
           label="I have trouble expressing myself verbally"
           name='radioGroup'
           q8Answer="I have trouble expressing myself verbally"
           checked={this.state.q8Answer === "I have trouble expressing myself verbally"}
           onChange={this.handleq8Change}
         />
         <Radio
           label="Communication is key"
           name='radioGroup'
           q8Answer="Communication is key"
           checked={this.state.q8Answer === "Communication is key"}
           onChange={this.handleq8Change}
         />
       </Form.Field>
        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
     </Form>
     {this.state.submitted && this.state.zombie? <ZombieCard /> : null}
     {this.state.submitted && !this.state.zombie? <HumanCard /> : null}
      </div>

    )
  }
}

export default Quiz
