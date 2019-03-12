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
import bg from '../Images/2174.png'
export default class LoggedOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'null',
            email: 'null',
            password: 'null'
        };
    }
    // onChangeUserName(){
    //     this.setState({
    //       Name:e.target.value
    //     })
    //   }
    // onChangeEmail(e){
    //     this.setState({
    //       Email:e.target.value
    //     })
    //   }
    // onChangePassword(e){
    //     this.setState({
    //       Password:e.target.value
    //     });
    //   }
    render() {
        return (
            <ImageBackground source={bg} style={styles.wrapper}>
                <View style={styles.Login}>
                    <Image source={require('../Images/botnoi.png')} style={styles.Image}></Image>
                    <Text h1 style={styles.welcome}>
                        Welcome To Botnoi Hotel
                    </Text>
                    <TextInput
                        placeholder="Fullname"
                        style={{
                        height: 40,
                        width: 250,
                        marginTop: 10,
                        marginLeft: 30,
                        marginBottom:20,
                        color: 'grey',
                        borderColor: '#b4e0e5',
                        borderWidth: 1,
                        borderRadius: 20
                    }}
                        // onChange={this.onChangeName}
                        />
                    <TextInput
                        placeholder="Username"
                        style={{
                        height: 40,
                        width: 250,
                        marginBottom:20,
                        marginLeft: 30,
                        color: 'grey',
                        borderColor: '#b4e0e5',
                        borderWidth: 1,
                        borderRadius: 20
                    }}
                        // onChange={this.onChangeName}
                        />
                    <TextInput
                        placeholder="Email"
                        style={{
                        height: 40,
                        width: 250,
                        marginLeft: 30,
                        marginBottom:20,
                        color: 'grey',
                        borderColor: '#b4e0e5',
                        borderWidth: 1,
                        borderRadius: 20
                    }}
                    // onChange={this.onChangeEmail} 
                    />

                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={{
                        height: 40,
                        width: 250,
                        marginLeft: 30,
                        marginBottom: 30,
                        color: 'grey',
                        borderColor: '#b4e0e5',
                        borderWidth: 1,
                        borderRadius: 20
                    }}
                    // onChange={this.onChangePassword}
                     />
                    <Button title="Submit" color="#ffd0dc" style={styles.button}/>

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
        height: 150,
             
    },
    Login: {
        margin: 30,
        alignItems: 'center',
        height: 550,
        backgroundColor: 'white',
        borderRadius: 30

    },
    welcome: {
        fontSize: 18,
        alignItems: 'center',
        textShadowColor: 'grey',
        color: 'grey',
        fontWeight: '400',
        margin: 10
    },
    button: {
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
    }
})
