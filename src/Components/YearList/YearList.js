import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './YearList.css';

import Year from '../Year/Year';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

class YearList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [<Year yearCount={1} />],
      yearCount: 2
    }

    this.addNewYear = this.addNewYear.bind(this);
  }

  addNewYear(event) {
    const years = this.state.years;
    this.setState({
      years: years.concat(<Year yearCount={this.state.yearCount} />)
    });
    this.setState({yearCount: this.state.yearCount + 1});
  }

  render() {
    return (
      <div className="YearList">
        <Grid container
              direction="row"
              justify="center"
              alignItems="center">
          <Grid item xs={12}>
            <Paper>Maths</Paper>
            <Paper>Art</Paper>
            <Paper>Physics</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default YearList;
