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
      <div>
        <Centered>
          <Link to="/new_user">
            <button className="mainbuttons">I Need Something</button>
          </Link>
          <button class="mainbuttons">I Have Something</button>
        </Centered>
      </div>
    );
  }
}
class AboutUsButton extends Component {
  render() {
    return (
      <div
        class="section"
        style={{
          marginTop: "100px"
        }}
      >
        <Centered>
          <button class="aboutusbutton">Our Mission</button>
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
        <AboutUsButton />
      </div>
    );
  }
}

export default App;
