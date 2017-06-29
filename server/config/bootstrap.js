/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {
  sails.io.on('connect', function (sk) {
    console.log('====================================');
    console.log('connect');
    console.log('====================================');
    // setInterval(()=>{
    //   sails.io.emit('message','msg')
    // },3000)
    // sails.io.on('client_send_msg', (data) => {
    //   console.log('====================================');
    //   console.log(data);
    //   console.log('====================================');  
    // })
    sk.on('client_send_msg',(data)=>{
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      sails.io.emit('server_send_msg',data)
    })
  })
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  cb();
};
