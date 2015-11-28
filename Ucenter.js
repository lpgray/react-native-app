/*jslint node: true, esnext: true */
/* globals module, require */

'use strict';

var React = require('react-native');
var UcenterPage = require('./UcenterPage');

var {
    StyleSheet,
    View,
    Text,
    Component,
    NavigatorIOS
   } = React;

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Tasks extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    title:"个人中心",
                    component:UcenterPage
                }}/>
        );
    }
}

module.exports = Tasks;
