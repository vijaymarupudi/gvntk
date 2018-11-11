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
      <div class="card">
        <div class="card-image" >
          <figure class="image is-4by3">
          {/* <img src={bicycleImage} alt="Placeholder" /> */}
          </figure>
        </div>
      <div class="card-content">
        <div class="media">
              <div class="media-left" >
               <p class="title is-4">{name}</p>
               <p class="subtitle is-6">{ownerEmail}</p>
              </div>
        </div>
     <div class="content"> {description}, {mainCategory}
     <br />
       <time datetime="2016-1-1">{timeCreated}</time>
       </div>
       <div> <footer class="card-footer">
          <div>{typeItem}</div>
  </footer></div>
    </div>
  </div>
    )
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
