import {Dimensions,StatusBar} from 'react-native'
import moment from 'moment'
let store  = {}
export default api ={
    setStore(_store){
        store=_store
    },
    height: Dimensions.get('screen').height - StatusBar.currentHeight
    ,
    width: Dimensions.get('screen').width
    ,
    //define fontsize
    fontSmall:13,
    fontNormal:15,
    fontBig:17,
    fontVeryBig:20,
    // ui presentation
    showMessage(title,content){
        store.dispatch({type:'showMessage',title:title,content:content})
    },
    hideMessage(){
        store.dispatch({type:'hideMessage'})
    },
    showConfirmBox(title,content,onConfirm,buttonText){
        store.dispatch({type:'showConfirm',title:title,content:content,onConfirm:onConfirm,buttonText:buttonText})
    },
    hideConfirmBox(title,content,onConfirm){
        store.dispatch({type:'hideConfirm'})
    },
    showInputBox(title,content,onConfirm,buttonText,placeholder){
        store.dispatch({type:'showInput',title:title,content:content,onConfirm:onConfirm,buttonText:buttonText,placeholder:placeholder})
    },
    hideInputBox(title,content,onConfirm){
        store.dispatch({type:'hideInput'})
    },
    setToken(token){
        store.dispatch({type:'setToken',token:token})
    },
    // get time width format
    getTime(time,format){
    let zone = Math.abs(new Date().getTimezoneOffset()/60);
       return moment(time).utcOffset(zone).format(format)
    },
}