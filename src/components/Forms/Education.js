import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="Education">
        <div className="card">
          <div className="card-body bg-light">
            <div class="form-group">
              <label for="name">School Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Tilak Maharashtra Vidyapeeth"
              />
            </div>
            <div class="form-group">
              <label for="degree">Title of Study</label>
              <input
                type="text"
                class="form-control"
                id="degree"
                placeholder="Certification/Degree for? Ex. BCA"
              />
            </div>
            <div className="form-row">
              <div class="form-group col-md-6">
                <label for="start">Start Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="start"
                  title="Date when you Started this course"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="end">End Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="end"
                  title="Date when you Finished this course"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
