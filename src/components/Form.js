import React, { Component } from "react";
import PersonalForm from "./Forms/Personal";
import PersonalTemplate from "./Templates/Personal";
import EducationForm from "./Forms/Education";
import EducationTemplate from "./Templates/Education";
import ExperienceForm from "./Forms/Experience";
import ExperienceTemplate from "./Templates/Experience";
import Errors from "./Errors";

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
      errors: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.savePersonal = this.savePersonal.bind(this);
    this.editPersonal = this.editPersonal.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.saveEducation = this.saveEducation.bind(this);
    this.moreEducation = this.moreEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.saveExperience = this.saveExperience.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.setError = this.setError.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.id]: value });
  }
  isEmpty(elem) {
    return elem.trim().length < 1;
  }
  async savePersonal(e) {
    e.preventDefault();
    await this.clearErrors();
    const emailRegex = /\S+@\S+\.\S+/;
    const { firstname, lastname, phoneNumber, email, address } = this.state;
    if (this.isEmpty(firstname)) {
      this.setError("Firstname can't be empty");
      return;
    }
    if (this.isEmpty(lastname)) {
      this.setError("Lastname can't be empty");
      return;
    }
    if (this.isEmpty(phoneNumber)) {
      this.setError("Phone Number can't be empty");
      return;
    }
    if (this.isEmpty(email)) {
      this.setError("Email ID can't be empty");
      return;
    }
    if (!emailRegex.test(email)) {
      this.setError("Invalid Email Address");
      return;
    }
    if (this.isEmpty(address)) {
      this.setError("Address can't be empty");
      return;
    }
    this.setState({ renderPersonal: true });
  }
  editPersonal(e) {
    e.preventDefault();
    this.setState({ renderPersonal: false });
  }
  addEducation(data) {
    this.setState({ education: this.state.education.concat(data) });
  }
  async saveEducation(e) {
    e.preventDefault();
    await this.clearErrors();
    if (this.state.education.length < 1) {
      this.setError("Click the Add button to add your Education details");
      return;
    }
    this.setState({ renderEducation: true });
  }
  moreEducation(e) {
    e.preventDefault();
    this.setState({ renderEducation: false });
  }
  addExperience(data) {
    this.setState({ experience: this.state.experience.concat(data) });
  }
  async saveExperience(e) {
    e.preventDefault();
    await this.clearErrors();
    if (this.state.experience.length < 1) {
      this.setError("Click the Add button to add your Experience details");
      return;
    }
    this.setState({ renderExperience: true });
  }
  clearErrors() {
    this.setState({ errors: [] });
  }
  setError(msg) {
    this.setState({ errors: this.state.errors.concat({ msg: msg }) });
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
      errors,
    } = this.state;
    return (
      <div className="Form container">
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
        {errors.length > 0 && <Errors errors={errors} />}
        <div className="d-flex mt-3 flex-wrap">
          <div className="flex-fill mb-2">
            {!renderEducation && (
              <EducationForm
                education={education}
                addMore={this.addEducation}
                handleClick={this.saveEducation}
              />
            )}
            {renderEducation && (
              <EducationTemplate
                education={education}
                addMore={this.moreEducation}
              />
            )}
          </div>
          <div className="flex-fill">
            {!renderExperience && (
              <ExperienceForm
                experience={experience}
                addMore={this.addExperience}
                handleClick={this.saveExperience}
              />
            )}
            {renderExperience && <ExperienceTemplate experience={experience} />}
          </div>
        </div>
      </div>
    );
  }
}
