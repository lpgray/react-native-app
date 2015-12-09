/*jslint node: true, esnext: true */
/* globals module, require */

import React from 'react-native';
import RCTIcons from 'react-native-icons';

let {StyleSheet, TouchableOpacity, Text, View, Platform} = React;
let {Icon} = RCTIcons;

let styles = StyleSheet.create({
  navBarTitleText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    marginTop: (Platform.OS === 'ios') ? 8 : 18,
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    color: '#3E7CFF',
    fontSize: 14
  },
  navBarIcon: {
    width: 10,
    height: 30,
    alignItems: 'center'
  },
  navBarIconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    marginTop: (Platform.OS === 'ios') ? 2 : 6,
  }
});

let NavigationBarRouteMapper = (_this) => {
  return {
    LeftButton: function(route, navigator, index, navState) {
      if (index === 0 && Platform.OS === 'android') {
        return (
          <TouchableOpacity
            onPress={_this._onBarsPress}
            style={styles.navBarLeftButton}>
            <View style={styles.navBarIconWrap}>
              <Icon name="fontawesome|bars" size={20} color='#555' style={[styles.navBarIcon, {width:30}]}/>
            </View>
          </TouchableOpacity>
        );
      }

      if (index === 0) {
        return null;
      }

      var previousRoute = navState.routeStack[index - 1];
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
          style={styles.navBarLeftButton}>
          <View style={styles.navBarIconWrap}>
            <Icon name="fontawesome|angle-left" size={26} color='#3E7CFF' style={styles.navBarIcon}/>
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
        <Text style={styles.navBarTitleText}>{route.title}</Text>
      );
    }
  };
};

let NavbarStyle = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 60 : 46,
    marginBottom: (Platform.OS === 'ios') ? 40 : 0,
    backgroundColor: '#fff'
  },
  navBar: {
    backgroundColor: '#f8f8f8',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: (Platform.OS === 'ios') ? 60 : 46
  }
});

export {NavigationBarRouteMapper, NavbarStyle};
