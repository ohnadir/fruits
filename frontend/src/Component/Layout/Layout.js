import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
const Layout=(props)=>{
    return(
        <>
            <Navbar></Navbar>
            {props.children}
            <Footer></Footer>
        </>
    )
}
export default Layout;