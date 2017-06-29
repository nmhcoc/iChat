let passport = require('passport')
let LocalStrategy = require('passport-local')
let BearerStrategy = require('passport-http-bearer')
let bcrypt = require('bcryptjs')
let uuid = require('uuid/v4')

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    return done(null, user)
})


passport.use(new LocalStrategy((username, password, done) => {
    console.log('====================================');
    console.log('use', username, password);
    console.log('====================================');
    User.findOne({ username: username }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { msg: 'Không tìm thấy tên đăng nhập' })
        if (bcrypt.compareSync(password, user.password)) {
            console.log('====================================');
            console.log('userId',user.id);
            console.log('====================================');
            Token.findOne({ userId: user.id }).populate('user').exec((err,modelToken) => {
                if (modelToken) {
                    return done(null, {token:modelToken.token}, { msg: 'Đăng nhập thành công' })
                }
                let tk = uuid()
                let addTk = {
                    userId: user.id,
                    token: tk
                }
                Token.create(addTk).exec((errors, model) => {
                    if (err) return done(null, false, { msg: 'Đăng nhập thất bại' })
                    done(null, {token:model.token}, { msg: 'Đăng nhập thành công' })
                })
            })
            // return done(null, user, { msg: 'Đăng nhập thành công!' });
        }
        else return done(null, false, { msg: 'Mật khẩu không đúng' })
    })
}
))
passport.use(new BearerStrategy((token, done) => {
    console.log('====================================');
    console.log('token', token);
    console.log('====================================');
    User.findOne({ id: token }).then((user) => {
        console.log('====================================');
        console.log('user', user);
        console.log('====================================');
        if (!user) {
            done(null, false)
        } else {
            return done(null, user, { msg: 'Đăng nhập thành công' });
        }
    })
}));