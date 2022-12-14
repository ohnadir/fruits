const express = require('express');
const cors = require('cors');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const { readdirSync } = require('fs');
const cloudinary = require('cloudinary');
const fileUpload = require('express-fileupload')

const errorMiddleware = require('./src/api/v1/middleware/errors')

const csrfProtection = csrf({ cookie: true });

const app = express();
require('./src/api/v1/config').dbConnection();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(fileUpload());

// setting up cloudnary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

readdirSync('./src/api/v1/routes').map((route) =>
  app.use(
    `/api/v1/${route.split('.')[0]}`,
    require(`./src/api/v1/routes/${route}`)
  )
);

app.use(csrfProtection);

// Handle Middleware Error
app.use(errorMiddleware)

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

module.exports = app;
