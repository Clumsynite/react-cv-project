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
    this.addEducation = this.addEducation.bind(this)
    this.addExperience = this.addExperience.bind(this)
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
  addEducation(data){
    this.setState({education: this.state.education.concat(data)})
  }
  addExperience(data){
    this.setState({experience: this.state.education.concat(data)})
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
        <div className="d-flex mt-3">
          <div className="flex-fill mr-1">
            {!renderEducation && <EducationForm education={education} addMore={this.addEducation}/>}
            {renderEducation && <EducationTemplate education={education} />}
          </div>
          <div className="flex-fill ml-1">
            {!renderExperience && <ExperienceForm experience={experience}
            addMore={this.addExperience} />}
            {renderExperience && <ExperienceTemplate experience={experience} />}
          </div>
        </div>
      </div>
    );
  }
}
