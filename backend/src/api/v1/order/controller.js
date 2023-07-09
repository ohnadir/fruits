const { Order, emailOrder, OrderDetails } = require("./service")


exports.order = async (req, res) => {
    const { code, status, message, order } = await Order({ body:req.body});
    res.status(code).json({ code, status, message, order });
};

exports.orderDetails = async (req, res) => {
    const { code, status, message, order } = await OrderDetails({ id:req.params.id });
    res.status(code).json({ code, status, message, order });
};

exports.emailOrder = async (req, res) => {
    const { status, code, message, orders } = await emailOrder({email : req.params.email});
    res.status(code).json({ code, status, message, orders });
};