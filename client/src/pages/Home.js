import React, { Component } from "react";
import "../style.css";

class Button extends Component {
  render() {
    return (
      <div>
        <Centered>
          <button>I Need Something</button>
          <button>I Have Something</button>
        </Centered>
      </div>
    );
  }
}

function Centered(props) {
  return (
    <div className="level">
      {props.children.map(item => (
        <div className="level-item">{item}</div>
      ))}
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App section container">
        <h1 class="title is-1">giveNtake</h1>
        <Button />
      </div>
    );
  }
}

export default App;
