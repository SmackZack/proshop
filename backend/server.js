import express from 'express'
import dotenv from 'dotenv'
import connectDB from './Config/db.js'
import products from './Data/product.js'
import colors from 'colors'
dotenv.config()

connectDB()
const app = express()
app.get('/', (req, res) => {
    res.send("Api is running")
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id)
    res.json(product)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))