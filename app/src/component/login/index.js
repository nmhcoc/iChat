import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Input, InputGroup
} from 'native-base'
import React, { Component } from 'react'
import DeviceInfo from 'react-native-device-info'
import {
    Text,
    Image,
    View,
    AsyncStorage,
    TouchableOpacity, Keyboard
} from 'react-native'
import { connect } from 'react-redux'
// import request from './api/request'
import api from '../../api'
import i18n from '../../i18'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import dataService from '../../api/dataService';
import IconOcticons from 'react-native-vector-icons/Octicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import Login from './login'
import Register from './register'
export class Index extends Component {
    constructor(props) {
        super(props)
        
    }
    componentWillMount() {
        // if(this.state.user && this.state.pw) this._gotoHome()
        // try {
        //     AsyncStorage.getItem('rftk')
        //         .then((p) => {
        //             if (p !== null && p != '' && p != undefined) {
        //                 let isloading = true
        //                 api.showLoading()
        //                 dataService.refreshToken(p)
        //                     .then(rs => {
        //                         isloading = false
        //                         api.hideLoading()
        //                         api.setUserInfo(rs.user)
        //                         api.setUserToken(rs.token)
        //                         if (rs.account == 0) {
        //                             api.resetRoute({ key: 'home' });
        //                         } else if (rs.account == 1) {
        //                             api.resetRoute({ key: 'homeM' });
        //                         }
        //                     });
        //                 setTimeout(() => {
        //                     if (isloading) {
        //                         isloading = false
        //                         api.hideLoading()
        //                         api.showMessage(i18n.t('connectionTimeout'), i18n.t('message'))
        //                     }
        //                 }, 15000)
        //             }
        //         });
        // } catch (error) {
        //     console.log('Error when getting data', error);
        // }
    }
    // function goto Home

    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: api.width * .1 }}>
                <Image
                    style={{ width: api.width, height: api.height, resizeMode: 'stretch', position: 'absolute', top: 0, left: 0 }}
                    source={require('../../img/bg.png')}
                />
                <View style={{ flex: 1 }}>
                    <Image source={require('../../img/ichat.png')}
                        style={{ height: api.width / 3, width: api.width / 3, resizeMode: 'stretch', alignSelf: 'center' }}
                    />
                    <ScrollableTabView
                        style={{ borderRadius:10 }}
                        renderTabBar={() => <DefaultTabBar style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, borderWidth: 0 }} />}
                        tabBarBackgroundColor='#fff'
                        tabBarUnderlineStyle={{ height: 2, backgroundColor: '#fa6428' }}
                        tabBarActiveTextColor='#fa6428'
                        tabBarTextStyle={{ fontSize:17,fontWeight:'300' }}
                    >
                        <Login tabLabel='Đăng nhập'/>
                        <Register tabLabel='Đăng ký'/>
                    </ScrollableTabView>
                </View>
            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Index)