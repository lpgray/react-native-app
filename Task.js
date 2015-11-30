/*jslint node: true, esnext: true */
/* globals module, require */

'use strict';

import React from 'react-native';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import {NavigationBarRouteMapper, NavbarStyle} from './mixins';

let {StyleSheet, Navigator, View} = React;

let Tasks = React.createClass({
    _routeMapper(route, navigator) {
        if (route.name === 'tasks') {
            return (
                <View style={NavbarStyle.scene}>
                    <TaskList navigator={navigator}/>
                </View>
            );
        } else if (route.name === 'task-detail'){
            return (
                <View style={NavbarStyle.scene}>
                    <TaskDetail id={route.id} navigator={navigator}/>
                </View>
            );
        }
    },

    render() {
        return (
            <Navigator
                initialRoute={{title:"任务", index: 0, name:"tasks"}}
                renderScene={this._routeMapper}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={NavbarStyle.navBar}
                    />
            }/>
        );
    }
});

export default Tasks;
