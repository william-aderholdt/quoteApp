import React, { Component } from 'react';
import './Assets/css/default.min.css';

//components

import Homepage from './components/pages/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Homepage />

      </div>
    );
  }
}

export default App;
