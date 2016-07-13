import * as React from 'react';
import { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    StyleSheetProperties,
    Text,
    TextInput,
    View
} from 'react-native';

const styles: any = StyleSheet.create({
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
        fontSize: 16,
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
});



export interface LoginProps {
}

export class LoginComponent extends React.Component<LoginProps, {}> {
    constructor(props: LoginProps) {
        super(props);
    }

    onLogin() {

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
                <TextInput style={styles.inputBox}>
                </TextInput>
                <Text style={styles.label}>
                    Password
                </Text>
                <TextInput secureTextEntry={true} style={styles.inputBox}>
                </TextInput>
                <TouchableHighlight onPress={this.onLogin}>
                    <Text>
                        Login
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

