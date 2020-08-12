"use strict";

console.log("visibility toggle working");
var visibilityState = false;
var renderApp = function renderApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Toggle Visibility"
    ),
    React.createElement(
      "button",
      { onClick: showHidden },
      visibilityState ? "hide text" : "show hidden"
    ),
    visibilityState ? React.createElement(
      "p",
      null,
      "This is hidden text"
    ) : false
  );
  var appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

var showHidden = function showHidden() {
  visibilityState = !visibilityState;
  renderApp();
};

renderApp();
