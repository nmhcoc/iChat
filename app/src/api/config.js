let port = '6969'
let domain = 'http://192.168.43.52'
let config={
    setPort:(port)=>{ port = port },
    getHost:()=>{ return domain+":"+port+'/' }
}
export default config