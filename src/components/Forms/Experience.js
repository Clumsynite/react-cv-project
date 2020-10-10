import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <div className="card">
          <div className="card-body bg-light">
          <div class="form-group">
              <label for="companyName">Compnay Name</label>
              <input
                type="text"
                class="form-control"
                id="companyName"
                placeholder="Some Company"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
