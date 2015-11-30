/*jslint node: true, esnext: true */
/* globals module, require */

'use strict';

import React from 'react-native';

var {
    StyleSheet,
    View,
    Text
   } = React;

var styles = StyleSheet.create({
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

let UcenterPage = React.createClass({
    render() {
        return (
  	    <View style={styles.ctn}>
	        <Text style={styles.desc}>我</Text>
	    </View>
        );
    }
});

export default UcenterPage;
