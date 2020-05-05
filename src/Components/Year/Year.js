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
import Paper from '@material-ui/core/Paper';

class Year extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="root" item>
        <Card elevation={6}>
          <CardContent>
            <Typography className="title" color="textPrimary" gutterBottom>
              Year {this.props.id}
            </Typography>
            <Divider />
            <Paper className="courselist"><CourseList /></Paper>
            <Divider />
            <CourseForm year={this.props.id}/>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default Year;
