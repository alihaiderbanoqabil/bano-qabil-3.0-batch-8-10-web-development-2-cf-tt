// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link, NavLink } from 'react-router-dom';
// import Button from './button/Button';


// const Header = ({ routes = [], isLogoVisible }) => {
//     console.log({ routes });

//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 {isLogoVisible && <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>}

//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         {routes.map(({ path, title }, index) => {
//                             return title && (
//                                 <NavLink key={`${index}-${path}`} to={`${path}`}
//                                     // className='nav-link'
//                                     className={({ isActive, isPending }) => {
//                                         console.log({ isActive, isPending });
//                                         //  isActive ? "active nav-link" : "nav-link"
//                                         return `nav-link ${isActive ? `isActive}` : ""}`;
//                                     }}

//                                 // style={({ isActive, isPending, isTransitioning }) => {

//                                 //     // console.log({ isActive, isPending, isTransitioning });

//                                 //     return {
//                                 //         fontWeight: isActive ? "bold" : "",
//                                 //         // color: isPending ? "red" : "black",
//                                 //         // viewTransitionName: isTransitioning ? "slide" : "",
//                                 //     };
//                                 // }}
//                                 >{title}</NavLink>
//                             )
//                         })}
//                         <Button />
//                         {/* {routes.map(({ path, title }, index) => {
//                             return title && (
//                                 <NavLink key={`${index}-${path}`} to={`${path}`}
//                                     // className='nav-link'
//                                     className={({ isActive, isPending }) => {
//                                         console.log({ isActive, isPending });
//                                         //  isActive ? "active nav-link" : "nav-link"
//                                         return `nav-link ${isActive ? "isActive" : ""}`;
//                                     }}
//                                 >{title}</NavLink>
//                             )
//                         })} */}
//                         {/* {routes.map(({ path, title, isHidden }, index) => {
//                             return isHidden ? null : <Link key={`${index}-${path}`} to={`${path}`} className='nav-link'>{title}</Link>
//                         })} */}
//                         {/* {routes.map(({ path, title }, index) => {
//                             return title && <Link key={`${index}-${path}`} to={`${path}`} className='nav-link'>{title}</Link>
//                         })} */}
//                         {/* <Link to={"/"} className='nav-link'>Home</Link>
//                         <Link to={"/about"} className='nav-link'>About</Link>
//                         <Link to={"/contact"} className='nav-link'>Contact</Link>
//                         <Link to={"/posts"} className='nav-link'>Posts</Link> */}
//                         {/* <Nav.Link href="/">Home</Nav.Link>
//                         <Nav.Link href="/about">About</Nav.Link>
//                         <Nav.Link href="/contact">Contact</Nav.Link> */}
//                         {/* <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">
//                                 Another action
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">
//                                 Separated link
//                             </NavDropdown.Item>
//                         </NavDropdown> */}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

// export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='flex items-center gap-4'>
                    <li className='rounded border-cyan-500 border-1'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    {routes.map((route, index) =>
                        <li key={index} className='rounded border-cyan-500 border-1'>
                            <Link to={route.path}>{route.title}</Link>
                        </li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header



