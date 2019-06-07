import React, {Component} from 'react';
import { View, Text, Image, Dimensions, ImageBackground } from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const background = require('../assets/landing.jpg')

class SignIn extends Component{
    state = {
        email: '',
        password: ''
    }

    logIn = () => {
        // console.log(this.state)
        const {email, password} = this.state;
        this.props.signIn(email, password);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={background} style={styles.landingimage}>
                    <View style={styles.inputStyle}>
                        <Form>
                            <Item floatingLabel>
                                <Label>E-mail</Label>
                                <Input autoCorrect={false} onChangeText={(text) => this.setState({email: text})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input autoCorrect={false} secureTextEntry onChangeText={(password) => this.setState({password})}/>
                            </Item>
                        </Form>
                        <View style={{marginTop: 10}}>
                            <Button primary block onPress={() => this.logIn()}>
                                <Text style={{color: 'white', fontWeight:"bold"}}>Sign-In/Sign-Up</Text>
                            </Button>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
export default SignIn;

const styles = {
    landingimage: {
        height: height,
        width: width,
        flex: 1,
        resizeMode: 'cover'
    },
    inputStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10
    }
}
