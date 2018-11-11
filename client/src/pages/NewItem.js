import React from "react";
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

function submitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/new_item", true);
  xhr.send(formData);
}

function NewItem() {
  return (
    <Layout>
      <div className="section container">
        <form onSubmit={submitForm}>
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

export default NewItem;
