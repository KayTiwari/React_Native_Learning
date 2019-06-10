
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, TouchableHighlight} from 'react-native';
import Toolbar from './app/components/toolbar/Toolbar';
import firebase from 'firebase'
// import console = require('console');
// const styles = require('./app/style');


var firebaseConfig = {
  apiKey: "AIzaSyCAPXSzvjNBDh3S-mq3TevONizIrPBnO10",
  authDomain: "itemlister-f2d76.firebaseapp.com",
  databaseURL: "https://itemlister-f2d76.firebaseio.com",
  projectId: "itemlister-f2d76",
  storageBucket: "itemlister-f2d76.appspot.com",
  messagingSenderId: "543964461647",
  appId: "1:543964461647:web:39f7aa36abc57796"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

class App extends Component {
  constructor(){
  super();

  let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
  this.state = {
    itemDataSource: ds
  }
  this.itemsRef = this.getRef().child('items');
  this.renderRow = this.renderRow.bind(this);
  this.pressRow = this.renderRow.bind(this);
}

  getRef = () => {
    return firebaseApp.database().ref();
  }

  componentWillMount(){
    // firebase.initializeApp(firebaseConfig);
    this.getItems(this.itemsRef);
  }

  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  getItems = (itemsRef) => {
    // let items = [{title: 'Item One'}, {title: 'Item Two'}];
    itemsRef.on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        })
      })
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      })
    })
  }

  pressRow = (item) => {
    console.log(item)
  }

  renderRow = (item) => {
    return (
      <TouchableHighlight onPress={() => {this.pressRow(item)}}>
      <View style={styles.li}>
      <Text style={styles.liText}>{item.title}</Text>
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

const styles = {
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  listview: {
    flex: 1
  },
  li: {
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBotton: 16
  }
}