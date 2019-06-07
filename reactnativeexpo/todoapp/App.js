import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class App extends Component {
  state = {
    todo: 'message'
  }

  render(){
    return(
      <View style={styles.viewStyles}>
        <Text>fuck you</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({todo: text})}
        />
        <Button 
        title='Add Todo'
        />
        <Text>{this.state.todo}</Text>
      </View>
    )
  }

}

export default App;

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: '50%'
  }
})