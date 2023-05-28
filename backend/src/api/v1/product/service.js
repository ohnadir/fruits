const {Product} = require('../models') 
const APIFeatures = require('../utils/APIFeatures');

exports.addProductService= async(name, price, desc, productPictures, category)=>{
    const response = {
        status: true,
        statusCode: 200,
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
        const product = new Product({
            name,
            price,
            desc,
            productPictures,
            category
          });
        await product.save();
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}
exports.getProductsService = async()=>{
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

exports.getProductService = async({id})=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'Product fetch successfully',
    };
    try {
        const product = await Product.findOne({ _id : id});
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

exports.searchProductService = async(keyword)=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'Search Product fetch successfully',
    };
    try {
        const apiFeatures = new APIFeatures(Product.find(), keyword)
            .search()
            .filter()

        let products = await apiFeatures.query;
        if (!products) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'Product not found';
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

exports.deleteProductService = async(id)=>{
    const response = {
        status: true,
        statusCode: 200,
        message:"Delete Product Successfully"
    };
    try {
        const product = await Product.findOneAndDelete({ id });
        if (!product) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Product found by this id';
            return response;
        }
        await product.save();
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}

exports.updateProductService = async({id, name, img, price})=>{
    const response = {
        code: 200,
        status: 'success',
        message: 'Product Update successfully'
    };
    try {
        const product = await Product.findOne({ _id: id }).exec();
        if (!product) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Product found by this id';
            return response;
        }

        const isNameExist = await Product.findOne({ name });
        if (
        isNameExist &&
        name === isNameExist.name &&
        String(product._id) !== String(isNameExist._id)
        ) {
            response.code = 422;
            response.status = 'failed';
            response.message = 'Already taken this name';
            return response;
        }

        product.name = name ? name : product.name;
        product.price = price ? price : product.price;
        product.desc = desc ? desc : product.desc;

        await product.save();
        return response
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}