import React, {Component} from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    ImageBackground,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import bg from '../Images/176.png'
export default class LoggedOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: 'null',
            user: 'null',
            email: 'null',
            password: 'null'
        };
    }
    render() {
        return (
            <ImageBackground source={bg} style={styles.wrapper}>
                <View style={styles.Login}>
                    <Image source={require('../Images/botnoi.png')} style={styles.Image}></Image>
                    <Text style={styles.welcome}>
                        Welcome To Botnoi Hotel
                    </Text>
                    <Text style={styles.signup}>
                        Please SignUp For Next Step!
                    </Text>
                    <TextInput
                        placeholder="Fullname"
                        placeholderTextColor={'#b4e0e5'}
                        style={{
                        height: 40,
                        width: 250,
                        marginTop: 10,
                        marginLeft: 10,
                        marginBottom: 20,
                        fontWeight: '600',
                        borderColor: '#b4e0e5',
                        borderWidth: 1,
                        borderRadius: 20
                    }}
                        onChangeText={(fullname) => this.setState({fullname})}/>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor={'#b4e0e5'}
                        style={{
                        height: 40,
                        width: 250,
                        marginBottom: 20,
                        marginLeft: 10,
                        fontWeight: '600',
                        borderColor: '#b4e0e5',
                        borderWidth: 1,
                        borderRadius: 20
                    }}
                        onChangeText={(username) => this.setState({username})}/>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'#b4e0e5'}
                        style={{
                        height: 40,
                        width: 250,
                        marginLeft: 10,
                        marginBottom: 20,
                        fontWeight: '600',
                        borderColor: '#b4e0e5',
                        borderWidth: 1,
                        borderRadius: 20
                    }}
                        onChangeText={(email) => this.setState({email})}/>

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'#b4e0e5'}
                        secureTextEntry={true}
                        style={{
                        height: 40,
                        width: 250,
                        marginLeft: 10,
                        marginBottom: 30,
                        fontWeight: '600',
                        borderColor: '#b4e0e5',
                        borderWidth: 1,
                        borderRadius: 20
                    }}
                        onChangeText={(password) => this.setState({password})}/>
                    <Button title="Submit" color="#ffd0dc" style={styles.button}/>
                    <Text style={styles.support}>Powered By Botnoi NLP & AWS
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    Image: {
        marginTop: 20,
        alignItems: 'center',
        width: 100,
        height: 150
    },
    Login: {
        margin: 30,
        alignItems: 'center',
        height: 565,
        backgroundColor: 'white',
        borderRadius: 30

    },
    welcome: {
        fontSize: 18,
        alignItems: 'center',
        textShadowColor: 'grey',
        color: 'grey',
        fontWeight: '600',
        margin: 10
    },
    signup: {
        fontSize: 10,
        alignItems: 'center',
        textShadowColor: 'grey',
        color: 'grey',
        fontWeight: '500'
    },
    support: {
        fontSize: 9,
        alignItems: 'center',
        textShadowColor: 'grey',
        color: 'grey',
        fontWeight: '300',
        margin: 10
    },
    button: {
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center'
    }
})
