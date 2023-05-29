const  User = require("./Model");
const jwt = require('jsonwebtoken');

exports.registration = async ({ body, email, name, password }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Registration successfully'
    };
    try {
        if(email){
            const isEmailExist = await User.findOne({ email : email });
            if (isEmailExist) {
                response.code = 400;
                response.status = 'failed';
                response.message = 'User Name already taken';
                return response;
            }
        }
        const user = await User.create(body);
        console.log(user);
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};
exports.login = async ({ email, password }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'login successfully',
    };
  
    try {
        const user = await User.findOne({email : email});
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
        
        response.token = user.getJwtToken();
        response.user= user
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};
exports.loadUser=async({token})=>{
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