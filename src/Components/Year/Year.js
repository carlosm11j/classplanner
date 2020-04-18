import React from 'react';

import './Year.css';

import CourseList from '../CourseList/CourseList';

class Year extends React.Component {
  render() {
    return (
      <div className="Year-box">
        <h2 className="Year-title">Year {this.props.id}</h2>
        <div className="Course-list">
          <CourseList />
        </div>
      </div>
    );
  }
};

export default Year;
