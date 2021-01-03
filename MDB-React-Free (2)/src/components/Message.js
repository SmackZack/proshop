import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';

const AlertPage = ({children}) => {
    return (
        <MDBContainer>
            <MDBAlert color="primary" >
                {children}
            </MDBAlert>
        </MDBContainer>
    );
};

export default AlertPage;