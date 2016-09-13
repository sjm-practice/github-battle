'use strict';

var React = require('react');
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");
require("../main.css"); // webpack (with style-loader & css-loader) allow you to directly require css

var Main = React.createClass({
  render: function () {
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

module.exports = Main;
