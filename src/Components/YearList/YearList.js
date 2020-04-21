import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Year from '../Year/Year';
import CourseForm from '../CourseForm/CourseForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function YearList() {
  const classes = useStyles();
  const [spacing] = React.useState(6);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item md={12}>
        <Grid container justify="center" spacing={spacing}>
          <Year />
        </Grid>
      </Grid>
    </Grid>
  );
}
