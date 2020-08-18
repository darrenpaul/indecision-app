import React from "react";
import ReactDOM from "react-dom";
import Option from "./Option";
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={props.deleteOptions}>
        Remove All
      </button>
    </div>
    {props.options.length == 0 ? (
      <p className="widget__message">Please add some options</p>
    ) : undefined}
    {props.options.map((option, index) => (
      <Option
        key={option}
        option={option}
        count={index + 1}
        deleteOption={props.deleteOption}
      />
    ))}
  </div>
);
export default Options;
