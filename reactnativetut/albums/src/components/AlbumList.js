import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios'



class AlbumList extends Component{
    constructor(){
        super();

        this.state = {
            albumdata: []
        }
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res =>{
            this.setState({
                albumdata: res.data
            })
            console.log(res);
        })
    }
    renderAlbums() {
        return this.state.albumdata.map((item, i) => 
        <AlbumDetail key={i} album={item}/>
        );
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
}
}

export default AlbumList