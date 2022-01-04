import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Menu.css";

const menu = () => {
    return (
        <>
            <Container id="menu" style={{ color: "orange" }}>
                <h2 className='my-4'>Choose Menu</h2>

                <Link to="/allbreakfast"><button className="menu-btn" >Breakfast</button></Link>

                <Link to="/alllunch"><button className="menu-btn" variant="success">Lunch</button></Link>

                <Link to="/alldinner"><button className="menu-btn" variant="secondary">Dinner</button></Link>


            </Container>
        </>
    );
};

export default menu;