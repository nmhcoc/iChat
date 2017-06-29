/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
let bcrypt = require('bcryptjs')
module.exports = {
    index(req, res) {
        User.findOne({ name: 'hung' }).then(rs => {
            if (rs.name) res.send(rs);
            console.log('====================================');
            console.log(rs.name);
            console.log('====================================');
        })
    },
    register(req, res) {
        let { username, password, fullname, dob, gender, addr, phone, email } = req.body;
        if (!username || !password) return res.send({ err: 1, msg: 'Cút' });
        password = bcrypt.hashSync(password, 10);
        let user = {
            username: username,
            password: password,
            fullname: fullname,
            dob: dob ? new Date(dob) : null,
            gender: 1,
            phone: phone,
            addr: addr,
            email: email
        }
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        User.create(user).exec((err, model) => {
            if (err) return res.send({ err: 1, msg: 'Có lỗi xảy ra' });
            else res.send(model);
            console.log('====================================');
            console.log(model);
            console.log('====================================');
        })
    },
    info(req, res) {
        Token.findOne({ token: req.headers.authorization })
            .populate('user')
            .exec((err, model) => {
                console.log('====================================');
                console.log(model);
                console.log('====================================');
            })
    },
    chat(req, res) {
        console.log('====================================');
        console.log('123');
        console.log('====================================');
        // if (!req.isSocket) {
        //     return res.badRequest();
        // }
        // if (!req.isSocket) {
        //     return res.badRequest();
        // }
    }
};

