import React, { Component } from "react";
import Errors from "../Errors";
export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.education.name,
      title: this.props.education.title,
      start: this.props.education.start,
      end: this.props.education.end,
      errors: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addDetails = this.addDetails.bind(this);
    this.clearError = this.clearError.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  clearError() {
    this.setState({ errors: [] });
  }
  resetState() {
    this.setState({
      name: "",
      title: "",
      start: "",
      end: "",
      errors: [],
    });
  }
  async addDetails(e) {
    e.preventDefault();
    await this.clearError();
    const { name, title, start, end, errors } = this.state;
    if (name.trim().length < 1) {
      this.setState({
        errors: errors.concat({ msg: "School Name can't be empty" }),
      });
      return;
    }
    if (title.trim().length < 1) {
      this.setState({
        errors: errors.concat({ msg: "Title of Study can't be empty" }),
      });
      return;
    }
    if (start.trim().length < 1) {
      this.setState({
        errors: errors.concat({ msg: "Start Date can't be empty" }),
      });
      return;
    }
    if (end.trim().length < 1) {
      this.setState({
        errors: errors.concat({ msg: "End Date can't be empty" }),
      });
      return;
    }
    const state = this.state;
    this.props.addMore(state);
    this.resetState();
  }

  render() {
    const { handleClick } = this.props;
    const { name, title, start, end, errors } = this.state;
    return (
      <div className="Education">
        {errors.length > 0 && <Errors errors={errors} />}
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
                value={name}
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
                value={title}
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
                  value={start}
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
                  value={end}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-outline-info btn-block"
              onClick={this.addDetails}
            >
              Add
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
