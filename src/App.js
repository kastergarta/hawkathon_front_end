import React from 'react';
import './App.css';

import ButtonAppBar from './components/navbar.js';
import NavTabs from './components/tabs.js';
import Sponsors from './components/sponsors.js';
import JudgesCard from './components/judgescard.js';
import SimpleExpansionPanel from './components/expansionpanels.js';
import Parallax from './components/parallax.js';
import Footer from './components/footer.js';
import Donate from './components/donate.js';
import JumpExample from './components/fadejudges.js';
import JumpFAQ from './components/fadefaq.js';

// import SimpleSnackbar from './components/simplesnackbar.js'

class App extends React.Component {

componentDidMount(){
  console.log("Mount!");
  if ([localStorage.length] == 2) {
    this.setState ({
      userStatus: 'logedInUser'
    })
  } else if ([localStorage.length] === 0){
    this.setState ({
      userStatus: 'newUser'
    })
  } else {
    this.setState ({
      userStatus: 'newUser'
    })
  };
}

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
          <ButtonAppBar position="sticky" userStatus={this.state.userStatus} handleStateChange={this.handleStateChange} handleLogOutChange={this.handleLogOutChange} handleStillLogedIn={this.handleStillLogedIn}/>
          <Parallax />
          <NavTabs />
          <Donate />
          <Sponsors />
          <JumpExample />
          <JudgesCard />
          <JumpFAQ />
          <SimpleExpansionPanel />
          <Footer />
      </div>
    );
  };
}

export default App;
