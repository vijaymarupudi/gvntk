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
      typeItem,
      image_path
    } = this.props;
    return (
      <div className="tile is-4">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={image_path} alt="Placeholder" />
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
            <div className="card-footer-item">
              {typeItem === "GIVEN" ? "I want this" : "Taken"}
            </div>
          </footer>
        </div>
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
        const newData = [];
        for (const dataItem of data) {
          const newDataItem = {};
          for (const [key, value] of Object.entries(dataItem)) {
            newDataItem[key] = value;
          }
          newDataItem["image_path"] = encodeURI(
            `http://localhost:5000/images?path=${btoa(dataItem.photo)}`
          );
          newData.push(newDataItem);
        }

        console.log(newData);

        this.setState({
          data: newData
        });
      });
  }

  render() {
    return (
      <Layout>
        <div className="container section">
          {this.state.data && (
            <div
              className="tile is-ancestor"
              style={{
                flexWrap: "wrap"
              }}
            >
              {this.state.data.map(item => {
                return <Card key={item.name} {...item} />;
              })}
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default List;
