import React, { Component } from "react";

export default class Personal extends Component {
  constructor() {
    super();
  }
  render() {
    const { name, description, email } = this.props;
    return (
      <div className="Personal">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
