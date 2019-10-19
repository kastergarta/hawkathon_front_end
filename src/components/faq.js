import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FAQ() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={6} sm={6}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Who can participate in the hackathon?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            The Hackathon is open to anyone, but pre-registration is required. You can be a developer, designer, biz dev person, idea person, or anything in between.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item xs={6} sm={6}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What types of projects can hackathon teams work on?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Hackathon teams can work on any type of project (web apps, mobile apps, wearable solutions, data visualizations, algorithms, even video presentations or visual mock-ups) however all of the hackathon prizes are sponsored prizes for teams that best utilize sponsor technology. Most of these sponsor technologies are only relevant for web and mobile applications, and 95%+ of teams will end up building web and mobile applications.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item xs={6} sm={6}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How do I form a hackathon team?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            You can form a hackathon team before the hackathon (either with friends / co-workers or you can find team members on the Accelerate.im app). Most participants will find teams at the hackathon kick-off (Tuesday 10:00 AM) either by hearing idea pitches or by finding a project team to join on the Accelerate.im app. Only project admins can add team members via the application. The cut off to do this is Wednesday at 12:00 PM.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item xs={6} sm={6}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How do project teams get judged?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            When it comes to winning a sponsor’s prize, your team is responsible for demoing the project to the sponsor on Wednesday at the specified time (see schedule). Sponsors are solely responsible for choosing which teams win their prizes. You must visit a sponsors designated table to get judged.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item xs={6} sm={6}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Who owns the technology that hackathon teams produce?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            The teams that work on the projects own the project technologies, however ‘just being a team member’ at the hackathon does not mean that you get to own any code or IP that your teammates (or the audience) produce in the future based on the idea. Any ideas you pitch or share at the hackathon are released into the ‘public domain’ and we do not require attendees to sign non-disclosure agreements! It’s just a hackathon — if you’re worried about people stealing your startup idea — then this might not be the right place to unveil it.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

      <Grid item xs={6} sm={6}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Does the hackathon, its sponsors, or mentors provide any assistance to teams?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Almost all the sponsors are available to help you with your project (even if you’re not even using their technology!) You can contact the sponsors directly online through Accelerate.im. We will also have a list of mentors you can contact for specific help.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>

    </Grid>
    </div>
  );
}
