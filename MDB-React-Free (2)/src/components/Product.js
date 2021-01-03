import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdbreact'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToWishList} from '../actions/wishlistActions'

const Product = ({ item }) => {
    const dispatch = useDispatch()
    const wishlistHandler = (id) => {
        dispatch(addToWishList(id))
    }
    return (
        <MDBCard news className="position-relative">
            <Link to={`product/${item._id}`}>
                <MDBCardImage className="img-fluid" src={item.image} waves />
            </Link>
            <MDBCardBody>
                <Link to={`product/${item._id}`}>
                    {item.name}
                </Link>
                <div className="green-text">${item.price}</div>
                <MDBCardText>

                </MDBCardText>
            </MDBCardBody>
            <a onClick={()=>wishlistHandler(item._id)} className="position-absolute" style={{ bottom: "0%", right: "0%" }}><i className="grey-text far m-3 fa-heart"></i></a>
        </MDBCard>
    )
}

export default Product
