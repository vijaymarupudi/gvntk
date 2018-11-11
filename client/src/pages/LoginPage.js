import React from "react";

import * as forms from "../components/forms";
import * as utils from "../utils";
import {Redirect} from "react-router-dom"

import Layout from "../components/Layout";

function handleSubmit(e) {
  e.preventDefault();
  const formData = utils.formToObject(e.target);
  utils.postData("/login", formData);
  //<Redirect to="/new_item" />
}

export default function Login() {
  return (
    <Layout>
      <div className="section container">
        <form onSubmit={handleSubmit}>
          <forms.TextField name="email" label="Email" />
          <forms.TextField name="password" label="Password" type="password" />
          <forms.Submit />
        </form>
      </div>
    </Layout>
  );
}
