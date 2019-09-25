import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            id="name"
            name="name"
            label="Update Name"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Update Email"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="password"
            name="password"
            label="Update Password"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
