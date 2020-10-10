import React, { Component } from "react";
import PersonalForm from "./Forms/Personal";
import PersonalTemplate from "./Templates/Personal";
import EducationForm from "./Forms/Education";
import EducationTemplate from "./Templates/Education";
import ExperienceForm from "./Forms/Experience";
import ExperienceTemplate from "./Templates/Experience";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phoneNumber: "",
      education: [],
      experience: [],
      renderPersonal: false,
      renderEducation: false,
      renderExperience: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.savePersonal = this.savePersonal.bind(this);
    this.editPersonal = this.editPersonal.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.id]: value });
  }
  savePersonal(e) {
    e.preventDefault();
    this.setState({ renderPersonal: true });
  }
  editPersonal(e) {
    e.preventDefault();
    this.setState({ renderPersonal: false });
  }
  render() {
    const {
      firstname,
      lastname,
      email,
      phoneNumber,
      address,
      education,
      experience,
      renderPersonal,
      renderEducation,
      renderExperience,
    } = this.state;
    return (
      <div className="Form">
        {!renderPersonal && (
          <PersonalForm
            handleChange={this.handleChange}
            handleClick={this.savePersonal}
            firstname={firstname}
            lastname={lastname}
            email={email}
            address={address}
            phoneNumber={phoneNumber}
          />
        )}
        {renderPersonal && (
          <PersonalTemplate
            firstname={firstname}
            lastname={lastname}
            email={email}
            address={address}
            phoneNumber={phoneNumber}
            edit={this.editPersonal}
          />
        )}
        <div className="d-flex flex-row mt-3">
          {!renderEducation && <EducationForm education={education} />}
          {renderEducation && <EducationTemplate education={education} />}
          {!renderExperience && <ExperienceForm experience={experience} />}
          {renderExperience && <ExperienceTemplate experience={experience} />}
        </div>
      </div>
    );
  }
}
