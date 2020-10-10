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
      address: "",
      phoneNumber: "",
      Languages: [],
      projects: [],
      education: [],
      certificates: [],
      experience: [],
      renderPersonal: false,
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
      Languages,
      projects,
      education,
      certificates,
      experience,
      renderPersonal,
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
      </div>
    );
  }
}
