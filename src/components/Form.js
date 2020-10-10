import React, { Component } from "react";
import PersonalForm from "./Forms/Personal";
import PersonalTemplate from "./Templates/Personal";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      description: "",
      address: "",
      Languages: [],
      projects: [],
      education: [],
      certificates: [],
      experience: [],
      renderPersonal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.savePersonal = this.savePersonal.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.id]: value });
  }
  savePersonal(e) {
    e.preventDefault();
  }
  render() {
    const {
      firstname,
      lastname,
      email,
      description,
      address,
      Languages,
      projects,
      education,
      certificates,
      experience,
      renderPersonal,
    } = this.state;
    return (
      <div className="Form">
        <PersonalForm handleChange={this.handleChange} />
        {renderPersonal && <PersonalTemplate details={firstname, lastname,email, address}/>}
      </div>
    );
  }
}
