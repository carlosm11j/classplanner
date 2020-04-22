import React from 'react';

import './Year.css';

import CourseList from '../CourseList/CourseList';
import CourseForm from '../CourseForm/CourseForm';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    maxWidth: 360,
    height: 400,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Year(props) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} elevation={6}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            Year {props.id}
          </Typography>
          <Divider />
          <CourseList />
          <CourseForm />
        </CardContent>
      </Card>
    </Grid>
  );
}
