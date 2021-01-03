import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBBadge, MDBCard, MDBBtn } from 'mdbreact'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const increase = () => {
        setQty(qty + 1)
    }

    const decrease = () => {
        setQty(qty - 1)
    }
    console.log(qty);
    return (
        <MDBContainer>
            <MDBRow>
                {loading ? <Loader /> :
                    <>
                        <MDBCol md="6">
                            <img src={product.image} alt={product.name} className="img-fluid rounded shadow mb-4" />
                        </MDBCol>
                        <MDBCol md="6">
                            <small className="text-muted">Home/{product.category}/{product.brand}/</small>
                            <div className="h3">{product.name}</div>
                            <MDBBadge color="info">{product.brand}</MDBBadge>
                            <hr />
                            <div className="h2 green-text">${product.price}</div>
                            <hr />
                            <div className="h5 font-weight-light">Description:- {product.description}</div>
                            <hr />
                            <div>Status:- {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</div>
                            <hr />
                            <MDBRow>
                                <MDBCol md="6"><select className="browser-default custom-select" onChange={(e) => setQty(e.target.value)}>
                                    <option>Select Quantity</option>
                                    {[...Array(product.countInStock).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}
                                </select>
                                </MDBCol>
                                <MDBCol md="6"> <MDBBtn onClick={addToCartHandler} className="btn btn-block btn-success" type="button" color="success" disabled={product.countInStock === 0}><i className="fas fa-shopping-cart"></i> Add to Cart</MDBBtn></MDBCol>
                            </MDBRow>

                        </MDBCol>
                    </>
                }

            </MDBRow>
        </MDBContainer>
    )
}

export default ProductScreen
