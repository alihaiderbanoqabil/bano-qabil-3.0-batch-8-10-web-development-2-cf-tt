import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { routes } from '../routes'

const Layout = ({ children }) => {
    return (
        <>
            <Header routes={routes} isLogoVisible={true} />
            <main>{children}</main>
            <Footer />
        </>

    )
}

export default Layout