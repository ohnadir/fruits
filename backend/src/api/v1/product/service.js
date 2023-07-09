const { Product } = require('./Model') 

exports.addProduct= async({ name, body })=>{
    const response = {
        code: 200,
        status: "success",
        message:"Add Product Successfully"
    };
    try {
        const isNameExist = await Product.findOne({ name });
        if (isNameExist) {
            response.code = 42;
            response.status = 'failed';
            response.message = 'Name already taken';
            return response;
        }
        const product = new Product(body);
        await product.save();
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}
exports.Products = async()=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'Products fetch successfully',
    };
    try {
        const products = await Product.find({});
        if (!products) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Product found at this moment';
            return response;
        }
        response.products = products
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}

exports.Product = async({id})=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'Product fetch successfully',
    };
    try {
        const product = await Product.findOne({ _id: id});
        if (!product) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Product found by this id';
            return response;
        }
        response.product = product
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}
exports.SearchProduct= async ({ req }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Search data found successfully'
    };
  
    try {
        const q = req;
        let query = {};
        if (q !== 'undefined' || q !== undefined || q) {
            let regex = new RegExp(q, 'i');
            query = { ...query, $or: [{ name: regex }, { category: regex }]};
        }
  
        const data = await Product.find(query)
        if (data.length === 0) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Search data found';
        }
        response.products = data;
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};