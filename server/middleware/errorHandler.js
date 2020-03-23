module.exports = (err, req, res, next) => {
    var status = 500
    var message = `internal server error`
    var errors = []

    status === 500 && console.log(err) && errors.push(message)

    res.status(status).json({
        errors,
        message
    })
}