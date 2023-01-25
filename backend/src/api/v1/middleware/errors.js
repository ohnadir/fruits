module.exports = (err, req, res) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error'
    res.status(err.statusCode).json({
        Success: false,
        statusCode: err.statusCode,
        message: err.message,
        stack: err.stack
    })
}