/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../style.css";
import MainImageFile from "../images/handpic.png";
import { Link } from "react-router-dom";
import bicycleImage from "../images/bicycle.png";

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

function Modal(props) {
  const { displayed, onClose } = props;

  return (
    <div className={["modal", displayed ? "is-active" : null].join(" ")}>
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content">
        <div className="box">{props.children}</div>
      </div>
      <button className="modal-close is-large" aria-label="close" />
    </div>
  );
}

class ModalMainButton extends Component {
  state = {
    modalOpen: false
  };

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <>
        <a className="mainbuttons" onClick={this.toggleModal.bind(this)}>
          {this.props.text}
        </a>
        <Modal
          displayed={this.state.modalOpen}
          onClose={this.toggleModal.bind(this)}
        >
          {this.props.modalContent}
        </Modal>
      </>
    );
  }
}

class GiveOrTakeButtons extends Component {
  render() {
    return (
      <div className="section">
        <Centered>
          <ModalMainButton
            text="I Have Something"
            modalContent={<HaveLoginOrSignUp />}
          />
          <ModalMainButton
            text="I Need Something"
            modalContent={<TakeLoginOrSignUp />}
          />
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
    );
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
    );
  }
}
class ForUsButtons extends Component {
  render() {
    return (
      <div
        className="section"
        style={{
          marginTop: "100px"
        }}
      >
        <Centered>
          <Link className="forusbuttons" to="/about">Our Mission</Link>
          <Link class="forusbuttons" to="/feedbackform">Feedback</Link>
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
class Card extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-image" >
          <figure class="image is-4by3">
          <img src={bicycleImage} alt="Placeholder" />
          </figure>
        </div>
      <div class="card-content">
        <div class="media">
              <div class="media-left" >
               <p class="title is-4">John Smith</p>
               <p class="subtitle is-6">@johnsmith</p>
              </div>
        </div>
     <div class="content">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Phasellus nec iaculis mauris.
       <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
       </div>
    </div>
  </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1 className="title is-1">giveNtake</h1>
        </div>
        <DisplayedImage image={MainImageFile} />
        <GiveOrTakeButtons />
        <ForUsButtons />
        <Card />
      </div>
    );
  }
}


export default App;
