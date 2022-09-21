const {photoUploader, photoGet} =require('./services')
exports.photoUpload = async (req, res) => {
  const { status, code, message,data } = await photoUploader({
    file:req.file    
  });
  res.status(code).json({ code, status, message,data });
};

exports.getPhotos = async (req, res) => {
  const { status, code, message, data } = await photoGet({  
  });
  res.status(code).json({ code, status, message, data });
};