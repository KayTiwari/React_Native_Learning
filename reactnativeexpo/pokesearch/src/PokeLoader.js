import React from 'react';
import { View, Text, Image } from 'react-native';

class PokeLoader extends React.Component{
    state = {

    }
    render(){
        return(
            <View style={{flex: 1}}>
                <Image source={{uri:'https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif'}} style={styles.image}/>
            </View>
        )
    }
}

const styles = {
    image: {
        height: 400,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center'
    }
}


export default PokeLoader;