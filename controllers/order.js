const Order = require('../models/Order');
const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createOrder = async (req, res) => {

    const { items: cartItems, tax, shippingFee } = req.body;

    if (!cartItems || cartItems.length < 1) {
        throw new CustomError.BadRequestError('No cart items provided');
    }
    if (!tax || !shippingFee) {
        throw new CustomError.BadRequestError(
            'Please provide tax and shipping fee'
        );
    }

    let orderItems = [];
    let subtotal = 0;

    for (const item of cartItems) {
        const dbProduct = await Product.findOne({ _id: item.product });
        if (!dbProduct) {
            throw new CustomError.NotFoundError(
                `No product with id : ${item.product}`
            );
        }
        const { name, price, image, _id } = dbProduct;
        const singleOrderItem = {
            amount: item.amount,
            name,
            price,
            image,
            product: _id,
        };
        // add item to order
        orderItems = [...orderItems, singleOrderItem];
        // calculate subtotal
        subtotal += item.amount * price;
    }
    // calculate total
    const total = tax + shippingFee + subtotal;


    const order = await Order.create({
        orderItems,
        total,
        subtotal,
        tax,
        shippingFee,
    });

    res.status(StatusCodes.CREATED).json({ order });
};

const getAllOrders = async (req, res) => {
    const orders = await Order.find({});
    res.status(StatusCodes.OK).json({ count: orders.length, orders });
};

const getSingleOrder = async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (!order) {
        throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
    }
    res.status(StatusCodes.OK).json({ order });
};

const updateOrder = async (req, res) => {
    const order = await Order.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!order) {
        throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
    }
    res.status(StatusCodes.OK).json({ order });
};

const deleteOrder = async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (!order) {
        throw new CustomError.NotFoundError(`No product with id : ${orderId}`);
    }
    await order.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Order removed.' });
};

module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder
}