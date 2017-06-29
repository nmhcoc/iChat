let initState={
    token:''
}
export default (state=initState,action)=>{
    switch (action.type) {
        case 'setToken':
            return {...state,token:action.token}
        default:
            break;
    }
    return state;
}