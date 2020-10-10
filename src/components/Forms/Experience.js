import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <div className="card">
          <div className="card-body bg-light">
            <div class="form-group">
              <label for="name">Company Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Some Company"
              />
            </div>
            <div class="form-group">
              <label for="position">Job Title</label>
              <input
                type="text"
                class="form-control"
                id="position"
                placeholder="Junior/Senior Developer"
                title="Position"
              />
            </div>
            <div class="form-group">
              <label for="tasks">Your Tasks</label>
              <input
                type="text"
                class="form-control"
                id="tasks"
                placeholder="Describe what you did"
                title="What did you do over there"
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
