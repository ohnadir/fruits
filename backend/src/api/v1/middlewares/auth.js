const User = require("../user/Model")
const jwt = require('jsonwebtoken');

// Checks if user is authenticated or not 
exports.isAuthenticatedUser = async (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({message: 'UnAuthorized access'})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id);
    if (!user) {
        return res.status(403).send({ message: 'Forbidden access' })
    }
    req.decoded = decoded;
    next()
}

// Handling users roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            res.status(res.statusCode).json({
                code: 403,
                success: false,
                message : `Role (${req.user.role}) is not allowed to access this resource`
            })
        }
        next()
    }
}