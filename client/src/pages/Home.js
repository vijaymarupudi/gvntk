import React, { Component } from "react";
import "../style.css";
import MainImageFile from "../images/handpic.png";
import { Link } from "react-router-dom";

function DisplayedImage(props) {
  const { image } = props;
  console.log(image);
  return (
    <div
      className="hero is-large"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    >
      <div className="hero-body" />
    </div>
  );
}

class GiveOrTakeButtons extends Component {
  render() {
    return (
      <div className="section">
        <Centered>
          <Link className="mainbuttons" to="/new_user">I Have Something</Link>
          <Link to="/new_user" className="mainbuttons">I Need Something</Link>
        </Centered>
      </div>
    );
  }
}
class HaveLoginOrSignUp extends Component {
  render() {
    return (
      <div className="HaveLoginOrSignUp">
        <Centered>
          <Link to="/new_user">Sign Up</Link>
          <Link to="/login">Login</Link>
        </Centered>
      </div>
    )
  }
}
class TakeLoginOrSignUp extends Component {
  render() {
    return (
      <div className="TakeLoginorSignUp">
      <Centered>
        <Link to="/new_user">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/list">List of Items</Link>
      </Centered>
      </div>
    )
  }
}
class ForUsButtons extends Component {
  render() {
    return (
      <div
        class="section"
        style={{
          marginTop: "100px"
        }}
      >
        <Centered>
          <Link className="forusbuttons" to="/about">Our Mission</Link>
          <button class="forusbuttons">Feedback</button>
        </Centered>
      </div>
    );
  }
}

function Centered(props) {
  if (Array.isArray(props.children)) {
    return (
      <div className="level">
        {props.children.map(item => (
          <div className="level-item">{item}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="level">
      <div className="level-item">{props.children}</div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1 class="title is-1">giveNtake</h1>
        </div>
        <DisplayedImage image={MainImageFile} />
        <GiveOrTakeButtons />
        <HaveLoginOrSignUp />
        <TakeLoginOrSignUp />
        <ForUsButtons />
      </div>
    );
  }
}

export default App;
