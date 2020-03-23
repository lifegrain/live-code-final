const jwt = require(`jsonwebtoken`)
const secret = process.env.JWT_SECRET

function sign(data) {
    return jwt.sign(data, secret)
}

function verify(token) {
    return jwt.verify(token, secret)
}

module.exports = {
    sign,
    verify
}