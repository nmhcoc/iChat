/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
let passport = require('passport')
let bcrypt = require('bcryptjs')
let uuid = require('uuid/v4')
let moment = require('moment')
// let lib = require('./lib')
module.exports = {
    login(req, res) {
        let { password, username } = req.body
        console.log('====================================');
        console.log('login: username =', username, 'password =', password);
        console.log('====================================');
        User.findOne({ username: username }).exec((err, user) => {
            console.log('====================================');
            console.log(user);
            console.log('====================================');
            if (err) return res.send({ err: 1, msg: 'Lỗi hệ thống' });
            if(!user) return res.send({ err: 1, msg: 'Sai tên đăng nhập' });
            if (bcrypt.compareSync(password, user.password)) {
                let token = uuid()
                let exper = moment(new Date()).add(30, 'm').format('MM-DD-YYYY HH:mm')
                Token.findOne({ userId: user.id }).exec((err, model) => {
                    if (model && !err) {
                        return Token.update({ userId: user.id }, { token: token, experied: exper }).exec((err, model) => {
                            res.send({ err: 0, msg: 'Đăng nhập thành công', token: token })
                        })
                    } else {
                        return Token.create({
                            userId: user.id,
                            token: token,
                            experied: exper
                        }).exec((err, model) => {
                            if (err) return res.send({ err: 1, msg: 'Lỗi hệ thống' });
                            else return res.send({ err: 0, msg: 'Đăng nhập thành công!', token: token })
                        })
                    }
                })

            } else {
                res.send({ err: 1, msg: 'Sai mật khẩu' });
            }
        })

    },
    logout(req, res) {
        let token = req.headers.authorization;
        Token.destroy({token:token}).exec((err,model)=>{
            if(err) res.send({err:1,msg:'Lỗi hê thống'});
            else return res.send({err:0,msg:'Đăng xuất thành công'});
        })
    }
};