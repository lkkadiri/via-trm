import React, { Component } from 'react';
import './App.css';
import MonthGrid from './MonthGrid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

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
            <div>
              <h2 style={styles.headline}>Countries Form</h2>
              <p>
                Nothing to see here.
              </p>
            </div>
          </Tab>
        </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
