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
} from 'react-native'
import * as Animated from 'react-native-animatable'
import { connect } from 'react-redux'
import api from '../../api'
import i18n from '../../i18'
import { Actions } from 'react-native-router-flux';
import Update from './update'
import ChangPW from './changePassword'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import IconOcticons from 'react-native-vector-icons/Octicons';
export class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            animation: 'slideInLeft',
            index: 0,
            routes: [
                { key: '1', title: 'Cập nhật thông tin' },
                { key: '2', title: 'Đổi mật khẩu' },
                { key: '3', title: 'Cập nhật thông tin' },
                { key: '4', title: 'Đổi mật khẩu' },
                { key: '5', title: 'Cập nhật thông tin' },
                { key: '6', title: 'Đổi mật khẩu' },
                { key: '7', title: 'Cập nhật thông tin' },
                { key: '8', title: 'Đổi mật khẩu' }
            ],
        };
    }
    _handleChangeTab = index => this.setState({ index });
    _handleChangeTab = index => this.setState({ index });

    _renderHeader = props => <TabBar scrollEnabled {...props} labelStyle={{ fontSize: 12 }} />;

    _renderScene = SceneMap({
        '1': Update,
        '2': ChangPW,
        '3': Update,
        '4': ChangPW,
        '5': Update,
        '6': ChangPW,
        '7': Update,
        '8': ChangPW,
    });
    render() {
        return (
            <Container>

                <Header>
                    <Left>
                        <Button
                            onPress={Actions.pop}
                        >
                            <Icon name='ios-arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>
                            Nguyen Manh Hung
                        </Title>
                    </Body>
                </Header>
                <View style={{ height: api.height - 56 }}>
                    <TabViewAnimated
                        style={styles.container}
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderHeader={this._renderHeader}
                        onRequestChangeTab={this._handleChangeTab}
                    />
                </View>
            </Container>
        )
    }
}

mapStateToProps = (state) => {
    return { userState: state.userState, navState: state.navState }
}
mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});