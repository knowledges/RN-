/**
 * Created by qiubaolin on 2017/6/30.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Navigator,
    StyleSheet,
    View,
    Text
} from 'react-native';
import MainTabbar from './components/Base/MainTabbar/main'

export default class Root extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navigator
                initialRoute = {{ name: 'MainTabbar', component: MainTabbar }}
                ref="navigator"
                renderScene={ this._renderScene }
                onStartShouldSetResponder={() => false}
                configureScene={()=>{}} />
        );
    }
    _renderScene = (route, navigator) => {
        //从路由数组中拿出路由
        let Component = route.component;
        return  <Component />;
    }
}
