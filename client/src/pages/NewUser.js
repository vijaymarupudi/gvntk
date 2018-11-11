import React from "react";
import * as utils from "../utils";
import * as forms from "../components/forms";
import Layout from "../components/Layout";

function handleSubmit(e) {
  e.preventDefault();
  const $form = e.target;
  const formEntries = utils.formToObject($form);
  utils.postData("/new_user", formEntries);

  // axios.post('http://127.0.0.1:5000/new_user', formEntries)
}

function NewAccount() {
  return (
    <Layout>
      <div className="section container">
        <form onSubmit={handleSubmit}>
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

export default NewAccount;
