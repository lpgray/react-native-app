/*jslint node: true, esnext: true */
/* globals module, require */
'use strict';
import Task from './Task';
import Ucenter from './Ucenter';
import RCTIcons from 'react-native-icons';

let {Icon} = RCTIcons;
let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight
} = React;

let RCTScorer = React.createClass({
  getInitialState() {
    return {index: 0};
  },

  _onMenuPress(index) {
    this.setState({index});
    this.refs.drawer.closeDrawer();
  },

  _onBarsPress() {
    this.refs.drawer.openDrawer();
  },

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{margin: 14}}>
          <Text style={{fontWeight: '500', fontSize: 20}}>RCTApp</Text>
        </View>
        <TouchableHighlight onPress={this._onMenuPress.bind(this, 0)}>
          <View style={styles.menuItem}>
            <Icon size={16} name="fontawesome|tasks" style={styles.icon}/>
            <Text style={styles.menuItemText}>任务</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onMenuPress.bind(this, 1)}>
          <View style={styles.menuItem}>
            <Icon size={16} name="fontawesome|user" style={styles.icon}/>
            <Text style={styles.menuItemText}>我</Text>
          </View>
        </TouchableHighlight>
      </View>
    );

    var view = <Task onBarsPress={this._onBarsPress}/>;
    if (this.state.index === 1) {
      view = <Ucenter onBarsPress={this._onBarsPress}/>;
    }
    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
        ref={'drawer'}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        {view}
      </DrawerLayoutAndroid>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menuItem: {
    height: 40,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 14,
    flex: 1
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10
  }
});

AppRegistry.registerComponent('RCTScorer', () => RCTScorer);
