import request from './request';
import config from './config';
var dataService = {
    login(username,password){
        let url ='login'
        let data = {
            username:username,
            password:password
        }
        return request.post(url, data, 'token')
    },
}
export default dataService;