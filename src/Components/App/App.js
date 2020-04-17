import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //Set up state of app
    this.state = {
      user: 'Carlos'
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
          <YearList />
        </div>
      </div>
    );
  }
}

export default App;
