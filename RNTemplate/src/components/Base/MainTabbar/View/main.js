/**
 * Created by qiubaolin on 2017/6/30.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image
} from 'react-native';

// 导入
import Home from '../../../Home/main';
import UserCenter from '../../../UserCenter/main';

// 引入插件
import TabNavigator from 'react-native-tab-navigator';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={ this.state.selectedTab === 'home' }
                    title="首页"
                    renderIcon={() => <Image style={styles.renderIcon} source={{uri: 'car_service_uncheck'}}/>}
                    renderSelectedIcon={() => <Image style={styles.renderSelectedIcon} source={{uri: 'car_service_pitch_on'}}/>}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home ref='Home'/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={ this.state.selectedTab === 'user' }
                    title="用户中心"
                    renderIcon={() => <Image style={styles.renderIcon} source={{uri: 'my_uncheck'}}/>}
                    renderSelectedIcon={() => <Image style={styles.renderSelectedIcon} source={{uri: 'my_pitch_on'}}/>}
                    onPress={() => this.setState({ selectedTab: 'user' })}>
                    <UserCenter ref='User'/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    renderIcon: {
        width: 22,
        height: 22
    },
    renderSelectedIcon: {
        width: 22,
        height: 22
    }
});

