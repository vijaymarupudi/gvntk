import React from "react";

function TextField(props) {
  const { label, name, type } = props;
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <div className="control">
        <input name={name} className="input" type={type ? type : "text"} />
      </div>
    </div>
  );
}

function DropdownField(props) {
  const { name, options, label } = props;
  return (
    <div className="field">
      <label className="label" htmlFor={name}>{label}</label>
      <div className="control">
        <div className="select">
          <select name={name}>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function Submit(props) {
  return (
    <div className="field">
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </div>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const $form = e.target;
  const data = new FormData($form);
  const formEntries = {};
  for (const [key, value] of data.entries()) {
    formEntries[key] = value;
  }

  console.log(formEntries);

  fetch("http://127.0.0.1:5000/new_user", {
    method: "POST",
    body: JSON.stringify(formEntries)
  });

  // axios.post('http://127.0.0.1:5000/new_user', formEntries)
}

function NewAccount() {
  return (
    <div className="section container">
      <form onSubmit={handleSubmit}>
        <TextField name="name" label="Name" />
        <TextField name="password" label="Password" type="password" />
        <TextField name="location" label="Location" />
        <TextField name="email" label="Email" />
        <DropdownField name="type" options={["Giver", "Taker"]} label="Type" />
        <Submit />
      </form>
    </div>
  );
}

export default NewAccount;
