import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function AddressForm() {

  const classes = useStyles();

  const [id, setId] = React.useState('');

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [location, setLocation] = React.useState('');
  // ----------------------------------
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
      // setName(data.user.name);
      // setEmail(data.user.email);
      // setPassword(data.user.password);
    }
    );

  };

  useEffect(fetchProfile, []);
// -------------------------------------------
  const handleFormSubmit = (e) => {

    e.preventDefault();

    fetch(`http://localhost:3003/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.jwt}`
      },
      body: JSON.stringify({name: name, email: email, password: password})
    })
    .then(res => res.json())
    .then(console.log)
  };
  // -------------------------------------------
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        General info
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            id="name"
            name="name"
            label="Update Name"
            fullWidth
            value={name}
            autoComplete="billing address-line1"
            onChange={e => setName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Update Email"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="billing address-line2"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="location"
            name="location"
            label="Update Location"
            fullWidth
            value={location}
            onChange={e => setLocation(e.target.value)}
            autoComplete="billing address-line2"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="password"
            name="password"
            label="Update Password"
            fullWidth
            value={password}
            autoComplete="billing address-line2"
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>
          <Button variant="contained" color="secondary" className={classes.button} className={classes.button} onClick={handleFormSubmit}>SAVE</Button>
      </Grid>
    </React.Fragment>
  );
}
