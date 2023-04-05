const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require("dotenv");
const app = express();
const connectDb = require("./src/api/v1/config");
// const ErrorMiddleware = require('./src/api/v1/middleware/errors')

// config dot env file and connected mongodb
dotenv.config();
connectDb();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(ErrorMiddleware)

// all route
const productRoute = require("./src/api/v1/routes/products");
const userRoute = require("./src/api/v1/routes/users");  
const orderRoute = require("./src/api/v1/routes/orders");  
const paymentRoute = require("./src/api/v1/routes/payment");

// user route 
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/payments", paymentRoute);


const PORT = process.env.PORT
const HOST = process.env.HOST

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/', (req, res) => {
  res.send('Fruits Testing connection')
})

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}, url http://${HOST}:${PORT}`);
});