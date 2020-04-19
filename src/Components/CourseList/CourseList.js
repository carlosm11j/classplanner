import React from 'react';

import Course from '../Course/Course';

class CourseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };

  }

  render() {
    return (
      <div className="CourseList">
        {this.state.courses}
      </div>
    )
  }
};

export default CourseList;
