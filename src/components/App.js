import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ControlData from './ControlData';
import DisplayData from './DisplayData';

class App extends Component {
  state = {
    checked: false,
    showData: false,
  }

  handleCheckBox = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
      showData: false,
    }));
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showData: true,
    }))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <ControlData state={this.state} check={this.handleCheckBox} click={this.handleClick} />
        <DisplayData state={this.state} />
      </div>
    );
  }
}

export default App;
