import React from 'react';
import './YearList.css';

import Year from '../Year/Year';

class YearList extends React.Component {
  render() {
    return (
      <div className="YearList">
        <Year id={1}/>
        <Year id={2}/>
      </div>
    );
  }
};

export default YearList;
