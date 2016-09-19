'use strict';

import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "../main.css"; // webpack (with style-loader & css-loader) allow you to directly require css

const Main = React.createClass({
  render() {
    return (
      <div className="main-container">
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Main;
