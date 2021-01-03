import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'
import { removeFormWishList } from '../actions/wishlistActions'

const WishList = () => {
    const wishlist = useSelector(state => state.wishlist)
    const { wishlistItems } = wishlist
    const dispatch = useDispatch()
    const addtocart =(e,id)=>{
        e.preventDefault()
        dispatch(removeFormWishList(id))
        dispatch(addToCart(id))
    }
    return (
        <MDBContainer>
            <h1 className="font-weight-light">Wishlist Items</h1>
            {
                <MDBRow>
                    {wishlistItems.map(item =>
                        <MDBCol lg={'3'} md={"6"} key={item._id} className="p-3">

                            <MDBCard news className="rounded-lg">
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
                                    <MDBRow>
                                        <MDBCol className="text-center"><a className="grey-text m-0" href=""><i className="fas fa-shopping-cart"></i></a></MDBCol>
                                        <MDBCol className="text-center"><a className="grey-text m-0" href=""><i className="fas fa-trash"></i></a></MDBCol>
                                    </MDBRow>
                                </MDBCardBody>

                            </MDBCard>

                        </MDBCol>)}

                </MDBRow>
            }

        </MDBContainer>
    )
}

export default WishList
