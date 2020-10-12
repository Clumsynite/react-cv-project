import React, { Component } from "react";
import Errors from "../Errors";
export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.experience.name,
      title: this.props.experience.title,
      desc: this.props.experience.title,
      start: this.props.experience.start,
      end: this.props.experience.end,
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
  resetState() {
    this.setState({
      name: "",
      title: "",
      desc: "",
      start: "",
      end: "",
      errors: [],
    });
  }
  clearError() {
    this.setState({ errors: [] });
  }
  async addDetails(e) {
    e.preventDefault();
    await this.clearError();
    const { name, title, desc, start, end, errors } = this.state;
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
    if (desc.trim().length < 1) {
      this.setState({
        errors: errors.concat({ msg: "Description can't be empty" }),
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
    const { name, title, desc, start, end, errors } = this.state;
    return (
      <div className="Experience">
        {errors.length > 0 && <Errors errors={errors} />}
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
                value={name}
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
                value={title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Describe what you did</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                name="desc"
                placeholder="Describe what you did"
                title="What did you do over there"
                onChange={this.handleChange}
                value={desc}
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
