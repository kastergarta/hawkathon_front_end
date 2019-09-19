import React from 'react';
import * as emailjs from 'emailjs-com';

class MailForm extends React.Component {

  state = {
    name: '',
    email: '',
    message: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let templateParams = {
      user_name: this.state.name,
      user_email: this.state.email,
      message_html: this.state.message,
     }

     emailjs.send(
      "hawkaton.us@gmail.com",
      'template_OztCtOOX',
       templateParams,
      'user_qkmMCvLoKG06KjZD3u8VY'
     )

   //   emailjs.send(
   //   "hawkaton.us@gmail.com",
   //   "template_OztCtOOX",
   //   {"from_name":"Dennis 2","to_name":"hyphaha@gmail.com","message_html":"hey!!!"},
   // 'user_qkmMCvLoKG06KjZD3u8VY')


     console.log("Hi, Randy!")
     this.resetForm()
 }

resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
  return (
    <div className="mailform">

        <h3>Send message!</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.name} type="text" name="name"/>
          <input onChange={this.handleChange} value={this.state.email} type="email" name="email"/>
          <input onChange={this.handleChange} value={this.state.message} type="text" name="message"/>
          <input type="submit" value="submit"/>
        </form>

    </div>
  );
 }
}

export default MailForm;
