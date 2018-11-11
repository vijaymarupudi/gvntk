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
  state = {
    text: "Choose a file..."
  };

  render() {
    const { name, label } = this.props;
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <div className="file">
            <label className="file-label">
              <input
                onClick={() => {
                  this.setState({
                    text: "File chosen."
                  });
                }}
                className="file-input"
                type="file"
                name={name}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">{this.state.text}</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
