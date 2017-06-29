let initState={
    // message box
    showMessage:false,
    title:'',
    content:'',
    // confirm box
    showConfirm:false,
    onConfirm:()=>{},
    buttonText:'',
    // input box
    showInput:false,
    placeholder:''
}
export default (state=initState,action)=>{
    switch (action.type) {
        case 'showMessage':
            return {
                ...state,
                showMessage:true,
                title:action.title,
                content:action.content
                }
        case 'hideMessage':
            return {...state,showMessage:false}
        case 'showConfirm':
            return {
                ...state,
                showConfirm:true,
                onConfirm:action.onConfirm,
                title:action.title,
                content:action.content,
                buttonText:action.buttonText
                }
        case 'hideConfirm':
            return {...state,showConfirm:false}
        case 'showInput':
            return {
                ...state,
                showInput:true,
                onConfirm:action.onConfirm,
                title:action.title,
                content:action.content,
                buttonText:action.buttonText,
                placeholder:action.placeholder
            }
        case 'hideInput':
            return {...state,showInput:false}
        default:
            break;
    }
    return state;
}