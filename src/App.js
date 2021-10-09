import { Component } from 'react'
import './App.css'
import { Section } from './Components/Section/Section'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleLeaveFeedback = (feedback) => {
    const feedbackName = feedback.target.name
    this.setState((state) => {
      const value =
        feedbackName === 'good'
          ? state.good
          : feedbackName === 'neutral'
          ? state.neutral
          : state.bad
      return { [feedbackName]: value + 1 }
    })
  }

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() !== 0
      ? ((this.state.good * 100) / this.countTotalFeedback()).toFixed(0)
      : ''

  render() {
    const feedback = this.state
    const options = {
      good: feedback.good,
      neutral: feedback.neutral,
      bad: feedback.bad,
      total: this.countTotalFeedback(),
      positiveFeedback: this.countPositiveFeedbackPercentage(),
      handleLeaveFeedback: this.handleLeaveFeedback,
    }

    return (
      <div className="App">
        <h1>React-hw-02-Feedback</h1>
        <Section title="Please leave feedback" options={options} />
      </div>
    )
  }
}

export default App
