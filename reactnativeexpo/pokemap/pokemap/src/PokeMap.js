import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { Header, Left, Button, Icon, Body, Title, Right, Fab } from 'native-base';
import { MapView } from 'expo';
import Meteor, { createContainer, withTracker } from 'react-native-meteor';


let mapStyle = [{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#f1ffb8"},{"weight":"2.29"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#a1f199"}]},{"featureType":"landscape.man_made","elementType":"labels.text","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#37bda2"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#37bda2"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#afa0a0"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#f1ffb8"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#e4dfd9"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#37bda2"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#84b09e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#fafeb8"},{"weight":"1.25"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#f1ffb8"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f1ffb8"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#f1ffb8"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f1ffb8"},{"weight":"1.48"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#5ddad6"}]}];
class PokeMap extends Component{
    state = {
        location: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },

    }
    recordEvent = (x) => {
        this.setState({
            location: x
        })
    }

    renderPokemon = () => {
        return this.props.pokemon.map(p => {return (<MapView.Marker
        coordinate={{latitude: p.latitude, longitude: p.longitude}}
        key={p._id}
        //meteor gives id to every piece in the collection
        >
        <Image source={{uri: "http://localhost:3000/"+p.image}} style={{height: 50, width: 50}}/>
        </MapView.Marker>)})
    }

    addPokemon = () => {
        Meteor.call('pokemon.add', this.state.location, (err, res) => {
            console.log('add function', err, res);
        })
    }

    removePokemon = () => {
        if (this.props.pokemon.length === 0){
            return;
        } else {
        var remove = this.props.pokemon[0]._id;
        Meteor.call('pokemon.subtract', remove, (err, res)=> {
            console.log('remove function', err, res)
        })
    }
    }

    logOut = () => {
        Meteor.logout();
        this.props.flipLogin(false);
    }

    render(){
        // console.log(this.props.pokemon)
        return(
            <View style={{flex: 1}}>
                <Header>
                    <Left>
                    </Left>
                    <Body>
                        <Title>PokeMap</Title>
                    </Body>
                    <Right>
                        <Button onPress={() => this.logOut()} transparent>
                            <Icon name='power'/>
                        </Button>
                    </Right>
                </Header>
                <MapView style={{flex: 1}}
                initialRegion={this.state.location}
                provider={MapView.PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                onRegionChangeComplete={(x) => this.recordEvent(x)}
                >
                {this.renderPokemon()}
                </MapView>
                <Fab direction='left' position='bottomRight'  onPress={() =>this.addPokemon()}>
                <Icon name='add' />
                </Fab>
                <Fab direction='right' position='bottomLeft' onPress={() =>this.removePokemon()}>
                <Icon name='remove' />
                </Fab>
            </View>
        )
    }
}

export default createContainer(params => {
    Meteor.subscribe('pokemon');
    return{pokemon: Meteor.collection('pokemon').find({})};
    //look through the pokemon collection and find the string we're looking for
}, PokeMap);