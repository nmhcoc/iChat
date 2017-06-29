import {
    Container,
    Header,
    Content,
    Button,
    Icon, Form, Item, Label, Input
} from 'native-base'
import React, { PureComponent } from 'react'
import DeviceInfo from 'react-native-device-info'
import {
    Text,
    Image, StyleSheet,
    View, TextInput
} from 'react-native'
import * as Animated from 'react-native-animatable'
import { connect } from 'react-redux'
import api from '../../api'
import i18 from '../../i18'
import { Actions } from 'react-native-router-flux';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import IconOcticons from 'react-native-vector-icons/Octicons';
export class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {
        return (
            <Content>
                <Form style={{ padding: 0 }}>
                    <Item floatingLabel style={{ height: 50 }}>
                        <Label style={{ fontSize: 13 }}>{i18.t('currentPW')}</Label>
                        <Input style={{ fontSize: 13, padding: 0, lineHeight: 15, height: 20,paddingLeft:10 }} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{ fontSize: 13 }}>{i18.t('newPassword')}</Label>
                        <Input style={{ fontSize: 13, padding: 0, lineHeight: 15 }} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{ fontSize: 13 }}>{i18.t('repassword')}</Label>
                        <Input style={{ fontSize: 13, padding: 0, lineHeight: 15 }} />
                    </Item>
                    <Button block style={{ marginHorizontal: api.width * .1, borderRadius: 10, marginTop: 20, backgroundColor: 'red' }}>
                        <Text style={{ color: '#fff' }}>
                            {i18.t('update').toUpperCase()}
                        </Text>
                    </Button>
                </Form>

            </Content>
        )
    }
}

mapStateToProps = (state) => {
    return { userState: state.userState, navState: state.navState }
}
mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)