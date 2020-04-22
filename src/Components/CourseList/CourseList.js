import React from 'react';

import DisplayCourse from '../DisplayCourse/DisplayCourse';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const courseList = [];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function CourseList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {['Fall', 'Winter', 'Spring', 'Summer'].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{sectionId}</ListSubheader>
              <ListItem button>
                <ListItemText primary={'Math'} />
              </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
}
