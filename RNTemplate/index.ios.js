/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
// 引入
import App from './src/App'

export default class RNTemplate extends Component {
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('RNTemplate', () => RNTemplate);
