import React, { Component } from "react";
import * as utils from "../utils";
import * as forms from "../components/forms";
import Layout from "../components/Layout";

class NewAccount extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const $form = e.target;
    const formEntries = utils.formToObject($form);
    utils.postData("/new_user", formEntries).then(() => {
      this.props.history.push("/login");
    });
    // axios.post('http://127.0.0.1:5000/new_user', formEntries)
  }

  render() {
    return (
      <Layout>
        <div className="section container">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <forms.TextField name="name" label="Name" />
            <forms.TextField name="password" label="Password" type="password" />
            <forms.TextField name="location" label="Location" />
            <forms.TextField name="email" label="Email" />
            <forms.DropdownField
              name="type"
              options={["Giver", "Taker"]}
              label="Type"
            />
            <forms.Submit />
          </form>
        </div>
      </Layout>
    );
  }
}

export default NewAccount;
