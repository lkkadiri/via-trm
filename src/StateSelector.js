import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import statesUS from './us-states.json'

const styles = {
  container: {
    padding: 50
  }
}
const countries = ['United States', 'Canada', 'New Zealand', 'Australia', 'United Kingdom', 'Mexico'];

export default class SelectFieldExampleSimple extends Component {
  state = {
    country: null,
    stateUS: null
  };

  handleCountrySelection = (event, index, value) => {
    this.setState({country: value});
  }
  handleStateSelection = (event, index, value) => {
    this.setState({stateUS: value});
  }
  render(){
    let stateField;
    if(this.state.country === 0){
      stateField = <SelectField
                    floatingLabelText="State"
                    value={this.state.stateUS}
                    onChange={this.handleStateSelection}
                  >
                    {statesUS.map((stateUS, index) => (
                      <MenuItem key={stateUS.abbreviation} value={index} primaryText={stateUS.name} />
                    ))}
                  </SelectField>;
    }else{
      stateField = <TextField floatingLabelText="State"/>;
    }

    return (
      <div style={styles.container}>
        <SelectField
          floatingLabelText="Country"
          value={this.state.country}
          onChange={this.handleCountrySelection}
        >
          {countries.map((country, index) => (
            <MenuItem key={index} value={index} primaryText={country} />
          ))}
        </SelectField><br />
        <TextField
          floatingLabelText="City"
        /><br />
        {stateField}<br />
        <TextField
          floatingLabelText="Zip Code"
        /><br />
        <TextField
          floatingLabelText="Permanent Address"
        /><br />
        <TextField
          floatingLabelText="Permanent Address(Line 2)"
        /><br />
      </div>
    )
  }
}
