import React from 'react'
import './Loader.css'
import {MDBContainer} from 'mdbreact'

const Loader = () => {
    return (
       <MDBContainer className="text-center my-5">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
       </MDBContainer>
    )
}

export default Loader
