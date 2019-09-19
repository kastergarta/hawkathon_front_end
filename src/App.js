import React from 'react';
import './App.css';
import MailForm from './components/mailform.js';
import LogIn from './components/login.js';
import SignUp from './components/signup.js';
import Profile from './components/profile.js';


class App extends React.Component {
  render() {
    return (
      <div>
          < MailForm/>
          < LogIn />
          < SignUp />
          < Profile />
      </div>
    );
  };
}

export default App;
