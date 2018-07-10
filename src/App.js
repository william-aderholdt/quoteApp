import React, { Component } from 'react';
import './Assets/css/default.min.css';

//components
import Footer from './components/footerComponent/footer';
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Homepage />

        <Footer />
        
      </div>
    );
  }
}

export default App;
