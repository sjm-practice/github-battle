'use strict';

var React = require('react');
require("../main.css"); // webpack (with style-loader & css-loader) allow you to directly require css

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
