
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, ToastAndroid
} from 'react-native';
import React, { Component } from 'react';

// import scene
import Login from './component/login'
import Home from './component/home'
import Chat from './component/chat'
import UpdateInfo from './component/updateInfo'

// import tool
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
// import config
import store from './reducer'
import UI from './UI'
import api from './api'
import i18 from './i18'
export default class newRN extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000)
  }

  isback = true;
  to = null;
  exitApp() {
    ToastAndroid.show(i18.t('backMore'), 300);
    this.isback = !this.isback;
    clearTimeout(this.to);
    setTimeout(() => {
      this.isback = true;
    }, 2000)
    if (this.isback) return false; else return true;
  }
  componentWillMount() {
    api.setStore(store)
  }
  render() {
    return (
      <Provider store={store}>
        <Router
          hideNavBar
          backAndroidHandler={() => { if (Actions.pop()) return true; else return this.exitApp() }}
        >
          <Scene key='modal' component={UI}>
            <Scene key={'root'}>
              <Scene key="login" component={Login} />
              <Scene key="home" component={Home} />
              <Scene key="chat" component={Chat} />
              <Scene key="updateInfo" component={UpdateInfo} initial={true} />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
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
});