import React from 'react';

import './Year.css';

import CourseList from '../CourseList/CourseList';

class Year extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
     document.getElementById('Year').setAttribute("class", "FullYear");
  }

  render() {
    return (
      <div className="Year">
        <Paper></Paper>
      </div>
    );
  }
};

export default Year;
