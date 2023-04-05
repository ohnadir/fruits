module.exports = (err, req, res, next) => {
    console.log(err)
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error'
    res.status(400).json({
        Success: false,
        statusCode: err.statusCode,
        // message: err.message,
        stack: err.stack
    })
    next(err)
}