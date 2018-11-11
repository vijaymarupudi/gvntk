import React, { Component } from "react";

export function TextField(props) {
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

export function DropdownField(props) {
  const { name, options, label } = props;
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">
        <div className="select">
          <select name={name}>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export function Submit(props) {
  return (
    <div className="field">
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </div>
  );
}

export class FileUpload extends Component {
  render() {
    return (
      <div className="file has-name is-right">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload" />
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
          <span className="file-name">
            Screen Shot 2017-07-29 at 15.54.25.png
          </span>
        </label>
      </div>
    );
  }
}
