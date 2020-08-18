import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";
import OptionModal from "./OptionModal";
export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined,
  };
  pickOption = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState((state) => ({ selectedOption: option }));
  };
  clearSelected = () => {
    this.setState((state) => ({ selectedOption: undefined }));
  };
  addOption = (option) => {
    if (!option) {
      return "add a valid input";
    } else if (this.state.options.includes(option)) {
      return "item already in list";
    }
    let options = this.state.options;
    options.push(option);
    this.updateOptionsState(options);
  };
  deleteOption = (optionToRemove) => {
    let options = this.state.options.filter(
      (option) => optionToRemove !== option
    );
    this.updateOptionsState(options);
  };
  deleteOptions = () => {
    this.updateOptionsState([]);
  };
  updateOptionsState = (newData) => {
    this.setState((state) => ({ options: newData }));
  };
  componentDidMount() {
    console.log("component mounted");
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    if (options) this.updateOptionsState(options);
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
  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            pickOption={this.pickOption}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              deleteOption={this.deleteOption}
              deleteOptions={this.deleteOptions}
            />
            <AddOption addOption={this.addOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelected={this.clearSelected}
        />
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
