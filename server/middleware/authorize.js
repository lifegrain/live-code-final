const Model = require(`../models`)
const createError = require(`http-errors`)

module.exports = (req, res, next) => {
    Model.Reports.findByPk(Number(req.params.id))
        .then(data => {
            if (data) {
                if (data.UserId === Number(req.user)) {
                    next()
                } else {
                    throw createError(403, `You are not authorized to that action`)
                }
            } else {
                throw createError(404, `That report does not exist`)
            }
        })
        .catch(next)
}