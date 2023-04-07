const {
  registrationService, 
  loginService,
  updateService,
  deleteUserService,
  getUserService,
  getUsersService,
  getLoadUserService
} = require('./service');

exports.userRegister = async (req, res) => {
  const { status, code, message, token, user } = await registrationService({...req.body});
  res.status(code).json({ code, status, message, token, user });
};

exports.userLogin = async (req, res) => {
  const response = await loginService({...req.body});
  res.status(response.code).json(response);
};

exports.updateUser =  async(req, res) => {
  const { status, code, message } = await updateService({ ...req.query,...req.body});
  res.status(code).json({ code, status, message });
};

exports.deleteUser = async (req, res) => {
  const { status, code, message } = await deleteUserService({ ...req.query});
  res.status(code).json({ code, status, message });
};

exports.getUsers = async (req, res)=> {
  const { status, code, message, products } = await getUsersService();
  res.status(code).json({ code, status, message, products });
};

exports.getSingleUser = async (req, res) => {
  const { status, code, message } = await getUserService({ ...req.query});
  res.status(code).json({ code, status, message });
};

exports.getLoadUser = async (req, res) => {
  const { status, code, message, user } = await getLoadUserService({...req.params});
  res.status(code).json({ code, status, message, user });
};
exports.logoutUser = async (req, res) => {
  res.status(200).json({
    success: true,
    message : "logout Successfully"
  })
};