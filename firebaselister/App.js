
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, TouchableHighlight} from 'react-native';
import Toolbar from './app/components/toolbar/Toolbar';
const styles = require('./app/style');


class App extends Component {
  constructor(){
  super();

  let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
  this.state = {
    itemDataSource: ds
  }
}
  componentWillMount(){
    this.getItems();
  }

  componentDidMount(){
    this.getItems();
  }

  getItems(){
    let items = [{title: 'Item One'}, {title: 'Item Two'}];
    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(items)
    })
  }

  renderRow = (item) => {
    return (
      <TouchableHighlight onPress={() => {this.pressRow(item)}}>
      <View style={styles.li}>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar title={'ItemLister'}/>
        <ListView dataSource={this.state.itemDataSource} renderRow={this.renderRow} />
        <Text>'Item Lister'</Text>
      </View>
    );
  }
}

export default App;