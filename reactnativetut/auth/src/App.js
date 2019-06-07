import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm'



class App extends Component {

    state = {
        loggedIn: null,
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC0Xfz3qA33dg80pgnu5JR7Lc-Z1i2-uI0',
            authDomain: 'authenticationprac.firebaseapp.com',
            databaseURL: 'https://authenticationprac.firebaseio.com',
            projectId: 'authenticationprac',
            storageBucket: 'authenticationprac.appspot.com',
            messagingSenderId: '409600324634'
          })
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({
                    loggedIn: true
                })
            } else {
                this.setState({
                    loggedIn: false
                })
            }
        });
    }
    renderContent() {
        switch (this.state.loggedIn){
            case true:
                return (<Button style={{marginBottom: 50, marginTop: 50}} onPress={() => firebase.auth().signOut()}>Log Out</Button>)
            case false:
                return <LoginForm />
            default:
                return <Spinner size='large' />
        }
    }




    render() {
        return (
        <View>
            <Header text={'Wild5'}/>
            <CardSection>{this.renderContent()}</CardSection>
        </View>
        )
  }
}
export default App