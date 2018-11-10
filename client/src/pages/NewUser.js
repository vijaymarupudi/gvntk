import React, { Component } from "react";
import axios from 'axios'

// function NewItem() {
//   return (
//     <form>
//       <label for="name">Name</label>
//       <label for="type">Type of item</label>
//       <label for="subtype">Sub type of item</label>
//       <label for="description">Description</label>
//     </form>
//   );
// }

function handleSubmit(e) {
  e.preventDefault();
  const $form = e.target
  const data = new FormData($form)
  const formEntries = {}
  for (const [key, value] of data.entries()) {
    formEntries[key] = value
  }
  axios.post('http://127.0.0.1:5000/new_user', formEntries)
}

function NewAccount() {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <input type="text" name="name" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" />
      <br />
      <label htmlFor="location">Location</label>
      <br />
      <input name="location" type="text" />
      <br />
      <label htmlFor="email">Email address</label>
      <br />
      <input type="text" name="email" />
      <br />
      <label htmlFor="type" type="text">
        Type
      </label>
      <br />
      <input name="type" type="text" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewAccount;
