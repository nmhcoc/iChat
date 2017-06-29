import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,TouchableWithoutFeedback
} from 'react-native';
import {Button} from 'native-base' 
import api from '../api'
import { connect } from 'react-redux'
class MSG extends Component {
  render() {
    let {title,content} = this.props.UIstate
    return (
        <Modal
          transparent={true}
          animationType={'slide'}
          onRequestClose={()=>{}}
          visible={this.props.UIstate.showMessage}
        >
        <TouchableOpacity
        style={styles.container}
        onPress={()=>{ api.hideMessage() }}>
        <View style={{ flex:3 }}/>
        <View style={styles.wrap}>
          <TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.line}/>
            <Text style={styles.content}>{content}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={()=>{ api.hideMessage() }}
          >
            <Text style={{ paddingVertical:5,alignSelf:'center',color:'#fff' }}>
              Đóng
            </Text>
          </TouchableOpacity>
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
    width:api.width,
    zIndex:1
  },
  wrap: {
    alignSelf:'center',
    width:api.width*.7,
    backgroundColor:'#fff',
    borderRadius:5,
    zIndex:4
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
    width:api.width*.7,
    backgroundColor:'#cdcdcd'
   },
  button:{ 
    width:api.width*.7,
    backgroundColor:'red',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
   }
});
  mapStateToProps=(state)=>({UIstate:state.UIstate})
  mapDispatchToProps=(dispatch)=>({})
export default connect(mapStateToProps, mapDispatchToProps)(MSG)