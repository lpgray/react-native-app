/*jslint node: true, esnext: true */
/* globals module, require */

'use strict';

import React from 'react-native';
import UcenterPage from './UcenterPage';

let {
    StyleSheet,
    View,
    Text,
    NavigatorIOS
   } = React;

let styles = StyleSheet.create({
    desc: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    ctn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

let Tasks = React.createClass({
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    title:"个人中心",
                    component:UcenterPage
                }}/>
        );
    }
});

export default Tasks;
