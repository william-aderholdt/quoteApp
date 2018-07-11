import React, { Component } from 'react'

import Quote from './quote';

class Homepage extends Component {
  render() {
    return (
      <div id='wrapper' className="container-fluid">
        <Quote />
      </div>
    );
  }
}

export default Homepage;

