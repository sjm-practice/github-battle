'use strict';

import React from "react";
import Results from "../components/Results";
import { battle } from "../utils/githubHelpers";

const ResultsContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      scores: []
    };
  },

  async componentDidMount() {
    try {
      const scores = await battle(this.props.location.state.playersInfo);
      this.setState({
        scores: scores,
        isLoading: false
      });
    } catch (err) {
      console.warn("Error in ResultsContainer:", err);
    }
  },

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    );
  }
});

export default ResultsContainer;
