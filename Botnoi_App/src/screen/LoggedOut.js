import React, {Component} from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import bg from '../Images/176.png'
import bg2 from '../Images/holiday.jpg'
export default class LoggedOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: 'null',
            user: 'null',
            email: 'null',
            password: 'null',
            count: 0
        };
    }
    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    onChange = () => {
        this.setState({user: this.state.user})
    }
    render() {
        return (
            <ImageBackground source={bg} style={styles.wrapper}>
                <ImageBackground source={bg2} style={styles.wrapper2}>

                    <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        margin: 6.5,
                        height: 25,
                        width: 62,
                        backgroundColor: 'white',
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: 'white'
                    }}>

                        <TouchableOpacity>
                            <Image
                                source={require('../Images/UK.png')}
                                style={{
                                marginTop: 1.5,
                                width: 25,
                                height: 20,
                                borderRadius: 35,
                                marginRight: 10
                            }}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require('../Images/TH.png')}
                                style={{
                                marginTop: 1.5,
                                width: 25,
                                height: 20,
                                borderRadius: 35
                            }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Login}>
                        <Image source={require('../Images/botnoi.png')} style={styles.Image}></Image>
                        <Text style={styles.welcome}>
                            Welcome To Botnoi Hotel
                        </Text>

                        <TextInput
                            placeholder="Fullname"
                            placeholderTextColor={'grey'}
                            style={styles.TextBox}/>

                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'grey'}
                            style={styles.TextBox}/>

                        <TextInput
                            placeholder="Username"
                            placeholderTextColor={'grey'}
                            style={styles.TextBox}
                            onChange={this.onChangeText}/>

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'grey'}
                            secureTextEntry={true}
                            style={styles.TextBox}/>

                        <TouchableHighlight
                            style={styles.button_Submit}
                            onPress={this.onPress}
                            underlayColor='#39d6f5'>
                            <Text style={styles.submit_text}>Submit</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.button_FB}
                            onPress={this.onPress}
                            underlayColor='#3993d5'>
                            <View>

                                <Image
                                    source={require('../Images/facebook.png')}
                                    style={{
                                    marginTop: 5,
                                    height: 28,
                                    width: 28
                                }}></Image>

                            </View>

                        </TouchableHighlight>

                        <TouchableOpacity style={styles.loggin_button} onPress={this.onPress}>
                            <Text style={styles.Login_text}>
                                Already have account? LogIn
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.support}>Copyright © 2019 BotnoiTeam All rights reserved.
                        </Text>
                    </View>
                </ImageBackground>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapper2: {
        flex: 1
    },
    Image: {
        alignItems: 'center',
        width: 100,
        height: 130
    },
    Login: {
        alignItems: 'center'
    },
    welcome: {
        fontSize: 18,
        alignItems: 'center',
        color: 'white',
        fontWeight: '600',
        margin: 10
    },
    TextBox: {
        width: 250,
        height: 45,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 0.3,
        borderColor: '#e4e4e4',
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: '200',
        borderRadius: 20
    },
    signup: {
        fontSize: 10,
        alignItems: 'center',
        color: 'white',
        fontWeight: '500'
    },
    support: {
        fontSize: 12,
        alignItems: 'center',
        color: 'white',
        marginTop: 15,
        fontWeight: '300'
    },
    button_Submit: {
        width: 250,
        height: 40,
        backgroundColor: 'white',
        borderStyle: 'solid',
        marginTop: 10,
        padding: 2.5,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#39d5d5'
    },
    button_FB: {
        width: 250,
        height: 40,
        borderStyle: 'solid',
        marginTop: 10,
        padding: 2.5,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#3993d5'
    },
    loggin_button: {
        width: 250,
        borderStyle: 'solid',
        alignItems: 'center'
    },
    submit_text: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: '400',
        fontStyle: "normal",
        letterSpacing: 0,
        color: 'white'
    },
    Login_text: {
        color: 'white',
        fontFamily: "Roboto",
        fontWeight: '400',
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0
    }
})