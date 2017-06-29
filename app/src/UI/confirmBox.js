import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal
} from 'react-native';
import {Button} from 'native-base' 
import api from '../api'
import { connect } from 'react-redux'
class MSG extends Component {
  render() {
    let {title,content,onConfirm,buttonText} = this.props.UIstate
    return (
        <Modal
          transparent={true}
          animationType={'slide'}
          onRequestClose={()=>{}}
          visible={this.props.UIstate.showConfirm}
        >
        <TouchableOpacity
        style={styles.container}
        onPress={()=>{ api.hideConfirmBox() }}>
        <View style={{ flex:3 }}/>
        <View style={styles.wrap}>
          <TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.line}/>
            <Text style={styles.content}>{content}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity style={[styles.button,{borderBottomLeftRadius:5}]}
            onPress={()=>{ api.hideConfirmBox() }}
             >
            <Text style={{ paddingVertical:5,alignSelf:'center',color:'#fff' }}>
              Đóng
            </Text>
            </TouchableOpacity>
            <View style={{ width:1,backgroundColor:'#cdcdcd' }}/>
            <TouchableOpacity style={[styles.button,{borderBottomRightRadius:5}]}
                onPress={onConfirm}
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
    fontWeight:'500'
  },
  content:{ 
    padding:10,
    textAlign:'center'
   },
  line:{ 
    height:1,
    width:api.height*.7,
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