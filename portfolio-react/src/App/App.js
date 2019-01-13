import React, { Component } from 'react';
import Main from '../Main/Main.js';
import Projects from '../Projects/Projects.js';
import Example from '../Modal/Modal.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main />
      <Projects />
      <Example />
      </div>
    );
  }
}

export default App;
