import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Menu.css";

const menu = () => {
    return (
        <>
            <Container>
             <Link to="/allbreakfast"><button className="menu-btn" >Breakfast</button></Link>
             <Link to="/AllLunch"><button className="menu-btn">Lunch</button></Link>
            <Link to="/allDinner"><button className="menu-btn">Dinner</button></Link>
           </Container>
        </>
    );
};

export default menu;