import React, { Component } from "react";

export default class Personal extends Component {
  constructor() {
    super();
  }
  render() {
    const { firstname, lastname, email, address, edit } = this.props;
    return (
      <div className="Personal">
        <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Personal Details</h5>
          <button className="btn btn-outline-primary btn-sm" onClick={edit} title="Edit Section"><i className="material-icons" style={{fontSize: "20px"}}>edit</i></button>
        </div>
          <div className="card-body">
            <h5 className="card-title">{`${firstname} ${lastname}`}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
            <p className="card-text">{address}</p>
          </div>
        </div>
      </div>
    );
  }
}
