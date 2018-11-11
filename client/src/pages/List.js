import React, { Component } from "react";
import Layout from "../components/Layout";

class Card extends Component {
  render() {
    const {
      description,
      mainCategory,
      name,
      ownerEmail,
      timeCreated,
      typeItem
    } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            {/* <img src={bicycleImage} alt="Placeholder" /> */}
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{ownerEmail}</p>
            </div>
          </div>
          <div className="content">
            {description}, {mainCategory}
            <br />
            <time dateTime={timeCreated}>{timeCreated}</time>
          </div>
          <div> </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">{typeItem === "GIVEN" ? "I want this" : "Taken"}</div>
        </footer>
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    fetch("http://localhost:5000/get_items")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }

  render() {
    return (
      <Layout>
        <div className="container section">
          {this.state.data &&
            this.state.data.map(item => {
              console.log(item);
              return <Card key={item.name} {...item} />;
            })}
        </div>
      </Layout>
    );
  }
}

export default List;
