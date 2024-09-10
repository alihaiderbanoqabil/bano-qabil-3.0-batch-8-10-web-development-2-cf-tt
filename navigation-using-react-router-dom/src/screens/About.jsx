import React, { useEffect } from 'react'
// import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    useEffect(() => {
        console.log('useEffect mount');
        return () => {
            console.log('useEffect unmount');
        }
    }, [])

    return (
        <>
            {/* <Header /> */}
            About
            {/* <Footer /> */}
        </>
    )
}

export default About