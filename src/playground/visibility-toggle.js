// console.log("visibility toggle working");
// let visibilityState = false;
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Toggle Visibility</h1>
//       <button onClick={showHidden}>
//         {visibilityState ? "hide text" : "show hidden"}
//       </button>
//       {visibilityState ? <p>This is hidden text</p> : false}
//     </div>
//   );
//   const appRoot = document.getElementById("app");
//   ReactDOM.render(template, appRoot);
// };

// const showHidden = () => {
//   visibilityState = !visibilityState;
//   renderApp();
// };

// renderApp();
class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      display: true,
    };
  }
  toggleDisplay() {
    this.updateState(!this.state.display);
  }
  updateState(displayState) {
    this.setState((state) => {
      return { display: displayState };
    });
  }
  render() {
    return (
      <div>
        <h1>Toggle Display</h1>
        <button onClick={this.toggleDisplay}>
          {this.state.display ? "showing text" : "hidding text"}
        </button>
        {this.state.display ? <p>showing some text</p> : undefined}
      </div>
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));
