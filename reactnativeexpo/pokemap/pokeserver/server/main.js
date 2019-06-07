import { Meteor } from 'meteor/meteor';
import {Pokemon} from '../imports/collections/pokemon';
//needs braces
var fs = Npm.require('fs')
//add filesystem methods

Meteor.startup(() => {
  
});

Meteor.methods({
    //creating methods 
    'pokemon.add': function(loc){
        var user = this.userId;
        //checks if user is signed in
        if (!user) {
            //if no user is logged
            console.log('user not signed in')
            return;
        }
        console.log('adding pokemon')
        var range = 0.035;
        var range1 = Math.random() > 0.5 ? range : -range;
        var range2 = Math.random() > 0.5 ? range : -range;
        var long = loc.longitude;
        long = long + Math.random() * (range1);
        //set random longitude point
        var lat = loc.latitude;
        lat = lat + Math.random() * (range2);
        //set random latitude point

        var iconPath= process.env.PWD + '/public';
        //go through this file path for icons
        var icons = fs.readdirSync(iconPath);
        //an icon is pulled from a filesystem -> going through that icon path

        var min = Math.ceil(0);
        var max = Math.ceil(250);
        //set min and maxes
        var random = Math.floor(Math.random() * (max-min))+min;
        //basic function for return a random number between 2 points

        return Pokemon.insert({image: icons[random], longitude: long, latitude: lat},);
    },

    'pokemon.subtract': function(x){
        if (!user){
            console.log('user not signed in');
            return;
        }
    }
})