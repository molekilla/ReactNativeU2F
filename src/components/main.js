import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default class ReactNativeU2F extends React.Component {
    render() {
        return (React.createElement(View, {style: styles.container}, React.createElement(Text, {style: styles.welcome}, "Welcome to React Native!"), React.createElement(Text, {style: styles.instructions}, "To get started, edit index.android.js"), React.createElement(Text, {style: styles.instructions}, "Shake or press menu button for dev menu")));
    }
}
//# sourceMappingURL=main.js.map