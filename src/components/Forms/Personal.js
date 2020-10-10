import React, { Component } from "react";

export default class Personal extends Component {
  constructor() {
    super();
  }
  render() {
    const { handleChange, savePersonal } = this.props;
    return (
      <div className="Personal">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="John"
              onChange={handleChange}
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
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="abc@email.com"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" oncClick={savePersonal}>
          Add
        </button>
      </div>
    );
  }
}
