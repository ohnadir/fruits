const { Photo } = require('../models');

exports.photoUploader = async ({ file }) => {
  console.log(file);
  const response = {
    code: 201,
    status: 'Success',
    message: 'Photo Upload successfully',
  };
  
  try {
    const newPhoto = new Photo({
      name:file.originalname,
      image:file.filename
    });
    console.log(newPhoto)
    await newPhoto.save();
    response.data=newPhoto
    return response;
  } catch (error) {
    response.code = 500;
    response.status = 'failed';
    response.message = 'Error. Try again';
    return response;
  }
};

exports.photoGet = async () => {
  const response = {
    code: 201,
    status: 'Success',
    message: 'Photo Fetch successfully',
  };
  
  try {
    const photos = await Photo.find({});
    response.data= photos;
    return response;
  } catch (error) {
    response.code = 500;
    response.status = 'failed';
    response.message = 'Error. Try again';
    return response;
  }
};