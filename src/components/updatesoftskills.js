import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: 450,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function UpdateSoftSkills() {
  const classes = useStyles();
  const [id, setId] = React.useState('');


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
    }
    );

  };

  useEffect(fetchProfile, []);

  const [teamPlayer, setTeamPlayer] = React.useState(0);
  const [communication, setCommunication] = React.useState(0);
  const [patience, setPatience] = React.useState(0);
  const [creativity, setCreativity] = React.useState(0);
  const [projectManagement, setProjectManagement] = React.useState(0);
  const [adaptability, setAdaptability] = React.useState(0);

  const handleFormSubmit = (e) => {
    console.log(teamPlayer)

    e.preventDefault();

    fetch(`http://localhost:3003/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.jwt}`
      },
      body: JSON.stringify({teamplayer: teamPlayer, communication: communication, patience: patience, creativity: creativity, projectmanagement: projectManagement, adaptability: adaptability})
    })
    .then(res => res.json())
    .then(console.log)
  };

  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Update Your Social Skills
    </Typography>
      <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <div className={classes.root}>
              <Typography id="discrete-slider" gutterBottom>
                Team Player
              </Typography>
              <Slider

                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
                value={teamPlayer}
                onChange={(e, value) => setTeamPlayer(value)}
              />
            </div>
        </Grid>

          <Grid item xs={6} sm={6}>
            <div className={classes.root}>
              <Typography id="discrete-slider" gutterBottom>
                Communication
              </Typography>
              <Slider
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
                value={communication}
                onChange={(e, value) => setCommunication(value)}
              />
            </div>
        </Grid>

          <Grid item xs={6} sm={6}>
            <div className={classes.root}>
              <Typography id="discrete-slider" gutterBottom>
                Patience
              </Typography>
              <Slider
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
                value={patience}
                onChange={(e, value) => setPatience(value)}
              />
            </div>
         </Grid>

        <Grid item xs={6} sm={6}>
          <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
              Creativity
            </Typography>
            <Slider
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              value={creativity}
              onChange={(e, value) => setCreativity(value)}
            />
          </div>
        </Grid>

        <Grid item xs={6} sm={6}>
          <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
              Project Management
            </Typography>
            <Slider
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              value={projectManagement}
              onChange={(e, value) => setProjectManagement(value)}
            />
          </div>
        </Grid>

        <Grid item xs={6} sm={6}>
          <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
              Adaptability
            </Typography>
            <Slider
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              value={adaptability}
              onChange={(e, value) => setAdaptability(value)}
            />
          </div>
        </Grid>
        <Button variant="contained" color="secondary" className={classes.button} className={classes.button} onClick={handleFormSubmit}>SAVE</Button>
      </Grid>
    </React.Fragment>
  );
}
