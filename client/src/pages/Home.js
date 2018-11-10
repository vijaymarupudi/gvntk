import React, { Component } from "react";
import "../style.css";

class GiveOrTakeButtons extends Component {
  render() {
    return (
      <div>
        <Centered>
          <button class="mainbuttons">I Need Something</button>
          <button class="mainbuttons">I Have Something</button>
        </Centered>
      </div>
    );
  }
}
class AboutUsButton extends Component {
  render () {
    return (
      <div class="section" style={{
        marginTop: "100px"
      }}>
        <button class="aboutusbutton">Our Mission</button>
      </div>
    )
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
        <GiveOrTakeButtons />
        <AboutUsButton />
      </div>
    );
  }
}

export default App;
