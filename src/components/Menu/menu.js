import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Menu.css";

const menu = () => {
    return (
        <>
            <Container>
             <Link to="/allbreakfast"><button className="menu-btn" >Breakfast</button></Link>
            <button className="menu-btn" variant="success">Lunch</button>
            <button className="menu-btn" variant="secondary">Dinner</button>
           </Container>
        </>
    );
};

export default menu;