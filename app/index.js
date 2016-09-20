import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";
import Raven from "raven-js";

const sentryKey = "eea94840f0ae401b80a6baa48ca6a418";
const sentryApp = "97496";
const sentryURL = `https://${sentryKey}@sentry.io/${sentryApp}`;

Raven.config(sentryURL).install();

ReactDOM.render(
  routes,
  document.getElementById("app")
);
