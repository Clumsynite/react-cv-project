import React, { Component } from "react";

export default class Education extends Component {
  render() {
    const { education, addMore, edit, remove } = this.props;
    const listEducation = education.map((school, index) => {
      return (
        <div key={index} className="card bg-light mb-1">
          <div className="card-body">
            <h4 className="card-title">
              <i className="material-icons">business</i>
              {school.name}
            </h4>
            <h6 className="card-text">
              <strong>Title:</strong> {school.title}
            </h6>
            <div className="d-flex justify-content-between">
              <div className="card-text d-flex">
                <div>
                  <i className="material-icons mt-1">date_range</i>
                </div>
                <div className="mt-1"> Started on: {school.start}</div>
              </div>
              <div className="card-text d-flex">
                <div>
                  <i className="material-icons mt-1">date_range</i>
                </div>
                <div className="mt-1"> Finished on: {school.end}</div>
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
      <div className="Education">
        <div className="card bg-dark">
          <div className="card-header text-white ">Education</div>
          {listEducation}
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
