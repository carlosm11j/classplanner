import React from 'react';

import './Class.css';

class Class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      department: 'COEN',
      number: '111',
      units: 4
    };
  }

  render() {
    return (
      <div className="Class">
        <h4 className="classname">{this.state.name}</h4>
      </div>

    );
  }
};

export default Class;
