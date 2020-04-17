import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

class ClassForm extends React.Component {
  const classes = useStyles();
  render() {
    return (
      <form className={this.classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Full Class Name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-secondary"
          label="Department (ex. ANTH)"
          variant="outlined"
          color="secondary"
        />
        <TextField
          required
          id="outlined-secondary"
          label="Number (ex. 111)"
          variant="outlined"
          color="secondary"
        />
        <TextField
          required
          id="outlined-secondary"
          label="Department (ex. ANTH)"
          variant="outlined"
          color="secondary"
        />
      </form>
    );
  }
}
