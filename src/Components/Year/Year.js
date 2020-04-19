import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    maxWidth: 360,
    height: 400,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Year() {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} elevation={12}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Year
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
