const jwt = require(`../helpers/jwt`)
const { User } = require(`../models`)
const createError = require(`http-errors`)

module.exports = (req, res, next) => {
    var { token } = req.headers

    try {
        var decode = jwt.verify(token)
    }
    catch(err) {
        next(err)
    }

    User.findByPk(decode)
        .then(data => {
            if(data) {
                req.user = decode
                next()
            } else {
                throw createError(404, `User not Found`)
            }
        })
        .catch(next)
}