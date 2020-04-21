import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      term: '',
      department: '',
      number: '',
      notes: ''
    }
  }
  render() {
    return (
      <div className="Course">
        <ListItem button>
          <ListItemText primary={'Math'} term={this.state.term}/>
        </ListItem>
      </div>
    );
  }
};

export default Course;
