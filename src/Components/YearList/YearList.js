import React from 'react';
import './YearList.css';

import Year from '../Year/Year';

class YearList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [<Year id={1} />],
      yearCount: 2
    }

    this.addNewYear = this.addNewYear.bind(this);
  }

  addNewYear(event) {
    const years = this.state.years;
    this.setState({
      years: years.concat(<Year id={this.state.yearCount} />)
    });
    this.setState({yearCount: this.state.yearCount + 1});

  }

  render() {
    return (
      <div className="YearList">
        {this.state.years}
        <button onClick={this.addNewYear}><span className="addition"> + </span></button>
      </div>
    );
  }
};

export default YearList;
