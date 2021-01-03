import { MDBBadge } from 'mdbreact'
import React from 'react'

const Badge = ({length}) => {
    return (
        <MDBBadge color="red" className="mt-n3 font-weight-light">{length}</MDBBadge>
    )
}

export default Badge
