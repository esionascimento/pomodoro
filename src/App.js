import React, { Component } from 'react';

import { Pomodoro } from './page/Pomodoro';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Pomodoro />
      </div>
    );
  }
}
