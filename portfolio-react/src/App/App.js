import React, { Component } from 'react';
import Main from '../Main/Main.js';
import Projects from '../Projects/Projects.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main />
      <Projects />
      </div>
    );
  }
}

export default App;
