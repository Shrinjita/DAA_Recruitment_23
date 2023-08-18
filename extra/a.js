import React from 'react';
import './App.css';

class App extends React.Component {
  handleSubscribeClick = () => {
    alert('Thank you for subscribing!');
  };

  render() {
    return (
      <div className="App">
        <button className="subscribe-button" onClick={this.handleSubscribeClick}>
          Subscribe
        </button>
      </div>
    );
  }
}

export default App;


