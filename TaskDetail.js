/*jslint node: true, esnext: true */
/* globals module, require */

import React from 'react-native';
import Server from './Server';

let {View, Text, StyleSheet, Image} = React;

let TaskDetail = React.createClass({
    getInitialState() {
        return {
            data: {},
            loaded: false
        };
    },

    componentDidMount() {
        let _this = this;
        Server.getTask(this.props.id, function(err, data){
            _this.setState({data, loaded: true});
        });
    },

    render() {
        let data = this.state.data;
        return (
            <View style={detailStyles.ctn}>
                <View style={detailStyles.imgWrap}>
                    <Image style={detailStyles.img} source={{uri:data.thum}}/>
                </View>
                <View style={detailStyles.subCtn}>
                    <Text style={detailStyles.title}>{data.title}</Text>
                    <Text style={detailStyles.prize}>{data.salary}</Text>
                    <Text style={detailStyles.body}>{data.body}</Text>
                </View>
            </View>
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
