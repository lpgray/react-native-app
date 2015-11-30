/*jslint node: true, esnext: true */
/* globals module, require */

'use strict';

import React from 'react-native';
import TaskList from './TaskList';
let {StyleSheet, NavigatorIOS} = React;
let styles = StyleSheet.create({
    navWrap: {
        flex: 1,
        marginTop: 60
    },
    nav: {
        flex: 1,
    }
});

let Tasks = React.createClass({
    render() {
        return (
      	    <NavigatorIOS
                itemWrapperStyle={styles.navWrap}
                style={styles.nav}
                initialRoute={{
                    title:"任务",
                    component:TaskList
                }}/>
        );
    }
});

export default Tasks;
