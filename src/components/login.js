import React from 'react';

class LogIn extends React.Component {

  state = {
    name: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.jwt) {
        localStorage.jwt = data.jwt
        console.log(this.props)
        this.props.handleStateChange();
      }
    })

  }


  render(){
  return (
    <div className="login">
    <h3>Log in please!</h3>
    <form onSubmit={this.handleLoginSubmit}>
      <input onChange={this.handleChange} value={this.state.name} type="text" name="name"/>
      <input onChange={this.handleChange} value={this.state.password} type="password" name="password"/>
      <input type="submit" value="Log in"/>
    </form>
    </div>
  );
 }
}

export default LogIn;
