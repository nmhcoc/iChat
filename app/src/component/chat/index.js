import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, FlatList
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Input, InputGroup, Left, Right, Body, Title, Footer
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import api from '../../api';
import { connect } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
var socket = require('socket.io-client')
sefl = null;
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noneText: true,
            msg: []
        };
        socket = socket('ws://192.168.1.10:6969', { timeout:1000000,transports: ['websocket'], jsonp: false, autoConnect: true, forceNew: true });
        self = this;
        socket.on('server_send_msg', (data) => {
            this.setState({ msg: this.state.msg.concat([data.msg]) })
        })
    }
    t = ''
    _onChangeText(text) {
        if (this.state.noneText) this.setState({ noneText: false });
        t = text;
    }
    _renderButtonSend() {
        if (this.state.noneText) return <EvilIcons name={'like'} style={{ color: '#999', fontSize: 30, marginTop: 2 }}
            onPress={() => { this.setState({ msg: this.state.msg.concat(['like']) }) }}
        />
        return <FontAwesomeIcons name='send-o' style={{ color: '#999', fontSize: 20, marginTop: 5 }}
            onPress={() => {
                this.setState({ msg: this.state.msg.concat([t]), noneText: true });
                socket.open()
                socket.emit('client_send_msg', { msg: t })
                t = '';
                this.txt.setNativeProps({ text: '' })
            }}
        />
    }
    render() {
        return (
            <View style={{ height: api.height, width: api.width }}>
                <Header>
                    <Button
                        onPress={Actions.pop}
                    >
                        <Icon name='ios-arrow-back' />
                    </Button>
                    <Body>
                        <Title>
                            Nguyen Manh Hung
                    </Title>
                    </Body>
                </Header>
                <ScrollView style={{ paddingHorizontal:5 }}>
                    <FlatList
                        data={this.state.msg}
                        keyExtractor={(item, index) => index}
                        refreshing
                        renderItem={
                            ({ item }) => (
                                <Text style={{ marginTop:10,paddingVertical:1,paddingHorizontal:20,borderRadius:10,backgroundColor:'#cdcdcd',alignSelf:'flex-start' }}>
                                    {item}
                                </Text>
                            )
                        }
                    />
                </ScrollView>
                <View
                    style={{ alignSelf: 'flex-end', height: 40, shadowColor: '#cdcdcd', shadowOffset: { height: 5, width: 10 }, shadowOpacity: .3, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}
                >
                    <View style={{ flex: 1 }} />
                    <View style={{ width: api.width, flexDirection: 'row', paddingHorizontal: 5, borderTopColor: '#cdcdcd', borderTopWidth: 1 }}>
                        <Icon name='ios-camera-outline' style={{ color: '#999' }} />
                        <EvilIcons name='image' style={{ color: '#999', fontSize: 30, marginTop: 2 }} />
                        {/*<InputGroup style={{ flex: 1, height: 25 }}>*/}
                        <Input ref={component => this.txt = component} onChangeText={this._onChangeText.bind(this)} placeholder='Type a message' placeholderTextColor='#999' style={{ height: 25, padding: 0, color: '#999', fontSize: 13, backgroundColor: '#fff' }} />
                        {/*</InputGroup>*/}
                        {this._renderButtonSend()}
                    </View>
                    <View style={{ flex: 1 }} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: api.height,
        width: api.width,
        zIndex: 1
    },
    wrap: {
        alignSelf: 'center',
        width: api.width * .7,
        backgroundColor: '#fff',
        borderRadius: 5,
        zIndex: 4
    },
    title: {
        alignSelf: 'center',
        paddingVertical: 5,
        fontWeight: '500'
    },
    content: {
        padding: 10,
        textAlign: 'center'
    },
    line: {
        height: 1,
        width: api.width * .7,
        backgroundColor: '#cdcdcd'
    },
    button: {
        width: api.width * .7,
        backgroundColor: 'red',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
});
mapStateToProps = (state) => ({ UIstate: state.UIstate })
mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Chat)