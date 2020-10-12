import React, { Component } from "react";

export default class Personal extends Component {
  render() {
    const {
      firstname,
      lastname,
      email,
      address,
      edit,
      phoneNumber,
    } = this.props;
    return (
      <div className="Personal">
        <div className="card bg-dark">
          <div className="card-header d-flex justify-content-between align-items-center text-white">
            <h5>Personal Details</h5>
            <button
              className="btn btn-primary btn-sm"
              onClick={edit}
              title="Edit Section"
            >
              <i className="material-icons" style={{ fontSize: "20px" }}>
                edit
              </i>
            </button>
          </div>
          <div className="card-body bg-light">
            <h5 className="card-title">{`${firstname} ${lastname}`}</h5>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="d-flex align-items-center">
                <i className="material-icons">email</i>
                <h5 className="card-subtitle text-muted ml-1"> {email}</h5>
              </div>
              <div className="d-flex align-items-center">
                <i className="material-icons" style={{ color: "black" }}>
                  smartphone
                </i>
                <h5 className="card-subtitle text-muted">{phoneNumber}</h5>
              </div>
            </div>
            <div className="mt-2 d-flex align-items-center ">
              <i className="material-icons" style={{ color: "black" }}>
                home
              </i>
              <p className="card-text ml-1"> {address}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
