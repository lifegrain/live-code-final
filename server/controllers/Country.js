const Model = require(`../models`)

class Country {
    static getAll(req, res, next) {
        Model.Country.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
}

module.exports = Country