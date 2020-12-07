import express from 'express'
import dotenv from 'dotenv'
import connectDB from './Config/db.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import colors from 'colors'

//Routes
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send("Api is running")
})
//Products
app.use('/api/products', productRoutes)
//Error
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))