/*jslint node: true, esnext: true */
/* globals module, require */

'use strict';

import React from 'react-native';
import Task from './Task';
import Ucenter from './Ucenter';
import RCTIcons from 'react-native-icons';

var {
  AppRegistry,
  Component
} = React;

var {TabBarIOS} = RCTIcons;

class RCTScorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tasks'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tasks'}
          iconName={'fontawesome|tasks'}
          onPress={() => {
            this.setState({
              selectedTab: 'tasks'
            });
          }}
          title='任务'>
          <Task/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'ucenter'}
          iconName={'fontawesome|user'}
          onPress={() => {
            this.setState({
              selectedTab: 'ucenter'
            });
          }}
          title='我'>
          <Ucenter/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('RCTScorer', () => RCTScorer);
