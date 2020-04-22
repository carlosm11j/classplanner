import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Year from '../Year/Year';
import CourseForm from '../CourseForm/CourseForm';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

let yearCount = 1;
let years = [<Year id={yearCount}/>];

export default function YearList() {
  const classes = useStyles();
  const [spacing] = React.useState(6);

  const addNewYear = (event) => {
    yearCount++;
    years = years.concat(<Year id={yearCount}/>);
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item md={12}>
        <Grid container justify="center" spacing={spacing}>
          {years}
          <IconButton className="add-button" onClick={addNewYear}>
            <AddIcon color="black"/>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
