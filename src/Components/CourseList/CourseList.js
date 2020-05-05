import React from 'react';

import './CourseList.css';

import DisplayCourse from '../DisplayCourse/DisplayCourse';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const courseList = [];

class CourseList extends React.Component {
  render() {
    return (
      <List className="root">
        {['Fall', 'Winter', 'Spring', 'Summer'].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{sectionId}</ListSubheader>
                <ListItem button>
                  <ListItemText primary={'Math'} />
                  <ListItemText primary={'Math'} />
                  <ListItemText primary={'Math'} />
                </ListItem>
            </ul>
          </li>
        ))}
      </List>
    );
  }
}

export default CourseList;
