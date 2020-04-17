import React from 'react';

import './ClassList.css';

import Class from '../Class/Class';

class ClassList extends React.Component {
  render() {
    return (
      <div>
        <Class name="Math"/>
        <Class name="Art"/>
      </div>
    );
  }
};

export default ClassList;
