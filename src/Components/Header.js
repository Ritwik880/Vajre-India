import React, { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useMemo } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Header = () => {
    const [active, setActive] = useState("nav__menu");
    const [show, setShow] = useState(false)
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <>
            <header>
                <div className="upNavbar">
                    <button className='upNavbarBtn mx-2'>Kids Coding Program</button>
                    <Link to='/graduate'>
                        <button className='upNavbarBtn mx-2'>Graduate Program</button></Link>
                    {/* <button className='upNavbarBtn'>Hire From Us</button>
                    <button className='upNavbarBtn'>On Campus Training</button>
                    <button className='upNavbarBtn'>Become an instructor</button> */}
                </div>
                <hr className='hr' />
                <Navbar className="navbar navbar-expand-lg">
                    <Container>
                        <Navbar.Brand href='/' className="navbar-brand">
                            <img src="/logo.png" width={85} alt="vajreLogo" />
                        </Navbar.Brand>
                        <Nav className="navbar-nav mx-auto">

                            <input type='search' name='search' className='inputSearch' placeholder='Search Here' />

                            <div className={active}>

                                <LinkContainer to="/">
                                    <Nav.Link className='navLink'>Home</Nav.Link>
                                </LinkContainer>
                                <NavDropdown title="Courses" className='navLink'>

                                    <NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Java Script</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">C++</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Data Science</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Data Analysis</NavDropdown.Item>
                                </NavDropdown>

                                <LinkContainer to="/about">
                                    <Nav.Link className='navLink'>About us</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/service">
                                    <Nav.Link className='navLink'>Services</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <Nav.Link className='navLink'>Contact us</Nav.Link>
                                </LinkContainer>

                                <button className='centerBtn'>Hire From Us</button>
                                <Link to='/campus'>
                                    <button className='centerBtn'>On Campus Training</button>
                                </Link>
                                <button className='centerBtn'>Become an instructor</button>
                            </div>

                        </Nav>
                        <div className="d-flex">
                            <Link to='/signup'>
                                <button className='loginSignupBtn'>Login</button>
                            </Link>
                        </div>
                        <div onClick={navToggle} className={icon}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </Container>
                </Navbar>

            </header>

        </>
    )
}

export default Header