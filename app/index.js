var React = require("react");
var ReactDOM = require("react-dom");
var routes = require("./config/routes");
var Raven = require("raven-js");

var sentryKey = "eea94840f0ae401b80a6baa48ca6a418";
var sentryApp = "97496";
var sentryURL = "https://" + sentryKey + "@sentry.io/" + sentryApp;

Raven.config(sentryURL).install();

ReactDOM.render(
  routes,
  document.getElementById("app")
);
