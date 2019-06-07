import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios'

class Search extends Component{
    state = {
        pokeSearch: '',
        onCall: true,
        data: {}
    }
    searchPoke = () => {
        this.setState({
            onCall: true
        })
        var self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase()).then(res => {
            // console.log(res.data);
            self.setState({
                data: res.data,
                onCall: false
            })
        }).catch(err => {
            console.log(err);
        })
    }

    renderBody = () => {
        if (this.state.onCall){
            return(
                <PokeLoader />
            )
        } else {
            return(
                <SearchBody data={this.state.data}/>
            )
        }
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Header tit searchBar rounded >
                    <Item>
                        <Icon name='ios-search' onPress={() => this.searchPoke()}/>
                        <Input value={this.state.pokeSearch} placeholder={'Search for a Pokemon'} onChangeText={(text) => this.setState({pokeSearch: text})}/>
                    </Item>
                </Header>
                {this.renderBody()}
            </View>
        )
    }
}

export default Search;