import React, { Component } from 'react';
import '../style.css'

class Button extends Component {
  render() {
    return <button>I Need Something</button>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>giveNtake</h1>
          <Button />
      </div>
    );
  }
}


export default App;
