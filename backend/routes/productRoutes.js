import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productmodel.js'


// @desc fetch all product
// @route GET /api/product
// @access Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

// @desc fetch single product
// @route GET /api/product/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.send(product)
    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
}))

export default router;