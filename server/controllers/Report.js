const Model = require(`../models`)
const createError = require(`http-errors`)

class Report {
    static read(req, res, next) {
        Model.Reports.findAll({
            where: {
                UserId: req.user
            },
            include: [Model.Country]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static create(req, res, next) {
        var { cases, CountryId } = req.body
        var id

        Model.Reports.create({
            cases,
            CountryId,
            UserId: req.user
        }, {
            include: [Model.Country]
        })
            .then(data => {
                id = data.id

                return Model.Country.findByPk(CountryId)
            })
            .then(data => {
                console.log(cases)

                cases += Number(data.cases)

                Model.Country.update({
                    cases
                }, {
                    where: {
                        id: CountryId
                    }
                })

                return Model.Reports.findByPk(id, {
                    include: [Model.Country]
                })
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        var info

        Model.Reports.findByPk(Number(req.params.id))
            .then(data => {
                info = data

                return Model.Reports.destroy({
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then(data => {
                if (data) {
                    return Model.Country.findByPk(info.CountryId)
                } else {
                    throw createError(404, `That Report does not exist`)
                }
            })
            .then(data => {
                Number(data.cases) -= Number(info.cases)
                var country = data

                res.status(200).json({
                    country,
                    report: `Successfully delete`
                })
            })
    }
}

module.exports = Report