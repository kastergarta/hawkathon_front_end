import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as emailjs from 'emailjs-com'

function App() {

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: '<YOUR_EMAIL_ID>',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_XXXXXXXX',
       templateParams,
      'user_XXXXXXXXXXXXXXXXXXXX'
     )
     this.resetForm()
 }

  return (
    <div className="App">
    <form id="contact-form">
      <input type="hidden" name="contact_number"/>
      <label>Name</label>
      <input type="text" name="user_name"/>
      <label>Email</label>
      <input type="email" name="user_email"/>
      <label>Message</label>
      <textarea name="message"></textarea>
      <input type="submit" value="Send"/>
  </form>
    </div>
  );
}

export default App;
