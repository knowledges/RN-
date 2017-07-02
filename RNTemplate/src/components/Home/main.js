/**
 * Created by qiubaolin on 2017/6/30.
 */
import React, { Component } from 'react';
//引入子组件
import {
    Root,
} from './View';

export default class Main extends Component {
    render() {
        return (
            // 所有属性向下传递
            <Root />
        );
    }
}