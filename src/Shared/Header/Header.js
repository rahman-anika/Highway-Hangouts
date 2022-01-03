import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from './../../images/logo/logo.png';

const Header = () =>
{

    const { user, logout } = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >

                <Container>

                    {/* website name and icon starts */}
                    {/* <Navbar.Brand href="#home">
                        <span style={{ color: 'orange', fontWeight: 'bold' }}> <i class="fas fa-utensils"></i> Highway Hangouts</span>
                    </Navbar.Brand> */}

                    <Nav className="flex-column align-items-center">
                        <Navbar.Brand href="#home" className="mx-auto">
                            <Image src={logo} width="180px" alt="" fluid />
                        </Navbar.Brand>
                    </Nav>


                    {/* website name and icon ends */}

                    {/* routing hashlink starts */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-center">

                        {/* homepage section starts */}
                        <Nav.Link as={HashLink} to="/home#home"> <span style={{ color: 'orange', fontWeight: 'bold' }}> Home </span> </Nav.Link>
                        {/* homepage section ends */}

                        {/* services section starts */}
                        <Nav.Link as={HashLink} to="/home#recipes"><span style={{ color: 'orange', fontWeight: 'bold' }}> Recipes </span></Nav.Link>
                        {/* services section ends */}

                        {/* services section starts */}
                        <Nav.Link as={HashLink} to="/home#menu"><span style={{ color: 'orange', fontWeight: 'bold' }}> Menu </span></Nav.Link>
                        {/* services section ends */}

                        {/* Explore products section starts */}
                        < Nav.Link as={Link} className="item m-2 p-2" to="/submitRecipe"><span style={{ color: 'orange', fontWeight: 'bold' }}> Share Recipe </span></Nav.Link>
                        {/* Explore products section ends  */}

                        {/* reviews section starts */}
                        <Nav.Link as={HashLink} to="/home#reviews"><span style={{ color: 'orange', fontWeight: 'bold' }}> Reviews </span></Nav.Link>
                        {/* reviews section ends */}

                        {/* chef section starts */}
                        <Nav.Link as={HashLink} to="/home#chefs"><span style={{ color: 'orange', fontWeight: 'bold' }}> Chefs </span></Nav.Link>
                        {/* chef section ends */}



                        {/* about section starts */}
                        <Nav.Link as={HashLink} to="/home#about"><span style={{ color: 'orange', fontWeight: 'bold' }}> About Us </span></Nav.Link>
                        {/* about section ends */}




                        {/* 
                        if logged in then Dashboard shows */}

                        {user?.email &&

                            < Nav.Link as={Link} className="item m-2 p-2" to="/dashboard"><span style={{ color: 'orange', fontWeight: 'bold' }}> Dashboard </span></Nav.Link>

                        }


                        {/* showing logged in user's display name  */}
                        <Navbar.Text>
                            <span style={{ color: 'orange', fontWeight: 'bold' }}>
                                Signed in as:
                                <br />
                                <a href="#login">
                                    {user?.displayName}
                                </a>

                            </span>
                        </Navbar.Text>

                        {/* if user logged in then shows logout button otherwise shows login button*/}

                        {user?.email ?
                            <Button onClick={logout} variant="outline-light" className='ms-3'>Logout</Button>

                            :
                            <Nav.Link as={Link} to="/login"><span style={{ color: 'orange', fontWeight: 'bold' }}> Login </span></Nav.Link>
                        }


                    </Navbar.Collapse>
                    {/* routing hashlink ends */}

                </Container>
            </Navbar>
        </>

    );
};

export default Header;