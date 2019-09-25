import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Update Your Skills
      </Typography>
      <Grid container spacing={1}>
      <Grid item xs={3} sm={3}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          label="Ruby"
        />
      </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="JavaScript"
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Python"
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Java"
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
      </Grid>
    </React.Fragment>
  );
}
