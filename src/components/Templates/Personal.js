import React, { Component } from "react";

export default class Personal extends Component {
  constructor() {
    super();
  }
  render() {
    const { details } = this.props;
    return (
      <div className="Personal">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{`${details.firstname} ${details.lastname}`}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{details.email}</h6>
            <p className="card-text">{details.address}</p>
          </div>
        </div>
      </div>
    );
  }
}
