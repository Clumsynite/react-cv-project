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
      updateEducation: {
        name: "",
        title: "",
        start: "",
        end: "",
      },
      experience: [],
      updateExperience: {},
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
    this.editEducation = this.editEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.saveExperience = this.saveExperience.bind(this);
    this.moreExperience = this.moreExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
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
    this.setState({
      education: this.state.education.concat(data),
      updateEducation: {
        name: "",
        title: "",
        start: "",
        end: "",
      },
    });
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
  editEducation(e) {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    const education = this.state.education[index];
    this.removeEducation(e);
    this.setState({ updateEducation: education, renderEducation: false });
  }
  removeEducation(e) {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    const educationArray = this.state.education;
    educationArray.splice(index, 1);
    this.setState({ education: educationArray });
    if (this.state.education.length < 1) {
      this.setState({ renderEducation: false });
    }
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
  moreExperience(e) {
    e.preventDefault();
    this.setState({ renderExperience: false });
  }
  editExperience(e) {
    e.preventDefault();
  }
  removeExperience(e) {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    const experienceArray = this.state.experience;
    experienceArray.splice(index, 1);
    this.setState({ experience: experienceArray });
    if (this.state.experience.length < 1) {
      this.setState({ renderExperience: false });
    }
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
      updateEducation,
      renderExperience,
      updateExperience,
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
                education={updateEducation}
                addMore={this.addEducation}
                handleClick={this.saveEducation}
              />
            )}
            {renderEducation && (
              <EducationTemplate
                education={education}
                addMore={this.moreEducation}
                edit={this.editEducation}
                remove={this.removeEducation}
              />
            )}
          </div>
          <div className="flex-fill">
            {!renderExperience && (
              <ExperienceForm
                experience={updateExperience}
                addMore={this.addExperience}
                handleClick={this.saveExperience}
              />
            )}
            {renderExperience && (
              <ExperienceTemplate
                experience={experience}
                addMore={this.moreExperience}
                edit={this.editExperience}
                remove={this.removeExperience}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
