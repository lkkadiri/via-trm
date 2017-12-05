import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import _ from 'lodash';

const defaultTileColor = 'rgba(234, 215, 215, 0.14902)';
const selectedTileColor = 'rgba(143, 204, 214, 0.92)';
const midTileColor = 'rgba(14, 11, 11, 0.14902)';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 200,
    overflowY: 'auto',
  },
  titleStyle: {
    color: 'rgb(121, 111, 111)',
    textAlign: 'center'
  },
  subHStyle: {
    textAlign: 'left',
    paddingTop: 20
  }
};


const tilesData = [];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default class MonthGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: null,
      clickCount: 0,
      month1: null,
      month2: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount(){
    let yrCt = 1;
    this.props.years.forEach((yr) => {
      _.each(months, (value, key) => {
        let month = {};
        month.key = yrCt;
        month.title = value;
        month.color = defaultTileColor;
        tilesData.push(month);
        yrCt++;
     });

    })
    this.setState({months: tilesData})
  }

  handleSelect = async (key) => {
    await this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1
    }));

    // Set the month1
    if(this.state.clickCount === 1){
      await this.setState({
        month1: key
      })
    }else if(this.state.clickCount === 2){
      // Grey out the months in between
      await this.setState({
        month2: key
      })
      let month1 = this.state.month1;
      let month2 = this.state.month2;

      if(month2 < month1){
        let t = month2;
        month2 = month1;
        month1 = t;
      }

      for(let i = month1 + 1; i < month2; i++){
        let monthBtw = _.find(tilesData, {key:i});
        monthBtw.color = midTileColor;
        await this.setState((prevState) => ({
          months: tilesData
        }));
      }
    }else if(this.state.clickCount === 3){
      _.map(tilesData, (month) => {
          month.color = defaultTileColor;
      })
      this.setState((prevState) => ({
        clickCount: 1,
        month1: key,
        months: tilesData
      }));
    }

    let month = _.find(tilesData, {key:key});
    if(month.color === defaultTileColor){
      month.color = selectedTileColor;
    }else{
      month.color = defaultTileColor;
    }
    this.setState((prevState) => ({
      months: tilesData
    }));
  }

  render() {
    return (
      <div style={styles.root}>
        {_.chunk(this.state.months, 12).map((months, index) => (
          <GridList
            cols={6}
            cellHeight={'auto'}
            style={styles.gridList}
          >
            <Subheader style={styles.subHStyle}>{this.props.years[index]}</Subheader>
            {months.map((tile) => (
              <GridTile
                id={tile.key}
                key={tile.key}
                title={tile.title}
                titleStyle={styles.titleStyle}
                titleBackground={tile.color}
                onClick={() => {this.handleSelect(tile.key)}}
              >
              </GridTile>
            ))}
          </GridList>

        ))}
      </div>
    );
  }
}
