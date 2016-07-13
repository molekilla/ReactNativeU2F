import * as React from 'react';
import { TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';
const styles = StyleSheet.create({
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
export class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    onLogin() {
    }
    render() {
        return (React.createElement(View, {style: styles.container}, React.createElement(Text, {style: styles.title}, "react-native-u2f"), React.createElement(Text, {style: styles.label}, "Username"), React.createElement(TextInput, {style: styles.inputBox}), React.createElement(Text, {style: styles.label}, "Password"), React.createElement(TextInput, {secureTextEntry: true, style: styles.inputBox}), React.createElement(TouchableHighlight, {onPress: this.onLogin}, React.createElement(Text, null, "Login"))));
    }
}
//# sourceMappingURL=login.js.map