import React, { Component } from 'react';

//component
import Quotetext from './quotes/quoteText';

class Homepage extends Component {
  render() {
    return (
      <wrapper className="container-fluid">
        <quoteBox>
          <Quotetext />
          <interacts>
            1
          </interacts>
        </quoteBox>
      </wrapper>
    );
  }
}

export default Homepage;