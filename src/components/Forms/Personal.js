import React, { Component } from "react";

export default class Personal extends Component {
  render() {
    const {
      handleChange,
      handleClick,
      firstname,
      lastname,
      email,
      address,
      phoneNumber,
    } = this.props;
    return (
      <div className="Personal">
        <div className="card">
          <div className="card-body bg-light">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="John"
                  onChange={handleChange}
                  value={firstname}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Doe"
                  onChange={handleChange}
                  value={lastname}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="String"
                  className="form-control"
                  id="phoneNumber"
                  maxLength="15"
                  placeholder="12 34 567 889"
                  onChange={handleChange}
                  value={phoneNumber}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="abc@email.com"
                  onChange={handleChange}
                  value={email}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                onChange={handleChange}
                value={address}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary btn-block"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
