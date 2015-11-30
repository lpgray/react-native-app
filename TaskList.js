/*jslint node: true, esnext: true */
/* globals module, require */

'use strict';

import React from 'react-native';
import Server from './Server';
import TaskDetail from './TaskDetail';

let {Image, StyleSheet, View, Text, Component, ListView, TouchableHighlight} = React;
let listStyles = StyleSheet.create({
    ctn: {
        flex: 1,
        marginTop: 5
    },
    separator: {
        height: 1,
        backgroundColor: '#f5f5f5'
    }
});
let taskItemStyles = StyleSheet.create({
    ctn : {
        padding: 5,
        flex: 1,
        borderColor: '#ccc',
        flexDirection: 'row'
    },
    title : {
        color: '#333',
        fontSize: 20,
        padding: 3
    },
    img: {
        width: 60,
        height: 60
    },
    salary: {
        color: 'orange',
        fontSize: 20,
        padding: 3
    },
    rightCtn: {
        flex: 1
    }
});

let TaskItem = React.createClass({
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress.bind(this, this.props.id)} underlayColor='rgba(0,0,0,.1)'>
                <View style={taskItemStyles.ctn}>
                    <Image style={taskItemStyles.img} source={{uri:this.props.thum}}/>
                    <View style={taskItemStyles.rightCtn}>
                        <Text style={taskItemStyles.title}>{this.props.title}</Text>
                        <Text style={taskItemStyles.salary}>{this.props.salary}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
});

let TaskList = React.createClass({
    getInitialState() {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        return {
            loaded : false,
            dataSource : new ListView.DataSource({
                // getSectionData          : getSectionData,
                // getRowData              : getRowData,
                rowHasChanged           : (row1, row2) => row1 !== row2,
                // sectionHeaderHasChanged : (s1, s2) => s1 !== s2
            })
        };
    },

    componentDidMount() {
        // var sectionIDs = [];
        // var rowIDs = [];
        // var dataBlob = {};
        //
        // sectionIDs.push('DEFAULT');
        // dataBlob.DEFAULT = '默认';
        //
        // TASK_DATA.forEach(function(item){
        //     rowIDs.push(item.id);
        //     dataBlob['DEFAULT:' + item.id] = item;
        // });
        let _this = this;
        Server.getTasks(function(err, data){
            _this.setState({
                dataSource: _this.state.dataSource.cloneWithRows(data),
                loaded: true
            });
        });
    },

    _onItemPress(id) {
        this.props.navigator.push({
            title: "任务详情",
            component: TaskDetail,
            passProps: {
                id: id
            }
        });
    },

    _renderRow(rowData) {
        return <TaskItem onPress={this._onItemPress} {...rowData}/>;
    },

    render() {
        var _this = this;
        return (
      	    <ListView
                style={listStyles.ctn}
                dataSource={this.state.dataSource}
                automaticallyAdjustContentInsets={false}
                renderRow={this._renderRow}
                renderSeparator={() => <View style={listStyles.separator}></View>}/>
        );
    }
});

module.exports = TaskList;
