#### Setup Basic Express Server

- [] import express and assign to variable
- [] setup start port variable (3000) and start function

#### Connect To DB

- [] get connection string
- [] setup .env with MONGO_URL variable and assign the value
- [] import 'dotenv' and setup package
- [] import connect() and invoke in the starter
- [] restart the server

#### Basic Routes and Middleware

- [] setup express.json() middleware
- [] setup 404 and errorHandler middleware
- [] import 'exress-async-errors' package

#### 404 vs ErrorHandler Middleware

#### User Model

- [] create models folder and User.js file
- [] create schema with name,email, password, role (all type:String)
- [] export mongoose model

#### Auth Routes Structure

- [] create controllers folder
- [] add auth file
- [] export (register,login,getAllUsers,getSingleUser,updateUser,updateUserPassword,deleteUser) functions
- [] create routes folder
- [] setup auth file
- [] import all controllers
- [] post('/register') post('/login') get('/logout') get('/') get('/:id') patch('/updateuser/:id')     patch('updatepassword/:id') delete('/:id')
- [] import authRoutes as authRouter in the app.js
- [] setup app.use('/api/v1/auth', authRouter)


#### Handle Password

- [] UserSchema.pre('save') - hook
- this points to User
- bcrypt.genSalt - number of rounds
- bcrypt.hash

#### JWT

- [] require 'jsonwebtoken' package
- [] create jwt - jwt.sign(payload,secret,options)
- [] verify jwt - jwt.verify(token,secret)
- [] add variables in .env JWT_SECRET=saeed and JWT_LIFETIME=20d

#### Product Model

- [] create Product.js in models folder
- [] create Schema
- [] name : {type:String}
- [] price: {type:Number}
- [] description: {type:String}
- [] image: {type:String}
- [] category: {type:String}
- [] company: {type:String}
- [] colors: {type:[]}
- [] featured: {type:Boolean}
- [] freeShipping: {type:Boolean}
- [] inventory:{type:Number}
- [] averageRating:{type:Number}
- [] set timestamps
- [] export Product model

#### Product Structure

- [] add productController file in controllers
- [] export (createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct) functions
- [] setup product file in routes
- [] import all controllers
- [] import productRoutes as productRouter in the app.js
- [] setup app.use('/api/v1/products', productRouter)

#### Order Schema

- [] create Order.js in models folder
- [] create Schema
- [] tax : {type:Number}
- [] shippingFee: {type:Number}
- [] subtotal: {type:Number}
- [] total: {type:Number}
- [] orderItems:[]
- [] user
- [] set timestamps
- [] export Order model

#### Order Structure

- [] add orderController file in controllers
- [] export (getAllOrders, getSingleOrder,createOrder, updateOrder, deleteOrder) functions
- [] setup order file in routes
- [] import all controllers
- [] authenticate user in all routes
- [] import orderRoutes as orderRouter in the app.js
- [] setup app.use('/api/v1/orders', orderRouter)