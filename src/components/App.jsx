import { Component } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";



export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  } 

  handleClick = (e) => {
    const target = e.target.name;
    
    this.setState(prevState => {      
      return {
         [target]: prevState[target] + 1,
      }
    })
   } 
  countTotalFeedback() { 
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const percentPositive = Math.round(this.state.good / this.countTotalFeedback()*100) ;
    return percentPositive;
  }

  render() {
    const total = this.countTotalFeedback();    
    const positiveFeedback = this.countPositiveFeedbackPercentage();    
    return (
      <div      >
        <Section title="Please leave feedback">
           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={ this.handleClick}></FeedbackOptions> 
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good }
            neutral={this.state.neutral }
            bad={this.state.bad }
            total={total }
            positivePercentage={ positiveFeedback}>
          </Statistics>          
        </Section>
      </div>
    );
  }
}

/*
 handleGoodClick = () => { 
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }
    })
  }
  
  handleNeutralClick = () => { 
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  } 
  
  handleBadClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      }
    })
   } */