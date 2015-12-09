/*jslint node: true, esnext: true */
/* globals module, require */

import React from 'react-native';
import Server from './Server';
import RCTIcons from 'react-native-icons';
import MapView from './MapView';

let {Icon} = RCTIcons;
let {View, Text, StyleSheet, Image, TouchableHighlight, Platform, NativeModules, ScrollView} = React;

let TaskDetail = React.createClass({
  getInitialState() {
    return {
      data: {},
      loaded: false,
      showMap: false
    };
  },

  componentDidMount() {
    let _this = this;
    Server.getTask(this.props.id, function(err, data){
      _this.setState({data, loaded: true});
    });
  },

  _bridgeTest() {
    if (Platform.OS === 'android') {
      let {ToastAndroidNative} = NativeModules;
      // console.log(NativeModules.ToastAndroidNative);
      ToastAndroidNative.show('只有在Android才会显示', ToastAndroidNative.SHORT);
    } else if (Platform.OS === 'ios') {
      // NativeModules.CalendarManager.addEvent('你好', 'iOS Bridge');
      this.setState({showMap : !this.state.showMap});
    }
  },

  render() {
    let data = this.state.data;
    if (this.state.showMap) {
      return (
        <View style={detailStyles.ctn}>
          <MapView style={{flex:1}}/>
        </View>
      );
    }
    return (
      <ScrollView style={detailStyles.ctn}>
        <View style={detailStyles.imgWrap}>
          <Image style={detailStyles.img} source={{uri:data.thum}}/>
        </View>
        <View style={detailStyles.subCtn}>
          <Text style={detailStyles.title}>{data.title}</Text>
          <Text style={detailStyles.prize}>{data.salary}</Text>
          <Text style={detailStyles.body}>{data.body}</Text>
          <TouchableHighlight onPress={this._bridgeTest}>
            <Text>Native Call Test</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
});

let detailStyles = StyleSheet.create({
  ctn: {
    flex: 1
  },
  subCtn: {
    flex: 1,
    padding: 5
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  body: {
    color: '#666',
    fontSize: 14
  },
  imgWrap: {
    height: 160
  },
  img: {
    flex: 1
  },
  prize: {
    color: 'orange',
    fontSize: 18,
    marginBottom: 5
  }
});

export default TaskDetail;
