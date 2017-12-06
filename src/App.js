import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';
import {Tabs, Tab} from 'material-ui/Tabs';
import MonthGrid from './MonthGrid';
import StateSelector from './StateSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    // Years to display in the month Selector - Range is set from 2017 - 2020
    let years = _.range(2017, 2021, 1);
    return (
      <div className="App">
        <MuiThemeProvider>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Month Selector" value="a">
            <MonthGrid years={years}/>
          </Tab>
          <Tab label="Countries Form" value="b">
            <StateSelector/>
          </Tab>
        </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
