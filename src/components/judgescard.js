import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function JudgesCard() {
  const classes = useStyles();

  return (
    <div className="judges-card-container">

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://yt3.ggpht.com/a-/ACSszfGhAWak1RAXwrW2fPxz130hu6p1Z-cbDSULow=s900-mo-c-c0xffffffff-rj-k-no"
          title="Judge 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Randy Herasme
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.linkedin.com/in/hyeokjungkim/detail/photo/"
          title="Judge 2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Eric Kim
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/fit/c/256/256/0*tzG_Z0ZH2WdbonIh.jpg"
          title="Judge 3"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Annie Souza
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Judge 4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Graham Troyer-Joy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  );
}
