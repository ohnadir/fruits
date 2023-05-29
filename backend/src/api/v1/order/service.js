const {Order} = require('./Model');

exports.order = async({ body })=>{
    const response = {
        status: true,
        statusCode: 200,
        message:"Add Product Successfully"
    };
    try {
        const result = await Order.create(body);
        await result.save();
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}

exports.emailOrder=async({email})=>{
    const response = {
        status: true,
        statusCode: 200,
        message:"Email based Product Successfully"
    };
    try {
        const result = await Order.find({email: email});
        if(!result){
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Product found by this id';
            return response;
        }
        response.product = result
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}