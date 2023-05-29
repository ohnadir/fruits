const { registration, login, loadUser } = require("./service")

exports.register = async (req, res) => {
  const { status, code, message, token, user } = await registration({
    body:req.body,
    ...req.body
  });
  res.status(code).json({ code, status, message, token, user });
};
  
exports.login = async (req, res) => {
  const { status, code, message, token, user } = await login({
    body:req.body,
    ...req.body
  });
  res.status(code).json({ code, status, message, token, user });
};

exports.loadUser = async (req, res) => {
  const { status, code, message, user } = await loadUser({...req.params});
  res.status(code).json({ code, status, message, user });
};