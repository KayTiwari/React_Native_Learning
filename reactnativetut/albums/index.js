/**
 * @format
 */
// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'



//Create a component
const App = () => {
    return (
        <View style={{flex: 1}}>
        <Header word={'Albums'} />
        <AlbumList />
        </View>
    );
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App)