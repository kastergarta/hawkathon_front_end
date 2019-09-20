import React from 'react';
import './App.css';
import MailForm from './components/mailform.js';

import SignUp from './components/signup.js';
import Profile from './components/profile.js';
import ButtonAppBar from './components/navbar.js';


class App extends React.Component {
  render() {
    return (
      <div>
          < ButtonAppBar />
          < MailForm/>
          < SignUp />
          < Profile />
      </div>
    );
  };
}

export default App;
