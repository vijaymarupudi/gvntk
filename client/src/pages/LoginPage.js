import React, { Component } from "react";

import * as forms from "../components/forms";
import * as utils from "../utils";
import { Redirect } from "react-router-dom";

import Layout from "../components/Layout";

export default class Login extends Component {

  state = {
    redirect: false
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = utils.formToObject(e.target);
    utils.postData("/login", formData);
  }

  render() {
    return (
      <Layout>
        <div className="section container">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <forms.TextField name="email" label="Email" />
            <forms.TextField name="password" label="Password" type="password" />
            <forms.Submit />
          </form>
          {this.state.redirect && <Redirect to="/new_item" />}
        </div>
      </Layout>
    );
  }
}
