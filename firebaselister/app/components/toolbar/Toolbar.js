import React, {Component} from 'react';
import { View, Text, AppRegistry, StatusBar } from 'react-native';

class Toolbar extends Component{
    state = {

    }

    render(props){
        return(
            <View>
                {/* <StatusBar backgroundColor={'coral'} /> */}
                <View style={styles.navbar}>
                <Text style={styles.navbarTitle}>
                    {this.props.title}
                </Text>
                </View>
            </View>
        )
    }
}

export default Toolbar;

const styles = {
        navbar: {
            alignItems: 'center',
            backgroundColor: '#fff',
            borderBottomColor: '#eee',
            borderColor: 'transparent',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            height: 44,
            flexDirection: 'row'
        },
        navbarTitle: {
            color: '#444',
            fontSize: 16,
            fontWeight: '600'
        },
        toolbar: {
            backgroundColor: '#333',
            height: 22
        }
}

