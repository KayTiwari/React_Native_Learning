import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { Button } from 'native-base';
var myBackground = require('../assets/landing.jpg');

class Landing extends Component{
    state = {

    }

    render(){
        return(
        <View>
            <ImageBackground source={myBackground} >
            <View style={styles.viewStyles}>
                <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
                <Button
                block={true}
                style={styles.buttonStyle}
                onPress={() => this.props.switchScreen('search')}
                >
                <Text style={styles.buttonText}>Start Searching</Text> 
                </Button>
            </View>
            </ImageBackground>
        </View>
        )
    }
}
const styles = {
    container: {
      flex: 1,
      marginTop: Platform.OS === "android" ? 24 : 20
    },
    viewStyles: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleStyle: {
      fontSize: 30,
      color: 'blue',
      alignItems: 'center',
    },
    buttonStyle: {
      margin: 10
    },
    buttonText: {
      color: 'white'
    }
  };

export default Landing;