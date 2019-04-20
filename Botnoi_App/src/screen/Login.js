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
import I18n from '../component/I18n';
import firebase from '../component/Firebase';
I18n.locale = 'th';
export default class Login extends Component {
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

            <ImageBackground source={bg2} style={styles.wrapper}>

                <View style={styles.Login}>
                    <Image source={require('../Images/botnoi.png')} style={styles.Image}></Image>
                    <Text style={styles.welcome}>
                        {I18n.t('greeting')}
                    </Text>

                   
                    <TextInput
                        placeholder={I18n.t('Email')}
                        placeholderTextColor={'grey'}
                        style={styles.TextBox}/>

                   

                    <TextInput
                        placeholder={I18n.t('Password')}
                        placeholderTextColor={'grey'}
                        secureTextEntry={true}
                        style={styles.TextBox}/>

                    <TouchableHighlight
                        style={styles.button_Submit}
                        onPress={this.onPress}
                        underlayColor='#39d6f5'>
                        <Text style={styles.submit_text}>{I18n.t('Create')}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button_FB}
                        onPress={this.onPress}
                        underlayColor='#3993d5'>
                        <View>
                            <Text style={styles.FB_text}>
                                {I18n.t('Facebook')}
                            </Text>
                            <Image
                                source={require('../Images/facebook.png')}
                                style={{
                                marginTop: -28,
                                marginLeft: -40,
                                height: 28,
                                width: 28
                            }}></Image>

                        </View>

                    </TouchableHighlight>

                    <TouchableOpacity style={styles.loggin_button} onPress={this.onPress}>
                        <Text style={styles.Login_text}>
                            {I18n.t('Have_Account')}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.support}>
                        Copyright © 2019 BotnoiTeam All rights reserved.
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
        alignItems: 'center',
        width: 100,
        height: 130
    },
    Login: {
        alignItems: 'center'
    },
    welcome: {

        fontSize: 18,
        justifyContent: 'center',
        fontFamily: "Kanit-Regular",
        alignItems: 'center',
        color: '#39d5d5',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5

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
        fontFamily: "Kanit-Regular",
        alignItems: 'center',
        color: 'white',
        fontWeight: '400'
    },
    support: {
        fontSize: 12,
        fontFamily: "Kanit-Regular",
        alignItems: 'center',
        color: 'white',
        marginTop: 10,
        fontWeight: '400'
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
        fontFamily: "Kanit-Regular",
        fontSize: 20,
        fontWeight: '400',
        color: 'white'
    },
    FB_text: {
        fontFamily: "Kanit-Medium",
        fontSize: 13,
        fontWeight: '400',
        color: 'white',
        marginTop: 8
    },
    Login_text: {
        color: 'white',
        fontFamily: "Kanit-Regular",
        fontWeight: '400',
        fontSize: 15,
        fontWeight: '400'
    }
})