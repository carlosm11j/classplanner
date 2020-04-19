import React from 'react';

class Course extends React.Component {
  render() {
    return (
      <div className="Course">
        <h4 className="Course-name">{this.props.name}</h4>
      </div>
    );
  }
};

export default Course;
