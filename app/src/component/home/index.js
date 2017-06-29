import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Input, InputGroup, Left, Right, Body, Title
} from 'native-base'
import React, { PureComponent } from 'react'
import DeviceInfo from 'react-native-device-info'
import {
  Text,
  Image, StyleSheet,
  View,
  Dimensions,
  Alert,
  BackAndroid,
  ToastAndroid,
  Platform,
  AsyncStorage,
  ListView,
  ActivityIndicator,
  TouchableOpacity, ScrollView, Keyboard
} from 'react-native'
import * as Animated from 'react-native-animatable'
import { connect } from 'react-redux'
// import request from './api/request'
import api from '../../api'
import i18n from '../../i18'
import { Actions } from 'react-native-router-flux';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
// var socket = require('socket.io-client')('ws://192.168.43.52:6969', { transports:['websocket'],jsonp: false, autoConnect: true,forceNew:true });
// import dataService from '../api/dataService';

import IconOcticons from 'react-native-vector-icons/Octicons';
export class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      animation: 'slideInLeft',
      index: 0,
      routes: [
        { key: '1', title: 'Gần đây' },
        { key: '2', title: 'Danh bạ' }
      ],
    };
    // socket.open()
    // socket.on('message',(msg)=>{
    //     alert(msg)
    // })
    // socket.emit('connect',(data) => {
    //     console.log(data); // data will be 'woot'
    // });
  }
  renderMenu() {
    if (this.state.showMenu) return <View style={{ top: 0, left: 0, zIndex: 1000, position: 'absolute', height: api.height, width: api.width }}>
      <Animated.View animation={this.state.animation} duration={1} style={{ zIndex: 10000, height: api.height, width: api.width * .7, backgroundColor: 'green' }}>
          <TouchableOpacity>
            <Text onPress={()=>{ Actions.chat({name:'Hung'}) }}>Cap nhat thong tin</Text>
          </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        style={{ backgroundColor: 'rgba(0,0,0,0)', height: api.height, width: api.width, top: 0, right: 0, position: 'absolute' }}
        onPress={() => { this.setState({ animation: 'slideOutLeft' }); setTimeout(() => { this.setState({ showMenu: false }) }, 100) }}
      />

    </View>
    return null
  }
  _handleChangeTab = index => this.setState({ index });
  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
  });
  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
  });
  render() {
    return (
      <Container>

        <Header>
          <Button
            onPress={() => { this.setState({ showMenu: !this.state.showMenu, animation: 'slideInLeft' }) }}
          >
            <Icon name='ios-menu' />
          </Button>
          <Body>
            <Title>
              Nguyen Manh Hung
                    </Title>
          </Body>
        </Header>
        <View style={{ height: api.height-56 }}>
          <TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onRequestChangeTab={this._handleChangeTab}
          />
        </View>
        {this.renderMenu()}
      </Container>
    )
  }
}

mapStateToProps = (state) => {
  return { userState: state.userState, navState: state.navState }
}
mapDispatchToProps = (dispatch) => ({
  push: (route) => dispatch(push(route)),
  showmess: () => dispatch(showMessage('1', '2')),
  pop: () => dispatch(pop()),
  showloading: () => dispatch(showLoading()),
  hideloading: () => dispatch(hideLoading()),
  setUserInfo: (data) => dispatch(setUserInfo(data)),
  setUserToken: (token) => dispatch(setUserToken(token)),
  setUuid: (uuid) => dispatch(setUuid(uuid)),
  setShopLocation: (markers) => dispatch(setShopLocation(markers))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
// import React, { PureComponent } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});