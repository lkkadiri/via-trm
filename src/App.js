import React, { Component } from 'react';
import './App.css';
import MonthGrid from './MonthGrid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';

class App extends Component {
  render() {
    let years = _.range(2017, 2021, 1);
    return (
      <div className="App">
        <MuiThemeProvider>
          <MonthGrid years={years}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
