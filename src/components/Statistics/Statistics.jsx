import React, { Component } from 'react';
import { StatisticsBox } from './Statistics.styled';

// const total = this.countTotalFeedback;

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodBtn = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralBtn = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBadBtn = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? (this.state.good * 100) / this.countTotalFeedback()
      : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h2>Please leave your feedback</h2>
        <div>
          <button type="button" onClick={this.handleGoodBtn}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralBtn}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadBtn}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>

        <StatisticsBox>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: {total}</span>
          <span>Positive feedback: {positivePercentage}%</span>
        </StatisticsBox>
      </>
    );
  }
}

export default Statistics;
