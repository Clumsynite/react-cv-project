import React, { Component } from "react";

export default class Education extends Component {
  render() {
    const { education } = this.props;
    const listEducation = education.map((school, index) => {
      return (
        <div key={index} className="card bg-light">
          <div className="card-body">
            <h4 className="card-title">
              <i className="material-icons">business</i>
              {school.name}
            </h4>
            <h6 className="card-text"><strong>Title:</strong> {school.title}</h6>
            <div className="d-flex justify-content-between">
              <div className="card-text">
                <i className="material-icons">date_range</i> Started on: {school.start}
              </div>
              <div className="card-text">
                <i className="material-icons">date_range</i> Finished on:{" "}
                {school.end}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="Education">
        <div className="card bg-dark">
          <div className="card-header text-white ">Education</div>
          {listEducation}
        </div>
      </div>
    );
  }
}
