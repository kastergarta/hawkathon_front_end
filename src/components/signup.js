import React from 'react';

class SignUp extends React.Component {

// ###################################
  state = {
    name: '',
    email: '',
    password: '',
    location: '',
    skills: ''
  };
// ###################################

 handleChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   });
 }

  // ###################################
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(console.log)

  };

  render() {
    return (
            <div className="signup">
            <h3> Sign Up </h3>
            <form onSubmit={this.handleFormSubmit}>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />




                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
    );
  }

}

export default SignUp;
