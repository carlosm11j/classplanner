import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const terms = [
  {
    value: 'fall',
    label: 'Fall',
  },
  {
    value: 'winter',
    label: 'Winter',
  },
  {
    value: 'spring',
    label: 'Spring',
  },
  {
    value: 'summer',
    label: 'Summer',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '50ch',
      display: 'flex',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [term, setTerm] = React.useState('Fall');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddIcon color="black"/>
      </IconButton>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <h2>New Course</h2>
              <TextField
                id="term"
                select
                label="Term"
                value={term}
                onChange={handleChange}
              >
                {terms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="full-course-name"
                label="Full Course Name"
                fullWidth
                placeholder="ex. Calculus IV"
                color="secondary"
              />
              <TextField
                required
                id="department"
                label="Department"
                placeholder="ex. MATH"
                color="secondary"
              />
              <TextField
                required
                id="number"
                label="Number"
                placeholder="ex. 14"
                color="secondary"
              />
              <TextField
                required
                id="unites"
                label="Units"
                type="number"
                color="secondary"
              />
              <TextField
                id="standard-multiline-static"
                label="Notes"
                multiline
                rows={4}
                placeholder="Professor, Time, etc"
              />
            <Button variant="outlined" onClick={handleClose} color="primary">Submit</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
