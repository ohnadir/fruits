const { User } = require("./Model")
const jwt = require('jsonwebtoken');

exports.registrationService = async ({ body, email }) => {
    const response = {
      code: 200,
      success : true,
      status: 'success',
      message: 'Registration successfully'
    };
    try {
        console.log(User)
        if(email){
            const isEmailExist = await User.findOne({ email });
            if (isEmailExist) {
                response.code = 400;
                response.success = false;
                response.status = 'failed';
                response.message = 'User Name already taken';
                return response;
            }
        }
        console.log(body);
        const newUser = new User(body);
        console.log(newUser)
        await newUser.save();
        console.log(newUser)
        // response.token = newUser.getJwtToken();
        // response.user= newUser;
        return response;
    } catch (error) {
        response.code = 500;
        response.success = false;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};

exports.loginService = async ({ email, password }) => {
    const response = {
      code: 200,
      success : true,
      status: 'success',
      message: 'login successfully',
    };
  
    try {
        const user = await User.findOne({email : email});
        if (!user) {
            response.code = 404;
            response.success = false;
            response.status = 'failed';
            response.message = 'Incorrect credential';
            return response;
        }
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            response.code = 404;
            response.success = false;
            response.status = 'failed';
            response.message = 'Incorrect credential';
            return response;
        }
        
        response.token = user.getJwtToken();
        response.user= user
        return response;
    } catch (error) {
        response.code = 500;
        response.success = false;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};

exports.updateService = async({id, firstName, lastName, phone, email})=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'user Update  successfully',
    };
    try {
        const user = await User.findOne({_id: id}).exec();
        if (!user) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'User not found by this id';
            return response;
        }
        const isPhoneExist = await User.findOne({ phone });
        if (
        isPhoneExist &&
        phone === isPhoneExist.phone &&
        String(user._id) !== String(isPhoneExist._id)) {
            response.code = 400;
            response.status = 'failed';
            response.message = 'Phone number already taken';
            return response;
        }

        const isEmailExist = await User.findOne({ email });
        if (
        isEmailExist &&
        email === isEmailExist.email &&
        String(user._id) !== String(isEmailExist._id)) {
            response.code = 400;
            response.status = 'failed';
            response.message = 'Email already taken';
            return response;
        }

        user.firstName = firstName ? firstName : user.firstName;
        user.lastName = lastName ? lastName : user.lastName;
        user.phone = phone ? phone : user.phone;
        user.email = email ? email : user.email;
        await user.save();
        return response
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }

}
exports.deleteUserService=async(id)=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'User Delete successfully',
    };
    try {
        const user = await User.findOneAndDelete({_id: id});
        if (!user) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'User not found by this id';
            return response;
        }
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}
exports.getUserService=async(id)=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'Single user successfully',
    };
    try {
        const user = await User.findOne({_id: id}).exec();
        if (!user) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'User not found by this id';
            return response;
        }
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}
exports.getUsersService=async()=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'Users successfully',
    };
    try {
        const user = await User.findOne({}).exec();
        if (!user) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No user product';
            return response;
        }
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}

exports.getLoadUserService=async({token})=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'Load user successfully',
    };
    try {
        if (!token) {
            response.code = 401;
            response.status = 'failed';
            response.message = 'User not found by this token';
            return response;
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById({_id: decoded.id});
        response.user = user;
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}