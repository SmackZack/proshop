import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import CarouselPage from '../components/CarouselPage'
import Loader from '../components/Loader'
import Product from '../components/Product'
import Message from '../components/Message'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (<>
        <MDBContainer>
            <h1 className="font-weight-light">Latest Product</h1>
            {
            loading ? <Loader />
            : error?
            <Message>{error}</Message>
            :
            <MDBRow>
                {products.map(item =>
                    <MDBCol lg={'3'} md={"6"} key={item._id} className="p-3">

                        <Product item={item} />

                    </MDBCol>)}

            </MDBRow>
            }
            
        </MDBContainer>
    </>
    )
}

export default HomeScreen
