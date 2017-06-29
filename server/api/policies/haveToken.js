module.exports = (req, res, next) => {

    let token = req.headers.authorization;
    Token.findOne({token:token}).exec((err,model)=>{
        if(model) return next()
        else return res.send({
            err:1,
            msg:'Tài khoản không tồn tại hoặc đã bị đăng xuất'
        });
    })
}