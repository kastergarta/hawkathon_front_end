import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import LogIn from './login.js';
import SignUp from './signup.js';
import Profile from './profile.js';

import SignIn from './login2.js'

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

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ButtonAppBar(props) {

  const classes = useStyles();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const handleRegisterOpen = () => {
    setOpenRegister(true);
  };

  const handleRegisterClose = () => {
    setOpenRegister(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    props.handleLogOutChange();
  };

  const handleProfileOpen = () => {
    setOpenProfile(true);
  };

  const handleProfileClose = () => {
    setOpenProfile(false);
  };

  switch (props.userStatus) {
    case 'newUser':
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              News
            </Typography>

            <Button color="inherit" onClick={handleLoginOpen}>Login</Button>
            <Button color="inherit" onClick={handleRegisterOpen}>Register</Button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openLogin}
              onClose={handleLoginClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >

            <Fade in={openLogin}>
              <div className={classes.paper}>
               <SignIn handleStateChange={props.handleStateChange}/>
              </div>
            </Fade>
          </Modal>

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
                 <SignUp />
                </div>
              </Fade>
            </Modal>

          </Toolbar>
        </AppBar>
      </div>
    );

    case 'logedInUser':
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              News
            </Typography>

            <Button color="inherit" onClick={handleLogOut}>LogOut</Button>
            <Button color="inherit" onClick={handleProfileOpen}>Profile</Button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openProfile}
              onClose={handleProfileClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >

            <Fade in={openProfile}>
              <div className={classes.paper}>
               <SignUp />
              </div>
            </Fade>
          </Modal>


          </Toolbar>
        </AppBar>
      </div>
    );
  };
}
