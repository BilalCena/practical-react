import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1 className="App-title">{this.props.title}</h1>
        </p>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello from Hi from" />
        <Header title="Hello from Hi from 45" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test <code>src/App.js</code> Bilal and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test2 Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
