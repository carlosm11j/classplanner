import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import Year from '../Year/Year';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function YearList() {
  const [spacing, setSpacing] = React.useState(6);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item md={12}>
        <Grid container justify="center" spacing={spacing}>
          <Year />
          <IconButton>
            <AddIcon color="black"/>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
