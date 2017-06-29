import config from './config'
const request = {
    get: (url) => {
        //console.log(url)
        return fetch(url)
        .catch(err=>{api.showMessage('Vui lòng kiểm tra kết nối internet hoặc khởi động lại ứng dụng')})
        .then((response) => response.json())
    },
    post: (url, data, token) => {
        url = config.getHost()+url
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }).then((response) => {
                try {
                    return response.text()
                } catch (err) {
                    reject({err: 2, msg: 'Phiên làm việc hết hạn'})
                }
            }).then((data) => {
                console.info(data);
                
                resolve(JSON.parse(data, (key, value) => {
  return value && value.type == 'Buffer'
    ? Buffer.from(value.data)
    : value;
}));
            }).catch((err) => {
                reject({err: 1, msg: 'Vui lòng kiểm tra kết nối mạng'})
            })
        });

    }
}

export default request