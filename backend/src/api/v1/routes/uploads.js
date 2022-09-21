const router = require('express').Router();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({storage: storage});
const {photoUpload, getPhotos} = require('../photoUploader/controler')

router.post('/upload', upload.single("image"), photoUpload);
router.get('/upload',  getPhotos);


module.exports = router;
