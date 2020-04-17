import React from 'react';
import './YearList.css';

import Year from '../Year/Year';

class YearList extends React.Component {
  render() {
    return (
      <div className="YearList">
        {
          this.props.years.map(year => {
            return <Year year={year} key={year.id} />
          })
        }
      </div>
    );
  }
}

export default YearList;
