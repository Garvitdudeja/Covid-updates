import React from 'react'
import Footer from '../Component/Footer'
import NavbarMain from '../Component/Navbar'

export default function DefaultLayout(props) {
    return (
        <div>
            <NavbarMain></NavbarMain>
            {props.children}
            <Footer></Footer>
        </div>
    )
}
