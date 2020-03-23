const Model = require(`../models`)
const jwt = require(`../helpers/jwt`)
const createError = require(`http-errors`)

class User {
    static login(req, res, next) {
        var { username, password } = req.body

        Model.User.findOne({
            where: {
                username,
                password
            }
        })
            .then(data => {
                if(data) {
                    var token = jwt.sign(data.id)
    
                    res.status(200).json({
                        token,
                        id: data.id,
                        username: data.username
                    })
                } else {
                    throw createError(400, `wrong email/password`)
                }
            })
            .catch(next)
    }
}

module.exports = User