import React, {Component} from 'react';
import {Platform, 
    StyleSheet,
     Text,
      View,
      AppRegistry
    } from 'react-native';
import LoggedOut from './src/screen/LoggedOut'
export default class App extends Component {
    render() {
        return(
        <LoggedOut/>
        );
    }
}
