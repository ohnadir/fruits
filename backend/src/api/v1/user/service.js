const { User } = require("../models")
exports.registrationService = async ({ user_name, email, password}) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Registration successfully',
    };
  
    try {
        const isUserNameExist = await User.findOne({ user_name });
        if (isUserNameExist) {
            response.code = 400;
            response.status = 'failed';
            response.message = 'User Name already taken';
            return response;
        }
        if(email){
            const isEmailExist = await User.findOne({ email });
            if (isEmailExist) {
                response.code = 400;
                response.status = 'failed';
                response.message = 'User Name already taken';
                return response;
            }
        }
        const newUser = new User({ user_name, email, password });
        await newUser.save();
        const token = newUser.getJwtToken();
        response.token = token
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};

exports.loginService = async ({ user_name, password}) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'login successfully',
    };
  
    try {
        const user = await User.findOne({ user_name });
        if (!user) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'Incorrect credential';
            return response;
        }
            
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'Incorrect credential';
            return response;
        }
        
        const token = user.getJwtToken();
        response.token = token
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};