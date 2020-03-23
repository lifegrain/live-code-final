module.exports = (err, req, res, next) => {
    var status = 500
    var message = `internal server error`
    var errors = []

    switch (err.name) {
        case `JsonWebTokenError`:
            status = 401
            message = `invalid token`
            errors = [`invalid token`]
            break;
    
        default:
            break;
    }

    status === 500 && console.log(err) && errors.push(message)

    res.status(status).json({
        errors,
        message
    })
}