import React, { Component } from "react";
import Layout from "../components/Layout";
import * as forms from "../components/forms";

const mainCategories = [
  "Accessories",
  "Clothes",
  "Food",
  "Bedding",
  "Appliances",
  "Books",
  "Toys",
  "Electronics",
  "Sanitation Products",
  "Tools"
];

class NewItem extends Component {
  submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/new_item", true);
    xhr.withCredentials = true;
    xhr.send(formData);
    setTimeout(() => {
      console.log("hello");
      this.props.history.push("/list");
    }, 100);
  }

  render() {
    return (
      <Layout>
        <div className="section container">
          <form onSubmit={this.submitForm.bind(this)}>
            <forms.TextField name="name" label="Name" />
            <forms.TextField name="description" label="Description" />
            <forms.DropdownField
              name="mainCategory"
              options={mainCategories}
              label="Category"
            />
            <forms.FileUpload name="image" label="Image" />
            <forms.Submit />
          </form>
        </div>
      </Layout>
    );
  }
}

export default NewItem;
