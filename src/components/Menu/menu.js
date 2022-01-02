import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// menu added
const menu = () => {
    return (
        <>
            <Container>
             <Link to="/allbreakfast"><Button variant="secondary">Breakfast</Button></Link>
            <Button variant="success">Lunch</Button>
            <Button variant="secondary">Dinner</Button>
           </Container>
        </>
    );
};

export default menu;