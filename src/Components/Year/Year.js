import React from 'react';

import './Year.css';

import ClassList from '../ClassList/ClassList';

class Year extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1
    };
  }

  render() {
    return (
      <div className="Year">
        <h2>Year {this.props.id}</h2>
        <div className="Class-list">
          <ClassList />
        </div>
      </div>
    );
  }
};

export default Year;
