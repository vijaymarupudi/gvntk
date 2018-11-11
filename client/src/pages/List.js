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
    return <div>{timeCreated}</div>;
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
              console.log(item)
              return <Card {...item} />;
            })}
        </div>
      </Layout>
    );
  }
}

export default List;
