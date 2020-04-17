import React from 'react';

import './App.css';

import YearList from '../YearList/YearList';

class App extends React.Component {
  constructor(props) {
    super(props);
    //Set up state of app
    this.state = {
      user: 'Carlos',
      years: []
    };
  }

  addNewYear() {

  }

  render() {
    return (
      <div>
        <div className="banner">
          <h1 className="logo">classPlanner</h1>
          <h2 className="accountName">Welcome, <span className="username">{this.state.user}</span></h2>
        </div>
        <div className="App">
          <YearList years={this.state.years}/>
        </div>
      </div>
    );
  }
};

export default App;
