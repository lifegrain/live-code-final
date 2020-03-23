const Model = require(`../models`)
const jwt = require(`../helpers/jwt`)

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
                var token = jwt.sign(data.id)

                res.status(200).json({
                    token,
                    id: data.id,
                    username: data.username
                })
            })
            .catch(next)
    }
}

module.exports = User