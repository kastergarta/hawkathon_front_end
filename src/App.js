import React from 'react';
import './App.css';

import ButtonAppBar from './components/navbar.js';
import NavTabs from './components/tabs.js';
import Sponsors from './components/sponsors.js';
import Judges from './components/judges.js';
import JudgesCard from './components/judgescard.js';
import SimpleExpansionPanel from './components/expansionpanels.js';
import Parallax from './components/parallax.js';


class App extends React.Component {

state = {
  userStatus: 'newUser'
}

handleStateChange = () => {
  this.setState ({
    userStatus: 'logedInUser'
  })
}

handleLogOutChange = () => {
  this.setState ({
    userStatus: 'newUser'
  })
}

  render() {
    return (
      <div>
          <ButtonAppBar position="sticky" userStatus={this.state.userStatus} handleStateChange={this.handleStateChange} handleLogOutChange={this.handleLogOutChange}/>
          <Parallax />
          <NavTabs />
          <Sponsors />
          <Judges />
          <JudgesCard />
          <SimpleExpansionPanel />
      </div>
    );
  };
}

export default App;
