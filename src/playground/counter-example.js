// console.log("App.js is working");
// const app = {
//   title: "title",
//   subtitle: "subtitle",
//   options: ["One", "Two"],
// };
// function getOptions(options) {
//   if (options && options.length > 0) {
//     return (
//       <div>
//         <p>Here are your options</p>
//         <ol>
//           <li>Item one</li>
//           <li>Item two</li>
//         </ol>
//       </div>
//     );
//   }
//   return <p>No Options</p>;
// }
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle ? <p>{app.subtitle}</p> : undefined}
//     <p>This is some info</p>
//     {getOptions(app.options)}
//   </div>
// );
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={minusOne} className="button">
//         -1
//       </button>
//       <button onClick={addOne} className="button">
//         +1
//       </button>
//       <button onClick={resetCount} className="button">
//         reset
//       </button>
//     </div>
//   );
//   const appRoot = document.getElementById("app");
//   ReactDOM.render(templateTwo, appRoot);
// };
// let count = 0;
// const addOne = () => {
//   count++;
//   console.log(count);
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   console.log(count);
//   renderCounterApp();
// };
// const resetCount = () => {
//   count = 0;
//   console.log(count);
//   renderCounterApp();
// };

// renderCounterApp();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOneEvent = this.addOneEvent.bind(this);
    this.minusOneEvent = this.minusOneEvent.bind(this);
    this.resetEvent = this.resetEvent.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      count: props.count,
    };
  }
  addOneEvent() {
    console.log("+1");
    this.updateState(this.state.count + 1);
  }
  minusOneEvent() {
    console.log("-1");
    this.updateState(this.state.count - 1);
  }
  resetEvent() {
    console.log("0");
    this.updateState(0);
  }
  updateState(newCount) {
    this.setState((state) => {
      return { count: newCount };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOneEvent}>+1</button>
        <button onClick={this.minusOneEvent}>-1</button>
        <button onClick={this.resetEvent}>reset</button>
      </div>
    );
  }
}
Counter.defaultProps = {
  count: 0,
};
ReactDOM.render(<Counter count={5} />, document.getElementById("app"));
