/**
 * Created by qiubaolin on 2017/6/29.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Root from './root';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Root />
        );
    }
}
