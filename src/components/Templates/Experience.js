import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    const { experience, addMore, edit, remove } = this.props;
    const listExperience = experience.map((office, index) => {
      return (
        <div key={index} className="card bg-light mb-1">
          <div className="card-body">
            <h4 className="card-title">
              <i className="material-icons">business</i>
              {office.name}
            </h4>
            <h6 className="card-text">
              <strong>Title:</strong> {office.title}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Description: {office.desc}
            </h6>
            <div className="d-flex justify-content-between">
              <div className="card-text">
                <i className="material-icons">date_range</i> Started on:{" "}
                {office.start}
              </div>
              <div className="card-text">
                <i className="material-icons">date_range</i> Finished on:{" "}
                {office.end}
              </div>
            </div>
          </div>
          <div className="card-footer d-flex flex-wrap">
            <button
              className="btn btn-outline-primary flex-fill mr-2"
              onClick={edit}
              data-index={index}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger flex-fill ml-2"
              onClick={remove}
              data-index={index}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="Experience">
        <div className="card bg-dark">
          <div className="card-header text-white ">Work Experience</div>
          {listExperience}
          <div className="card-footer">
            <button className="btn btn-info btn-block" onClick={addMore}>
              Add More
            </button>
          </div>
        </div>
      </div>
    );
  }
}
