import React from "react";
import ReactDOM from "react-dom";
const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.pickOption}
    >
      What should I do?
    </button>
  </div>
);

export default Action;