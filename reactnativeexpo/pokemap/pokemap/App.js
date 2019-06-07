import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import PokeMap from './src/PokeMap';

const SERVER_URL = 'ws://localhost:3000/websocket'
//defines meteor server


export default class App extends React.Component {
  state = {
    loggedIn: false
  }
  componentWillMount(){
    Meteor.connect(SERVER_URL);
    //connects to meteor server
    console.log(Meteor.userId());
    if(Meteor.userId()){
      this.flipLogin(true);
    }
  }
  flipLogin = (x) => {
    this.setState({
      loggedIn: x
    })
  }

  renderView = () => {
    if (!this.state.loggedIn) {
      return (
        <SignIn signIn={this.signIn}/>
        )
      } else if(this.state.loggedIn) {
        // console.log('pokemap now');
        <PokeMap flipLogin={this.flipLogin} />
    }
  }

  signIn = (email, password) => {
    Meteor.loginWithPassword(email, password, (err, data)=> {
      //built in meteor function
      if (err){
        if(err.reason === 'User not found'){
          Accounts.createUser({email, password}, (err)=>{
            console.log(err);
          })
        }
      } else {
        // console.log('email');
        this.flipLogin(true);
      }
    });
    console.log(Meteor.userId());
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderView()}
        {/* <PokeMap flipLogin={this.flipLogin}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
