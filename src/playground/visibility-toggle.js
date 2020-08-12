console.log("visibility toggle working");
let visibilityState = false;
const renderApp = () => {
  const template = (
    <div>
      <h1>Toggle Visibility</h1>
      <button onClick={showHidden}>
        {visibilityState ? "hide text" : "show hidden"}
      </button>
      {visibilityState ? <p>This is hidden text</p> : false}
    </div>
  );
  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

const showHidden = () => {
  visibilityState = !visibilityState;
  renderApp();
};

renderApp();
