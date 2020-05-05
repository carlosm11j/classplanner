import React from 'react';

import './YearList.css';
import Year from '../Year/Year';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

class YearList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yearCount: 2,
      years: [<Year id={1}/>],
    };

    this.addNewYear = this.addNewYear.bind(this);
  }

  addNewYear(event) {
    const years = this.state.years;
    this.setState({yearCount: this.state.yearCount + 1});
    this.setState({
       years: years.concat(<Year id={this.state.yearCount} />)
    });
  }

  render() {
    return (
      <Grid container className="Year-list" spacing={2}>
        <Grid item md={12}>
          <Grid container justify="center" spacing={4}>
            {this.state.years}
            <IconButton className="add-button" edge="end" onClick={this.addNewYear}>
              <AddIcon color="black"/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default YearList;
