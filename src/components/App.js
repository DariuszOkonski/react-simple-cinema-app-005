import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Buy a ticket for a horror of a year</h1>

        <input type="checkbox" id="check" />
        <label htmlFor="check">I have at least 16 years</label>

        <button>buy ticket</button>

        <h2>You can not watch that movie if you have less then 16 year old!</h2>
        <h2>You can watch that movie! Enjoy!</h2>
      </div>
    );
  }
}

export default App;
