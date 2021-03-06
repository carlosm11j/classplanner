import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

export default function CourseForm(props) {
  const [open, setOpen] = React.useState(false);
  const [term, setTerm] = React.useState('Fall');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSave = (event) => {
    props.addCourse(event.target.value);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddIcon color="black"/>
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" TransitionComponent={Transition}
      keepMounted>
        <DialogTitle id="form-dialog-title">New course: Year {props.year}</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="term"
            select
            label="Term"
            value={term}
            onChange={handleChange}
            fullWidth
          >
            {terms.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="full-course-name"
            label="Full Course Name"
            fullWidth
            placeholder="ex. Calculus IV"
            color="secondary"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            required
            id="department"
            label="Department"
            placeholder="ex. MATH"
            color="secondary"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            required
            id="number"
            type="number"
            label="Number"
            placeholder="ex. 14"
            color="secondary"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            required
            id="units"
            label="Units"
            type="number"
            color="secondary"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="notes"
            label="Notes"
            multiline
            rows={4}
            placeholder="Professor, Time, Core Requirement, etc"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
