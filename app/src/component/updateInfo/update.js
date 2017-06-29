import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Input, InputGroup, Left, Right, Body, Title, Form, Item, Label, Radio
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
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import IconOcticons from 'react-native-vector-icons/Octicons';
import DatePicker from 'react-native-datepicker'
export class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            dob: null
        };
    }
    style = {
        item: { padding: 0, margin: 0, height: 40 },
        label: { padding: 0, margin: 0, fontSize: 13, height: 15 },
        input: { padding: 0, margin: 0, fontSize: 13, height: 25 }
    }
    render() {
        return (
            <View>
                <Form>
                    <Item inlineLabel style={this.style.item}>
                        <Label style={this.style.label}>{i18n.t('name')}</Label>
                        <Input style={this.style.input} />
                    </Item>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, borderBottomColor: '#cdcdcd', borderBottomWidth: 1 }}>
                        <Text>
                            {i18n.t('dob')}
                        </Text>
                        <DatePicker
                            style={{ flex: 1 }}
                            date={this.state.dob}
                            mode="date"
                            placeholder={i18n.t('selectDate')}
                            format="DD-MM-YYYY"
                            minDate="01-01-1900"
                            maxDate="01-01-2090"
                            confirmBtnText={i18n.t('confirm')}
                            cancelBtnText={i18n.t('cancel')}
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    marginLeft: 36,
                                    borderWidth: 0,
                                    alignItems: 'flex-start'
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({ dob: date }) }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 7, marginLeft: 15, alignItems: 'center', borderBottomColor: '#cdcdcd', borderBottomWidth: 1 }}>
                        <Text>
                            {i18n.t('gender')}
                        </Text>
                        <Text style={{ marginHorizontal: 10 }}>
                            {i18n.t('male')}
                        </Text>
                        <Radio />
                        <Text style={{ marginHorizontal: 10 }}>
                            {i18n.t('female')}
                        </Text>
                        <Radio />
                    </View>
                    <Item inlineLabel style={this.style.item}>
                        <Label style={this.style.label}>{i18n.t('phone')}</Label>
                        <Input style={this.style.input} />
                    </Item>
                    <Item inlineLabel style={this.style.item}>
                        <Label style={this.style.label}>{i18n.t('email')}</Label>
                        <Input style={this.style.input} />
                    </Item>
                    <Item inlineLabel style={this.style.item}>
                        <Label style={this.style.label}>{i18n.t('addr')}</Label>
                        <Input style={this.style.input} />
                    </Item>
                </Form>
                <Button block style={{ marginHorizontal: api.width * .1, borderRadius: 10, marginTop: 20, backgroundColor: 'red' }}>
                    <Text style={{ color: '#fff' }}>
                        {i18n.t('update').toUpperCase()}
                    </Text>
                </Button>
            </View>
        )
    }
}
mapStateToProps = (state) => {
    return { userState: state.userState, navState: state.navState }
}
mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)