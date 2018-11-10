import React, { Component } from 'react';
import '../style.css'

class Button extends Component {
  render() {
    return <div>
      <button>I Need Something</button>
      <button>I Have Something</button>
    </div>
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
