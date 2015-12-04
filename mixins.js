/*jslint node: true, esnext: true */
/* globals module, require */

import React from 'react-native';
import RCTIcons from 'react-native-icons';

let {StyleSheet, TouchableOpacity, Text, View} = React;
let {Icon} = RCTIcons;

let styles = StyleSheet.create({
    navBarText: {
        fontSize: 18,
        marginVertical: 10
    },
    navBarTitleText: {
        color: '#000',
        fontWeight: '500',
        marginVertical: 9
    },
    navBarLeftButton: {
        paddingLeft: 10
    },
    navBarRightButton: {
        paddingRight: 10
    },
    navBarButtonText: {
        color: '#3E7CFF',
        fontSize: 16
    }
});

let NavigationBarRouteMapper = {
    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name="fontawesome|angle-left" size={30} color='#3E7CFF' style={{width: 10, height: 38}}/>
                    <Text style={[styles.navBarText, styles.navBarButtonText]}> {previousRoute.title}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        return null;

        // return (
        //     <TouchableOpacity
        //         onPress={() => navigator.push(newRandomRoute())}
        //         style={styles.navBarRightButton}>
        //         <Text style={[styles.navBarText, styles.navBarButtonText]}>
        //             Next
        //         </Text>
        //     </TouchableOpacity>
        // );
    },

    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>{route.title}</Text>
        );
    },
};

let NavbarStyle = StyleSheet.create({
    scene: {
        flex: 1,
        marginTop: 60,
        backgroundColor: '#fff'
    },
    navBar: {
        backgroundColor: '#f8f8f8',
        borderColor: '#ccc'
    }
});

export {NavigationBarRouteMapper, NavbarStyle};
