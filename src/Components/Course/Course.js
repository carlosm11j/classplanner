import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Course extends React.Component {
  render() {
    return (
      <div className="Course">
        <ListItem button>
          <ListItemText primary={'Math'} />
        </ListItem>
      </div>
    );
  }
};

export default Course;
