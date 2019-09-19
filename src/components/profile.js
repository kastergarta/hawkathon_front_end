import React, { Component } from 'react';
import Checkbox from './checkbox.js';

const OPTIONS = ["JS", "Python", "GraphQL", "Rust", "React", "Angular", "R", "Cooking", "Amrit"];

class Profile extends Component {
  state = {
    name: '',
    location: '',
    skills: '',
    id: '',

    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  }

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {

      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };


  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };
// #################### SUBMIT FORM #############################################
  handleFormSubmit = formSubmitEvent => {
    // console.log(this.state.checkboxes)
    formSubmitEvent.preventDefault();

    let newSkillsString = Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .join(' ');

    // console.log(typeof newSkillsString)

    fetch(`http://localhost:3000/users/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.jwt}`
      },
      body: JSON.stringify({skills: newSkillsString} )
    })
    .then(res => res.json())
    .then(console.log)

  };
  // #################################################################
  createCheckbox = option => (
     <Checkbox
       label={option}
       isSelected={this.state.checkboxes[option]}
       onCheckboxChange={this.handleCheckboxChange}
       key={option}
     />
   );

   createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  componentDidMount() {
    fetch('http://localhost:3000/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.jwt}`
      }
    })
    .then(res => res.json())
    .then(data => this.setState({name: data.user.name, skills: data.user.skills, id: data.user.id}))

  }


  render() {

    let skillsArray = this.state.skills.split(" ");
    const skills = skillsArray.map(skill => {
      return <p> {skill} </p>;
    });

    switch (this.state.name) {
           case ("Dennis"):
             return (
            <div>
               <div className="App">
                 <h1>Welcome {this.state.name}!</h1>
                 <p> Here are your skills:</p>
                 {skills}
                 <h2>Update your skills:</h2>
               </div>
               <div className="new-skills-form">
               <form onSubmit={this.handleFormSubmit}>
                   {this.createCheckboxes()}


                   <button
                     type="button"
                     className="btn btn-outline-primary mr-2"
                     onClick={this.selectAll}
                   >
                     Select All
                   </button>

                   <button
                     type="button"
                     className="btn btn-outline-primary mr-2"
                     onClick={this.deselectAll}
                   >
                     Deselect All
                   </button>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
               </form>

               </div>
            </div>

             );
           default:
    return (
      <div>
        555
      </div>
    );
  }
}
}

export default Profile;
