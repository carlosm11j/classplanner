import React from 'react';

import YearList from '../YearList/YearList';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                classPlanner
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="App">
          <YearList />
        </div>
      </div>
    );
};
