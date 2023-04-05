const { User } = require('../models');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ErrorHandler = require('../utils/ErrorHandler');
const { registrationService, loginService } = require('./service');

exports.userRegister = async (req, res) => {
  const { status, code, message, token } = await registrationService({...req.body});
  res.status(code).json({ code, status, message, token });
};

exports.userLogin = async (req, res) => {
  const { status, code, message, token } = await loginService({...req.body});
  res.status(code).json({ code, status, message, token });
};

exports.updateUser =  catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, phone, email } = req.body;
  const id = req.params.id

  const user = await User.findOne({_id: id}).exec();
    if (!user) {
      return next(new ErrorHandler('No user Found', 400))
    }

    const isPhoneExist = await User.findOne({ phone });
    if (
      isPhoneExist &&
      phone === isPhoneExist.phone &&
      String(user._id) !== String(isPhoneExist._id)) {
      response.message = 'Phone number already taken';
      return next(new ErrorHandler('Phone number already taken', 400))
    }

    const isEmailExist = await User.findOne({ email });
    if (
      isEmailExist &&
      email === isEmailExist.email &&
      String(user._id) !== String(isEmailExist._id)) {
      return next(new ErrorHandler('Email already taken', 400))
    }

    user.firstName = firstName ? firstName : user.firstName;
    user.lastName = lastName ? lastName : user.lastName;
    user.phone = phone ? phone : user.phone;
    user.email = email ? email : user.email;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Update Successfully",
      data: user
    })
});

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findOneAndDelete({_id: id});
  if (!user) {
    return next(new ErrorHandler('No User data found', 400))
  }
  res.status(200).json({
    success: true,
    message: "User Delete Successfully"
  })
});

exports.getUsers = catchAsyncErrors(async (req, res, next)=> {

  const users = await User.find({ isDelete: false })
  if (users.length === 0) {
    return next(new ErrorHandler('No User data found', 400))
  }
  res.status(200).json({
    success: true,
    data : data
  })
});

exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {

  const id  = req.params.id ;
  const user = await User.findOne({_id: id}).select('-__v').exec();
  
  res.status(200).json({
    success: true,
    user:user
  })

});

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message : "logout Successfully"
  })
});