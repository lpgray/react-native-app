/*jslint node: true, esnext: true */
/* globals module, require */

'use strict';

import React from 'react-native';
import UcenterPage from './UcenterPage';
import {NavigationBarRouteMapper, NavbarStyle} from './mixins';

let {StyleSheet,View,Text,Navigator} = React;

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
  _routeMapper(route, navigator) {
    if (route.name === 'ucenter') {
      return (
        <View style={NavbarStyle.scene}>
          <UcenterPage navigator={navigator}/>
        </View>
      );
    }
  },

  _onBarsPress() {
    if (this.props.onBarsPress) {
      this.props.onBarsPress();
    }
  },

  render() {
    return (
      <Navigator
        initialRoute={{
          title:"个人中心",
          name: 'ucenter'
        }}
        renderScene={this._routeMapper}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper(this)}
            style={NavbarStyle.navBar}
            />
        }
        />
    );
  }
});

export default Tasks;
