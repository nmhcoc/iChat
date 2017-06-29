module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    else return res.send({
        err: 404,
        msg: 'unAuthenticate'
    });
}