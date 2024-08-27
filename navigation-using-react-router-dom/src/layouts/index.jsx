import React from 'react'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import { routes } from '../routes'

const Layout = ({ children }) => {
    return (
        <>
            {/* <Header routes={routes} isLogoVisible={true} /> */}
            {/* <main className='md:container mx-auto px-[5rem] bg-blue-500'>{children}</main> */}
            <main className='md:container bg-blue-500'>{children}</main>
            <Footer />
        </>

    )
}

export default Layout