const { order, emailOrder } = require("./service")


exports.order = async (req, res) => {
    const { status, code, message } = await order({...req.body});
    res.status(code).json({ code, status, message });
};

exports.emailOrder = async (req, res) => {
    const { status, code, message } = await emailOrder({email : req.query.email});
    res.status(code).json({ code, status, message });
};