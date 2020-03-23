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
    
        case `ForbiddenError`:
            status = 403
            message = err.message
            errors = [err.message]
            break;
    
        case `NotFoundError`:
            status = 404
            message = err.message
            errors = [err.message]
            break;

        case `BadRequestError`:
            status = 400
            message = err.message
            errors = [err.message]
            break;
    }

    status === 500 && console.log(err) && errors.push(`internal server error`)

    res.status(status).json({
        errors,
        message
    })
}