import React from 'react';
import { ScrollView, View, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { ListItem, List } from 'native-base'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class SearchBody extends React.Component{
    state = {

    }
    render(props){
        var pokemon = this.props.data;
        if (!pokemon){
            return(
                <View></View>
            )
        } else {
        return(
            <ImageBackground style={styles.backgroundImage} source={{uri: 'https://pokemongolive.com/img/posts/raids_loading.png'}}>
                <ScrollView style={{flex: 1}}>
                    <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image source={{uri: pokemon.sprites.front_default}} style={styles.image}/>
                    </View>

                    <View style={styles.info}>
                            <ListItem itemDivider={true}>
                                <Text style={{fontWeight: 'bold'}}>Size</Text>
                            </ListItem>
                            <ListItem itemDivider={true}>
                                <Text >Weight - {pokemon.weight}kg</Text>
                            </ListItem>
                            <ListItem itemDivider={true}>
                                <Text >Height - {pokemon.height/10}m</Text>
                            </ListItem>

                            <ListItem itemDivider={true}>
                                <Text style={{fontWeight: 'bold'}}>Abilities</Text>
                            </ListItem>
                            <List dataArray={pokemon.abilities} renderRow={(item) => 
                            <ListItem itemDivider={true}>
                                <Text >{item.ability.name}</Text>
                            </ListItem>}>
                            </List>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
        }
    }
}
const styles = {
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    image: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: .8
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: height,
        width: width
    }
}

export default SearchBody;