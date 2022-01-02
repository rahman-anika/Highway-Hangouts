import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from './../images/logo.png';
import stripe from './../images/stripe.png';
import { BsGeoAlt, BsEnvelope, BsTelephone } from "react-icons/bs";
import { FaQuoteRight, FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

/* footer section */
const Footer = () =>
{
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex flex-column flex-lg-row">
                    <Nav className="flex-column align-items-center my-3">
                        <Navbar.Brand href="/home" className="mx-auto">
                            <Image src={logo} width="250px" alt="" fluid />
                        </Navbar.Brand>
                        <div className="my-2 text-white">
                            <FaQuoteRight className='fs-3' />&nbsp; Making moments special...
                        </div>
                    </Nav>
                    <Nav className="flex-column text-center">
                        <h4 className="text-white fs-5">Links</h4>
                        <Nav.Link to="/home" className="m-0 p-0">
                            Home
                        </Nav.Link>
                        <Nav.Link to="/home" className="m-0 p-0">
                            Food Item
                        </Nav.Link>
                        <Nav.Link to="/home" className="m-0 p-0">
                            Our Chef
                        </Nav.Link>
                        <Nav.Link to="/home" className="m-0 p-0">
                            Food Blogs
                        </Nav.Link>
                        <Nav.Link to="/home" className="m-0 p-0">
                            FAQ
                        </Nav.Link>
                    </Nav>
                    <Nav className="flex-column align-items-center mt-3">
                        <h4 className="text-white fs-5 mb-0 border-bottom">Contact us</h4>
                        <div className="fs-6 lh-sm text-white mt-3">
                            <p className='mb-1'><BsGeoAlt />&nbsp;&nbsp;92/A, Dhaka - 1000, Bangladesh</p>
                            <p className='mb-1'><BsEnvelope />&nbsp;&nbsp;contact@highwayhangouts.com</p>
                            <p className='mb-0'><BsTelephone />&nbsp;&nbsp;+880123456789, +88087654321</p>
                        </div>
                        <h4 className="text-white mt-2 fs-5 mb-0 border-bottom">Follow us</h4>
                        <Nav>
                            <Nav.Link href="/home" className="text-white fs-3" title="Facebook">
                                <FaFacebook className="btn-outline-light rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-3" title="Twitter">
                                <FaTwitter className="btn-outline-light rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-3" title="Google">
                                <FaGoogle className="btn-outline-light rounded p-1" />
                            </Nav.Link>
                            <Nav.Link href="/home" className="text-white fs-3" title="Instagram">
                                <FaInstagram className="btn-outline-light rounded p-1" />
                            </Nav.Link>
                        </Nav>
                    </Nav>
                    <Nav className='flex-column align-items-center'>
                        <h4 className="text-white fs-5 mb-3">We accept</h4>
                        <Image src={stripe} width="300px" alt="" fluid />
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="secondary" variant="dark">
                <Navbar.Text className="text-white mx-auto">&copy; 2022, Highway Hangouts. All Rights Reserved.</Navbar.Text>
            </Navbar>
        </>
    );
};

export default Footer;