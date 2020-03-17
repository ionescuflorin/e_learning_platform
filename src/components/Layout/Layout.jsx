import React from 'react'
import './Layout.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
                {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout
