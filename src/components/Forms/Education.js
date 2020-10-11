import React, { Component } from "react";

export default class Education extends Component {
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
      <div className="Education">
        <div className="card">
          <div className="card-body bg-light">
            <div className="form-group">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                className="form-control"
                id="schoolName"
                name="name"
                placeholder="Tilak Maharashtra Vidyapeeth"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title of Study</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Certification/title for? Ex. BCA"
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
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-outline-info btn-block"
              onClick={addMore}
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
