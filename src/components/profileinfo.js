import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(4),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

export default function ProfileInfo() {
  const classes = useStyles();

  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [skills, setSkills] = React.useState('');

  const [teamPlayer, setTeamPlayer] = React.useState(0);
  const [communication, setCommunication] = React.useState(0);
  const [patience, setPatience] = React.useState(0);
  const [creativity, setCreativity] = React.useState(0);
  const [projectManagement, setProjectManagement] = React.useState(0);
  const [adaptability, setAdaptability] = React.useState(0);

  let skillsArray = skills.split(".")
  let skillsArrayDiv = skillsArray.map(e => {
    return <Button variant="outlined" color="primary" className={classes.button}> {e} </Button>;
  })


  const fetchProfile = () => {

    console.log(localStorage.jwt)
    if (localStorage.jwt === undefined) {
      return;
    }

    fetch('http://localhost:3003/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.jwt}`
      }
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setId(data.user.id);
      setName(data.user.name);
      setEmail(data.user.email);
      setLocation(data.user.location);
      setSkills(data.user.skills);

      setTeamPlayer(data.user.teamplayer);
      setCommunication(data.user.communication);
      setPatience(data.user.patience);
      setCreativity(data.user.creativity);
      setProjectManagement(data.user.projectmanagement);
      setAdaptability(data.user.adaptability);

    }
    );

  };

  useEffect(fetchProfile, []);


  return (
    <div>
      <div>
        <Badge className={classes.margin} badgeContent={name} color="primary">
          <AccountCircleOutlinedIcon />
        </Badge>

        <Badge className={classes.margin} badgeContent={email} color="primary">
          <MailOutlineOutlinedIcon />
        </Badge>

        <Badge className={classes.margin} badgeContent={location} color="primary">
          <LocationOnOutlinedIcon />
        </Badge>
        </div>
        <div>
         <h4> Your Technical Skills:</h4>
        </div>

      <div className="techskills">
        {skillsArrayDiv}
      </div>

      <div>
       <h4> Your Soft Skills:</h4>
      </div>

      <Badge color="primary" badgeContent={adaptability} className={classes.margin}>
        <Typography className={classes.padding}>Adaptability</Typography>
      </Badge>

      <Badge color="primary" badgeContent={communication} className={classes.margin}>
        <Typography className={classes.padding}>Communication</Typography>
      </Badge>

      <Badge color="primary" badgeContent={creativity} className={classes.margin}>
        <Typography className={classes.padding}>Creativity</Typography>
      </Badge>

      <Badge color="primary" badgeContent={patience} className={classes.margin}>
        <Typography className={classes.padding}>Patience</Typography>
      </Badge>

      <Badge color="primary" badgeContent={projectManagement} className={classes.margin}>
        <Typography className={classes.padding}>Project Management</Typography>
      </Badge>

      <Badge color="primary" badgeContent={teamPlayer} className={classes.margin}>
        <Typography className={classes.padding}>Team Player</Typography>
      </Badge>
    </div>
  );
}
