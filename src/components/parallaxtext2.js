import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Register from './register2.js'
import Timer from "react-compound-timer"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ParallaxText (props) {

  const classes = useStyles();
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleRegisterOpen = () => {
    setOpenRegister(true);
  };

  const handleRegisterClose = () => {
    setOpenRegister(false);
  };


  if ([localStorage.length] != 2) {
    return (
      <div className="parallaxtext">
        <div id='parallax-text-text'>
          <p>
            Hawkathon aims to federate the next generation of hackers  for the New York innovation community. We believe that by empowering students to realize their ideas and form bonds with each other and our city, we can impact the future of technology and the community
          </p>
        </div>

        <div className="timer">
              <Timer
          initialTime={5500000000}
          direction="backward"
        >
          {() => (
              <React.Fragment>
                  <Timer.Days /> days
                  <Timer.Hours /> hours
                  <Timer.Seconds /> seconds
              </React.Fragment>
          )}
        </Timer>
        </div>

      <div id='parallax-text-button'>
        <button className='btn-grad' onClick={handleRegisterOpen}> REGISTER </button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openRegister}
          onClose={handleRegisterClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >

          <Fade in={openRegister}>
            <div className={classes.paper}>
             <Register handleStateChange={props.handleStateChange}/>
            </div>
          </Fade>
        </Modal>

      </div>
    </div>

    );
  } else {
    return (
      <div className="parallaxtext">
        <div id='parallax-text-text'> <p> Hawkathon aims to federate the next generation of hackers  for the New York innovation community. We believe that by empowering students to realize their ideas and form bonds with each other and our city, we can impact the future of technology and the community</p> </div>
        <div className="timer">
              <Timer
          initialTime={5500000000}
          direction="backward"
        >
          {() => (
              <React.Fragment>
                  <Timer.Days /> days
                  <Timer.Hours /> hours
                  <Timer.Seconds /> seconds
              </React.Fragment>
          )}
        </Timer>
        </div>
      </div>

    );
  };

  // return (
  //   <div className="parallaxtext">
  //     <div id='parallax-text-text'> <p> Hawkathon aims to federate the next generation of hackers  for the New York innovation community. We believe that by empowering students to realize their ideas and form bonds with each other and our city, we can impact the future of technology and the community</p> </div>
  //     <div id='parallax-text-button'>
  //       <button className='btn-grad' onClick={handleRegisterOpen}> REGISTER </button>
  //
  //       <Modal
  //         aria-labelledby="transition-modal-title"
  //         aria-describedby="transition-modal-description"
  //         className={classes.modal}
  //         open={openRegister}
  //         onClose={handleRegisterClose}
  //         closeAfterTransition
  //         BackdropComponent={Backdrop}
  //         BackdropProps={{
  //           timeout: 500,
  //         }}
  //       >
  //
  //         <Fade in={openRegister}>
  //           <div className={classes.paper}>
  //            <Register handleStateChange={props.handleStateChange}/>
  //           </div>
  //         </Fade>
  //       </Modal>
  //
  //     </div>
  //   </div>
  // );
}
