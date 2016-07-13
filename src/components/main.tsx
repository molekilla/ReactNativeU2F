import * as React from 'react';
import { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StyleSheetProperties,
  Text,
  View
} from 'react-native';

const styles:any = StyleSheet.create({
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

import { LoginComponent } from './login';

export interface HelloProps { compiler: string; framework: string; }

export default class ReactNativeU2F extends React.Component<HelloProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <LoginComponent></LoginComponent>
      </View>
    );
  }
}

