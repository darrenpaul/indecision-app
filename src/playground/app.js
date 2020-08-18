class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.pickOption = this.pickOption.bind(this);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.state = {
      options: props.options,
    };
  }
  componentDidMount() {
    console.log("component mounted");
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    if (options) this.updateState(options);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component update");
    try {
      if (prevProps.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("saving data");
      }
    } catch (error) {}
  }

  componentWillUnmount(prevProps, prevState) {
    console.log("component unmounted");
  }

  pickOption() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    console.log(option);
  }
  addOption(option) {
    if (!option) {
      return "add a valid input";
    } else if (this.state.options.includes(option)) {
      return "item already in list";
    }
    let options = this.state.options;
    options.push(option);
    this.updateState(options);
  }
  deleteOption(optionToRemove) {
    let options = this.state.options.filter(
      (option) => optionToRemove !== option
    );
    this.updateState(options);
  }
  deleteOptions() {
    this.updateState([]);
  }
  updateState(newData) {
    this.setState((state) => ({ options: newData }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          pickOption={this.pickOption}
        />
        <Options
          options={this.state.options}
          deleteOption={this.deleteOption}
          deleteOptions={this.deleteOptions}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};
const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.pickOption}>
        What should I do?
      </button>
    </div>
  );
};
const Options = (props) => {
  return (
    <div>
      <p>Options</p>
      {props.options.length == 0 ? <p>Please add some options</p> : undefined}
      <button onClick={props.deleteOptions}>Remove All</button>
      {props.options.map((option) => (
        <Option
          key={option}
          option={option}
          deleteOption={props.deleteOption}
        />
      ))}
      <Option />
    </div>
  );
};
const Option = (props) => {
  return (
    <div>
      {props.option ? (
        <p>
          {props.option}
          <button
            onClick={(e) => {
              props.deleteOption(props.option);
            }}
          >
            Remove
          </button>
        </p>
      ) : undefined}
    </div>
  );
};
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.state = {
      error: undefined,
    };
  }
  submitEvent(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    this.setState((state) => ({ error: error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submitEvent}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
Header.defaultProps = {
  title: "Indecision",
};
IndecisionApp.defaultProps = {
  options: [],
};
ReactDOM.render(
  <IndecisionApp options={["one", "two"]} />,
  document.getElementById("app")
);
