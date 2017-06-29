import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,Keyboard
} from 'react-native';
import {Input,InputGroup} from 'native-base' 
import api from '../api'
import { connect } from 'react-redux'
class MSG extends Component {

    render() {
    let text = ''
    let {title,content,onConfirm,buttonText,showInput,placeholder} = this.props.UIstate
    if(!showInput) text = ''
    return (
        <Modal
          transparent={true}
          animationType={'slide'}
          onRequestClose={()=>{}}
          visible={showInput}
        >
        <TouchableOpacity
        style={styles.container}
        onPress={()=>{ api.hideInputBox() }}>
        <View style={{ flex:3 }}/>
        <View style={styles.wrap}>
          <TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.line}/>
            <Text style={styles.content}>{content}</Text>
         
          <InputGroup>
            <Input onChangeText={(t)=>{ text = t }} placeholder={placeholder} placeholderTextColor='#cdcdcd' style={{ marginLeft:5,padding:0,height:25 ,borderWidth:1,borderColor:'#cdcdcd',fontSize:api.fontSmall,color:'#cdcdcd',marginRight:10,alignSelf:'center',borderRadius:2,marginBottom:10 }}/>
          </InputGroup>
           </TouchableOpacity>
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity style={[styles.button,{borderBottomLeftRadius:5}]}
            onPress={()=>{ api.hideInputBox() }}
             >
            <Text style={{ paddingVertical:5,alignSelf:'center',color:'#fff' }}>
              Đóng
            </Text>
            </TouchableOpacity>
            <View style={{ width:1,backgroundColor:'#cdcdcd' }}/>
            <TouchableOpacity style={[styles.button,{borderBottomRightRadius:5}]}
                onPress={()=>{onConfirm(text);Keyboard.dismiss()}}
            >
                <Text style={{ paddingVertical:5,alignSelf:'center',color:'#fff' }}>
                {buttonText}
                </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex:5 }}/>
        </TouchableOpacity>
        </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    height:api.height,
    width:api.width
  },
  wrap: {
    alignSelf:'center',
    width:api.width*.7,
    backgroundColor:'#fff',
    borderRadius:5,
  },
  title:{
    alignSelf:'center',
    paddingVertical:5,
    fontWeight:'500',
    fontSize:api.fontNormal
  },
  content:{ 
    padding:10,
    textAlign:'center'
   },
  line:{ 
    height:1,
    width:api.width*.7,
    backgroundColor:'#cdcdcd'
   },
  button:{ 
    width:api.width*.35,
    backgroundColor:'red',
    // borderBottomLeftRadius:5,
    // borderBottomRightRadius:5
   }
});
  mapStateToProps=(state)=>({UIstate:state.UIstate})
  mapDispatchToProps=(dispatch)=>({})
export default connect(mapStateToProps, mapDispatchToProps)(MSG)