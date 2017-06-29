import React, { Component } from 'react';
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene,Actions,Modal,DefaultRenderer,Switch } from 'react-native-router-flux';

import api from '../api'
// import component
import MSG from './message'
import Confirmbox from './confirmBox'
import InputBox from './inputBox'
export default class newRN extends Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <View style={{ height:api.height,width:api.width }}>
          <DefaultRenderer  navigationState={children[this.props.index]} onNavigate={this.props.onNavigate} />
          <MSG/>
          <Confirmbox/>
          <InputBox/>
      </View>
    );
  }
}