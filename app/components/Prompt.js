'use strict';

import React, { PropTypes } from "react";
import { transparentBg } from "../styles";

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={props.onUpdateUser}
              value={props.username}
              placeholder="Github Username"
            />
          </div>
          <div className="from-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success" type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export default Prompt;
