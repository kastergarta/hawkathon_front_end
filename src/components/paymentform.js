import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function PaymentForm() {

const classes = useStyles();
const [skills, setSkills] = React.useState('');
const [id, setId] = React.useState('');
const [rubySkill, setRubySkill] = React.useState('');
const [javascriptSkill, setJavascriptSkill] = React.useState('');
const [pythonSkill, setPythonSkill] = React.useState('');
const [javaSkill, setJavaSkill] = React.useState('');

let newSkillsArray = [rubySkill, javascriptSkill, pythonSkill, javaSkill]
let cleanNewSkillsArray = newSkillsArray.filter(function (el) {return el});
let newSkillsString = cleanNewSkillsArray.join('.');

// useEffect(fetchProfile, []);
// ----------------------------------
const fetchProfile = () => {

  console.log(localStorage.jwt)
  if (localStorage.jwt === undefined) {
    return;
  }

  fetch('http://localhost:3001/profile',{
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
// ----------------------------------
const handleFormSubmit = (e) => {
  console.log(newSkillsString)

  e.preventDefault();

  fetch(`http://localhost:3001/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.jwt}`
    },
    body: JSON.stringify({skills: newSkillsString})
  })
  .then(res => res.json())
  .then(console.log)
};
// ----------------------------------

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Update Your Skills
      </Typography>
      <Grid container spacing={1}>
      <Grid item xs={3} sm={3}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="Ruby" />}
          label="Ruby"
          onChange={e => setRubySkill(e.target.value)}
        />
      </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="JavaScript" />}
            label="JavaScript"
            onChange={e => setJavascriptSkill(e.target.value)}
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="Python" />}
            label="Python"
            onChange={e => setPythonSkill(e.target.value)}
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="Java" />}
            label="Java"
            onChange={e => setJavaSkill(e.target.value)}
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="React"
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Angular"
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="C++"
          />
        </Grid>
          <Grid item xs={3} sm={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="CSS"
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="R"
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Rust"
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="GraphQl"
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Kotlin"
            />
          </Grid>
          <Button className={classes.button} onClick={handleFormSubmit}>SAVE</Button>
      </Grid>
    </React.Fragment>
  );
}
