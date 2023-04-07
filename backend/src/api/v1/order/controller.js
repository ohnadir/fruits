const {orderService} = require("./service.js")
exports.newOrder = async (req, res) => {
    const { status, code, message } = await orderService({...req.body});
    res.status(code).json({ code, status, message });
};

exports.emailBaseOrder = async (req, res) => {
    const { status, code, message } = await orderService({...req.query});
    res.status(code).json({ code, status, message });
};