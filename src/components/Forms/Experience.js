import React, { Component } from "react";

export default class Experience extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      title: "",
      start: "",
      end: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { addMore, handleClick } = this.props;
    return (
      <div className="Experience">
        <div className="card">
          <div className="card-body bg-light">
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="name"
                placeholder="Some Company"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Job Title</label>
              <input
                type="text"
                className="form-control"
                id="position"
                name="title"
                placeholder="Junior/Senior Developer"
                title="Position"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tasks">Your Tasks</label>
              <input
                type="text"
                className="form-control"
                id="tasks"
                name="tasks"
                placeholder="Describe what you did"
                title="What did you do over there"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="start">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="start"
                  name="start"
                  title="Date when you Started this course"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="end">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="end"
                  name="end"
                  title="Date when you Finished this course"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-outline-info btn-block"
              onClick={() => addMore(this.state)}
            >
              Add More
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary btn-block"
              onClick={handleClick}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
