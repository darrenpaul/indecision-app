import React from "react";
import ReactDOM from "react-dom";
import "./utils";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css";
import "./styles/styles.scss";
ReactDOM.render(
  <IndecisionApp options={["one", "two"]} />,
  document.getElementById("app")
);
