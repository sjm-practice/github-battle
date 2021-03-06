'use strict';

import React from "react";

import { Link } from "react-router";

import MainContainer from "../containers/MainContainer";

var Home = React.createClass({
  render: function () {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Code Fight Royale</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </MainContainer>
    );
  }
});

export default Home;
