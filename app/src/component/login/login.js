import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Input, InputGroup, CheckBox
} from 'native-base'
import React, { Component } from 'react'
import DeviceInfo from 'react-native-device-info'
import {
    Text,
    View,
    AsyncStorage,
    TouchableOpacity, Keyboard, StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
// import request from './api/request'
import api from '../../api'
import i18n from '../../i18'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import dataService from '../../api/dataService';
import IconOcticons from 'react-native-vector-icons/Octicons';
export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: 'cocnmh',
            pw: '123456',
            remember: false
        }
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

    _gotoHome() {
        Keyboard.dismiss();
        if (this.state.user == '') {
            return api.showMessage(i18n.t('blankUsername'), i18n.t('message'));
        }
        if ((this.state.user).indexOf(' ') != -1) {
            return api.showMessage(i18n.t('invalidUsername'), i18n.t('message'));
        }
        if (this.state.pw == '') {
            return api.showMessage(i18n.t('blankPassword'), i18n.t('message'));
        }
        // let isloading = true;
        // // api.showLoading()
        // dataService.login(this.state.user, this.state.pw)
        //     .then(rs => {
        //         // api.hideLoading()
        //         isloading = false
        //         if (rs.err == 0) {
                    // api.setUserToken(rs.token)
                    // api.setUserInfo(rs.user)
                    // try {
                    //     AsyncStorage.setItem('rftk', rs.refreshToken);
                    //     // alert(dt.refreshToken)
                    // } catch (error) {
                    //     console.log('Error when saving data', error);
                    // }
                    Actions.home({ type: ActionConst.RESET });
        //         }
        //         else {
        //             api.showMessage(rs.msg, i18n.t('message'))
        //         }
        //     })
        // setTimeout(() => {
        //     if (isloading) {
        //         isloading = false
        //         // api.hideLoading()
        //         api.showMessage(i18n.t('connectionTimeout'), i18n.t('message'))
        //     }
        // }, 15000)
    }
    render() {
        return (

            <View style={style.wrap}>
                <View style={{ padding: 10, backgroundColor: '#fff' }}>
                    <InputGroup style={{ width: api.width * 0.8 }}>
                        <Icon name='ios-person' style={{ color: 'gray' }} />
                        <Input placeholder={i18n.t('username')}
                            onChangeText={(t) => {
                                this.setState({
                                    user: t
                                })
                            }}
                        />
                    </InputGroup>
                    <InputGroup style={{ width: api.width * 0.8 }}>
                        <Icon name='md-key' style={{ color: 'gray', fontSize: 23 }} />
                        <Input placeholder={i18n.t('password')} secureTextEntry={true}
                            onChangeText={(t) => {
                                this.setState({
                                    pw: t
                                })
                            }}
                        />
                    </InputGroup>
                    <View style={style.txtForgotPW}>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox checked={this.state.remember} onPress={() => { this.setState({ remember: !this.state.remember }) }} />
                            <Text style={{ marginLeft: 20 }}>
                                {i18n.t('remember')}
                            </Text>
                        </View>
                        <Text style={{ color: '#359af9', textDecorationLine: 'underline' }}>
                            {i18n.t('forgotPassword')}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ justifyContent:'center',flexDirection:'row',marginHorizontal: api.width * .1, marginTop: 20, borderRadius: 10, borderWidth: 1, borderColor: '#fa6428' }}
                    onPress={this._gotoHome.bind(this)}
                >
                    <IconOcticons name='sign-in' style={style.btnIcon} />
                    <Text style={style.btnText}>
                        {'  '}{(i18n.t('login')).toUpperCase()}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
var style = StyleSheet.create({
    btnText: { marginLeft: 10, color: '#fa6428',paddingVertical: 10 },
    btnIcon: { paddingVertical: 12, fontSize: 15, color: '#fa6428' },
    txtForgotPW: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingRight: 10 },
    wrap: { paddingBottom: 10, borderBottomRightRadius: 5, borderBottomLeftRadius: 5, backgroundColor: '#fff' }
})
mapStateToProps = (state) => {
    return {}
}
mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)