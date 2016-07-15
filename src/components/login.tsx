import * as React from 'react';
import * as axios from 'axios';
import { Component } from 'react';
import {
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
    StyleSheetProperties,
    Text,
    TextInput,
    View
} from 'react-native';

const styles: any = StyleSheet.create({
    wrapper: {
        borderRadius: 8,
    },
    button: {
        color: '#007AFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        margin: 5,
    },
    label: {
        fontSize: 17,
        textAlign: 'center',
        margin: 3,
    },
    inputBox: {
        flex: -1,
        marginBottom: 2,
        width: 250,
        height: 50,
        textAlign: 'center',
    },
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    block: {
        padding: 10,
    },
    nativeFeedbackButton: {
        textAlign: 'center',
        margin: 10,
    },
});


const API = 'https://app.auth2factor.com/api'

class LoginReq {
    email: string;
    password: string;
    doRequestOTC: boolean;
}

export interface LoginProps {
}

export class LoginComponent extends React.Component<LoginProps, {}> {
    constructor(props: LoginProps) {
        super(props);
        this.state = new LoginReq ();
    }

    onLogin() {
        console.log(this.state);
    }

    login(param: LoginReq) {
        return axios.post('/v2/users/authenticate', param)
            .then((response) => {
                let model = response.data
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    react-native-u2f
                </Text>
                <Text style={styles.label}>
                    Username
                </Text>
                <TextInput returnKeyType={'next'} style={styles.inputBox} autoFocus={true} 
                onChangeText={ value => this.setState({ email: value })}>
                </TextInput>
                <Text style={styles.label}>
                    Password
                </Text>
                <TextInput secureTextEntry={true} style={styles.inputBox}
                onChangeText={ value => this.setState({ password: value })}>
                </TextInput>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="rgb(210, 230, 255)"
                    style={[styles.row, styles.block]}                    
                    onPress={ () => this.onLogin() }>
                    <Text style={styles.button}>
                        Login
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

