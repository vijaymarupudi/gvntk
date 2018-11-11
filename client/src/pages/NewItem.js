import React from "react";
import Layout from "../components/Layout";
import * as forms from '../components/forms'

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
]

function NewItem() {
  return <Layout>
    <div className="section container">
      <form>
        <forms.TextField name="name" label="Name" />
        <forms.TextField name="description" label="Description" />
        <forms.DropdownField name="mainCategory" options={mainCategories} label="Category" />
        <forms.FileUpload />
      </form>
    </div>
  </Layout>;
}

export default NewItem;
