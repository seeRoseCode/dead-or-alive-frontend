import React from "react";
import { Route } from 'react-router-dom';
import { Button, Checkbox, Form, Radio, Grid, Segment } from 'semantic-ui-react'
import HumanCard from './HumanCard'
import ZombieCard from './ZombieCard'



class QuizSandbox extends React.Component{
  state={
    zombieScore: 0,
    submitted: false,
    questions: [],
    allAnswerData: [],
    allQuestionType: [],
    q1Answers: [],
    q1QuestionType: []
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

  componentDidMount(){
    fetch('http://localhost:3000/questions')
    .then(res =>res.json())
    .then(data => {
      let questions = data.map(value => value.value)
      this.setState({
        questions: questions
      })
    })
    fetch('http://localhost:3000/answers')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allAnswerData: data
      })
    })
  }

  render(){
    console.log(this.state)
    return(
      <div>
      <Form>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Form.Field id="sexy">{this.state.questions[0]}<b>{this.state.q1Answer}</b>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      <Form.Field>
        <Grid>
          <Grid.Row>
            <Grid.Column>
            {this.state.allAnswerData.slice(0,4).map(answer => <Radio
              label={answer.value}
              name='radioGroup1'
              type="radio"
              q1answer={answer.value}
              q1answertype={answer.question_type}
              checked={this.state.q1Answer === answer.value}
              onChange={this.handleq1Change}
            />)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Form.Field id="run">{this.state.questions[1]}<b>{this.state.q2Answer}</b>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      <Form.Field>
        <Grid>
          <Grid.Row>
            <Grid.Column>
      {this.state.allAnswerData.slice(4,8).map(answer => <Radio
        label={answer.value}
        name='radioGroup2'
        type="radio"
        q2answer={answer.value}
        q2answertype={answer.question_type}
        checked={this.state.q2Answer === answer.value}
        onChange={this.handleq2Change}
      />)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="hungry">{this.state.questions[2]}<b>{this.state.q3Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
       <Grid>
         <Grid.Row>
           <Grid.Column>
    {this.state.allAnswerData.slice(8,12).map(answer => <Radio
      label={answer.value}
      name='radioGroup3'
      type="radio"
      q3answer={answer.value}
      q3answertype={answer.question_type}
      checked={this.state.q3Answer === answer.value}
      onChange={this.handleq3Change}
    />)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="mom">{this.state.questions[3]}<b>{this.state.q4Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
      <Grid>
        <Grid.Row>
          <Grid.Column>
    {this.state.allAnswerData.slice(12,16).map(answer => <Radio
      label={answer.value}
      name='radioGroup4'
      type="radio"
      q4answer={answer.value}
      q4answertype={answer.question_type}
      checked={this.state.q4Answer === answer.value}
      onChange={this.handleq4Change}
    />)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="rested">{this.state.questions[4]}<b>{this.state.q5Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
      <Grid>
        <Grid.Row>
          <Grid.Column>
    {this.state.allAnswerData.slice(16,20).map(answer => <Radio
      label={answer.value}
      name='radioGroup5'
      type="radio"
      q5answer={answer.value}
      q5answertype={answer.question_type}
      checked={this.state.q5Answer === answer.value}
      onChange={this.handleq5Change}
    />)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="complexion">{this.state.questions[5]}<b>{this.state.q6Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
       <Grid>
         <Grid.Row>
           <Grid.Column>
    {this.state.allAnswerData.slice(20,24).map(answer => <Radio
      label={answer.value}
      name='radioGroup6'
      type="radio"
      q6answer={answer.value}
      q6answertype={answer.question_type}
      checked={this.state.q6Answer === answer.value}
      onChange={this.handleq6Change}
    />)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="walk">{this.state.questions[6]}<b>{this.state.q7Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
      <Grid>
        <Grid.Row>
          <Grid.Column>
    {this.state.allAnswerData.slice(24,28).map(answer => <Radio
      label={answer.value}
      name='radioGroup7'
      type="radio"
      q7answer={answer.value}
      q7answertype={answer.question_type}
      checked={this.state.q7Answer === answer.value}
      onChange={this.handleq7Change}
    />)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="communication">{this.state.questions[7]}<b>{this.state.q8Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
      <Grid>
        <Grid.Row>
          <Grid.Column>
    {this.state.allAnswerData.slice(28,32).map(answer => <Radio
      label={answer.value}
      name='radioGroup8'
      type="radio"
      q8answer={answer.value}
      q8answertype={answer.question_type}
      checked={this.state.q8Answer === answer.value}
      onChange={this.handleq8Change}
    />)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
  </Form.Field>
      <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
  </Form>
     {this.state.submitted && this.state.zombie? <ZombieCard /> : null}
     {this.state.submitted && !this.state.zombie? <HumanCard /> : null}
  </div>
    )
  }
}

export default QuizSandbox
// <Radio
//   label=' their brain '
//   name='radioGroup1'
//   type="radio"
//   q1answer='their brain'
//   checked={this.state.q1Answer === 'their brain'}
//   onChange={this.handleq1Change}
// // />
// q2Answers: allAnswers.slice(4,8),
// q3Answers: allAnswers.slice(8,12),
// q4Answers: allAnswers.slice(12,16),
// q5Answers: allAnswers.slice(16,20),
// q6Answers: allAnswers.slice(20,24),
// q7Answers: allAnswers.slice(24,28),
// q5Answers: allAnswers.slice(28,32),
// })

// let allAnswerData = data.map(value => value.value)
// let allQuestionType = data.map(question_type => question_type.question_type)
// this.setState({
//   allAnswers: allAnswers,
//   allQuestionType: allQuestionType
// })
// let q1Answers = allAnswers.slice(0,4)
// let q1QuestionType = allQuestionType.slice(0,4)
//   this.setState({
//     q1Answers: q1Answers,
//     q1QuestionType: q1QuestionType})


// <Radio
//   label=' their face '
//   name='radioGroup1'
//   type="radio"
//   q1answer='their face'
//   checked={this.state.q1Answer === 'their face'}
//   onChange={this.handleq1Change}
// />
//
// <Radio
//   label=' their personality '
//   name='radioGroup1'
//   q1answer='their personality'
//   checked={this.state.q1Answer === 'their personality'}
//   onChange={this.handleq1Change}
// />
//
// <Radio
//   label=' their body '
//   name='radioGroup1'
//   q1answer='their body'
//   checked={this.state.q1Answer === 'their body'}
//   onChange={this.handleq1Change}
// />

// <Grid>
//   <Grid.Row>
//     <Grid.Column>
// <Radio
// label=" I'm training for one right now! "
// name='radioGroup2'
// q2answer="I'm training for one right now!"
// checked={this.state.q2Answer === "I'm training for one right now!"}
// onChange={this.handleq2Change}
// />
// <Radio
//   label=" I would love to but I don't have the time! "
//   name='radioGroup2'
//   q2answer="I would love to but I don't have the time!"
//   checked={this.state.q2Answer === "I would love to but I don't have the time!"}
//   onChange={this.handleq2Change}
// />
//    </Grid.Column>
//   </Grid.Row>
// </Grid>
// <Radio
// label=" I hate running! "
// name='radioGroup2'
// q2answer="I hate running!"
// checked={this.state.q2Answer === "I hate running!"}
// onChange={this.handleq2Change}
// />
//    </Grid.Column>
//   </Grid.Row>
// </Grid>

// <Grid>
//   <Grid.Row>
//     <Grid.Column>
// <Radio
// label="Honestly, I've been craving junk food lately "
// name='radioGroup3'
// q3answer="Honestly, I've been craving junk food lately"
// checked={this.state.q3Answer === "Honestly, I've been craving junk food lately"}
// onChange={this.handleq3Change}
// />
//    </Grid.Column>
//  </Grid.Row>
// </Grid>
// <Radio
// label=" I've been vegan for a month now. I really want a f***ing hamburger. "
// name='radioGroup3'
// q3answer="I've been vegan for a month now. I really want a f***ing hamburger."
// checked={this.state.q3Answer === "I've been vegan for a month now. I really want a f***ing hamburger."}
// onChange={this.handleq3Change}
// />
//    </Grid.Column>
//   </Grid.Row>
// </Grid>
// <Radio
// label=" Ice Cream and french fries! "
// name='radioGroup3'
// q3answer="Ice Cream and french fries!"
// checked={this.state.q3Answer === "Ice Cream and french fries!"}
// onChange={this.handleq3Change}
// />

//
//   <Grid>
//     <Grid.Row>
//       <Grid.Column>
// <Radio
//   label=" She ruined my childhood. I don't talk to her anymore "
//   name='radioGroup4'
//   q4answer="She ruined my childhood. I don't talk to her anymore"
//   checked={this.state.q4Answer === "She ruined my childhood. I don't talk to her anymore"}
//   onChange={this.handleq4Change}
// />
//      </Grid.Column>
//    </Grid.Row>
//  </Grid>
// <Radio
//   label=" My mom is my best friend! "
//   name='radioGroup4'
//   q4answer="My mom is my best friend!"
//   checked={this.state.q4Answer === "My mom is my best friend!"}
//   onChange={this.handleq4Change}
//   />
//      </Grid.Column>
//    </Grid.Row>
//   </Grid>
// <Radio
//   label=" I hate her. We're just so different now. She just sits and waits for any chance to tear me apart "
//   name='radioGroup4'
//   q4answer="I hate her. We're just so different now. She just sits and waits for any chance to tear me apart"
//   checked={this.state.q4Answer === "I hate her. We're just so different now. She just sits and waits for any chance to tear me apart"}
//   onChange={this.handleq4Change}
// />
// <Grid>
//   <Grid.Row>
//     <Grid.Column>
// <Radio
// label="I don’t need much sleep "
// name='radioGroup5'
// q5answer="I don’t need much sleep"
// checked={this.state.q5Answer === "I don’t need much sleep"}
// onChange={this.handleq5Change}
// />
//    </Grid.Column>
//  </Grid.Row>
// </Grid>
// <Radio
// label=" I’m dead on my feet "
// name='radioGroup5'
// q5answer="I’m dead on my feet"
// checked={this.state.q5Answer === "I’m dead on my feet"}
// onChange={this.handleq5Change}
// />
//    </Grid.Column>
//  </Grid.Row>
// </Grid>
// <Radio
// label=" Who needs rest when you've got coldbrew? "
// name='radioGroup5'
// q5answer="Who needs rest when you've got coldbrew?"
// checked={this.state.q5Answer === "Who needs rest when you've got coldbrew?"}
// onChange={this.handleq5Change}
// />

//
//   <Grid>
//     <Grid.Row>
//       <Grid.Column>
// <Radio
//   label=" Pale "
//   name='radioGroup6'
//   q6answer="Pale"
//   checked={this.state.q6Answer === "Pale"}
//   onChange={this.handleq6Change}
// />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// <Radio
//   label=" Lifeless "
//   name='radioGroup6'
//   q6answer="Lifeless"
//   checked={this.state.q6Answer === "Lifeless"}
//   onChange={this.handleq6Change}
// />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// <Radio
//   label=" Healthy "
//   name='radioGroup6'
//   q6answer="Healthy"
//   checked={this.state.q6Answer === "Healthy"}
//   onChange={this.handleq6Change}
// />

// <Grid>
//   <Grid.Row>
//     <Grid.Column>
// <Radio
// label=" Brisk "
// name='radioGroup7'
// q7answer="Brisk"
// checked={this.state.q7Answer === "Brisk"}
// onChange={this.handleq7Change}
// />
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
// <Radio
// label=" Staggering"
// name='radioGroup7'
// q7answer="Staggering"
// checked={this.state.q7Answer === "Staggering"}
// onChange={this.handleq7Change}
// />
//   </Grid.Column>
// </Grid.Row>
// </Grid>
// <Radio
// label=" I haven’t gotten out of bed "
// name='radioGroup7'
// q7answer="I haven’t gotten out of bed"
// checked={this.state.q7Answer === "I haven’t gotten out of bed"}
// onChange={this.handleq7Change}
// />
// <Grid>
//   <Grid.Row>
//     <Grid.Column>
// <Radio
// label=" I speak my mind "
// name='radioGroup8'
// q8answer="I speak my mind"
// checked={this.state.q8Answer === "I speak my mind"}
// onChange={this.handleq8Change}
// />
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
// <Radio
// label=" I have trouble expressing myself verbally "
// name='radioGroup8'
// q8answer="I have trouble expressing myself verbally"
// checked={this.state.q8Answer === "I have trouble expressing myself verbally"}
// onChange={this.handleq8Change}
// />
//   </Grid.Column>
// </Grid.Row>
// </Grid>
// <Radio
// label=" Communication is key "
// name='radioGroup8'
// q8answer="Communication is key"
// checked={this.state.q8Answer === "Communication is key"}
// onChange={this.handleq8Change}
// />
