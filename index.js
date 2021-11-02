const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const userRoute = require('./router/user')
const authRoute = require('./router/auth')
const productRoute = require('./router/product')
const cartRoute = require('./router/cart')
const orderRoute = require('./router/order')
const stripeRoute = require('./router/stripe')
const cors = require("cors")
dotenv.config();
// Import DB
const db = require('./config/db')
    // // Connect DB
db.connect();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use(express.json())
app.use(cors())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkout', stripeRoute)
app.listen(8586, () => {
    console.log('Backend Server Is Running');
})