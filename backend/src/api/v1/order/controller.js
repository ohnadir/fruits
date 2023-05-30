const { Order, emailOrder } = require("./service")


exports.order = async (req, res) => {
    const { code, status, message, order } = await Order({ body:req.body});
    res.status(code).json({ code, status, message, order });
};

exports.emailOrder = async (req, res) => {
    const { status, code, message } = await emailOrder({email : req.query.email});
    res.status(code).json({ code, status, message });
};