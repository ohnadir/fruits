const { Product } = require('./Model') 
const APIFeatures = require('../utils/APIFeatures');

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
exports.SearchProduct= async ({ keyword}) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Search data found successfully'
    };
  
    try {
        let queryObject = {};
        if(keyword){
            if (keyword !== 'undefined' || keyword !== undefined || keyword) {
                let regex = new RegExp(keyword, 'i');
                queryObject = {
                    ...queryObject,
                    $or: [{ name: regex }],
                };
            }
        }

        let apiData = Product.find(queryObject);
        const data = await apiData;
        if (data.length === 0) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Search data found';
            return response
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

exports.CategoryProduct= async ({category}) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Search data found successfully'
    };
  
    try {
        const data = await Product.find({ category : category});
        if (data.length === 0) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Search data found';
            return response
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

exports.FilterProduct= async ({filter}) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Search data found successfully'
    };
  
    try {
        let queryObject = {};
        
        let apiData = Product.find(queryObject);
        if(filter === "high2low"){
            apiData.sort("-price")
        }
        if(filter === "low2high"){
            apiData.sort("price")
        }
        
        if(filter === "a2z"){
            apiData.sort("name")
        }
        if(filter === "z2a"){
            apiData.sort("-name")
        }
        

        const data = await apiData;
        if (data.length === 0) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Search data found';
            return response
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

exports.RatingProduct= async ({ maxRating, minRating }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Search data found successfully'
    };
  
    try {
        
        const data = await Product.find({
            rating: { $gte: parseInt(minRating), $lte: parseInt(maxRating)}
        });
        if (data.length === 0) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Search data found';
            return response
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

exports.PriceProduct= async ({ minPrice, maxPrice }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Search data found successfully'
    };
  
    try {
  
        const data = await Product.find({
            price: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice)}}
        );
        if (data.length === 0) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Search data found';
            return response
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