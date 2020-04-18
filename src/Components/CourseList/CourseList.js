import React from 'react';

import './CourseList.css';

import CoursePreview from '../CoursePreview/CoursePreview';

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
