import React,{useEffect} from 'react'
import Loader from '../components/Loader'
import {useSelector,useDispatch} from 'react-redux'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Message from '../components/Message'
import { addToCart, removeFormCart } from '../actions/cartActions'

const Cart = ({match,location,history}) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log(cartItems);
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFormCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    return (
       <MDBContainer>
           <MDBRow>
               <MDBCol md="8">
                   <MDBRow>
                       <MDBCol md="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam aspernatur odit. Eveniet, dicta ea? Quo corporis ea repellendus sunt, in excepturi, ullam magnam, cupiditate repellat ipsa alias! Obcaecati, aliquid!</MDBCol>
                       <MDBCol md="3"></MDBCol>
                       <MDBCol md="4"></MDBCol>
                       <MDBCol md="2"></MDBCol>
                   </MDBRow>
               </MDBCol>
               <MDBCol md="4"></MDBCol>
           </MDBRow>
       </MDBContainer>
    )
}

export default Cart
