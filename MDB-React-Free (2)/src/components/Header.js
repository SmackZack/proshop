import React, { useState } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon
} from "mdbreact";
import Badge from './Badge'
import { useSelector } from 'react-redux'
import Cart from '../screens/Cart';

const Header = () => {
    const [current, setCurrent] = useState('/')
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }
    const wishlist = useSelector(state => state.wishlist)
    const { wishlistItems } = wishlist
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    return (

        <MDBNavbar color="blue darken-3" dark expand="md" fixed="top">
            <MDBContainer>
                <MDBNavbarBrand>
                    <strong className="white-text h3 font-weight-normal">ProShop</strong>

                </MDBNavbarBrand>
                
                   <MDBNavbarNav right className="flex-row h4">
                    {/* <div className="my-auto w-75 w-sm-100">
                        <input className="form-control rounded-sm border" type="text" placeholder="Search" aria-label="Search" />
                    </div> */}
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav >
                                <span><MDBIcon icon="user" /></span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="p-0 shadow">
                                <MDBDropdownItem href="#!" className="border-top border-bottom border-light">Profile</MDBDropdownItem>
                                <MDBDropdownItem href="#!" className="border-top border-bottom border-light">Logout</MDBDropdownItem>

                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                    <MDBNavItem active={!current}>
                        <MDBNavLink to="/"><MDBIcon icon="home" /></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={current === 'cart'}>
                        <MDBNavLink to="/cart"><MDBIcon icon="shopping-cart" /><sup>
                            {<Badge length={cartItems.length} />}
                        </sup></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={current === 'wishlist'}>
                        <MDBNavLink to="/wishlist"><MDBIcon icon="heart" /><sup><Badge length={wishlistItems.length} /></sup></MDBNavLink>
                    </MDBNavItem>

                </MDBNavbarNav>
               
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header
