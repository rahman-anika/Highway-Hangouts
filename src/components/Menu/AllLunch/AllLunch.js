import React, { useEffect, useState } from 'react';
import { CardGroup,Container } from 'react-bootstrap';
import Lunch from './Lunch/Lunch';

const AllLunch = () => {
    const [allLunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('./lunch.JSON')
        .then(res => res.json())
        .then(data => setLunch(data));
        // .then(data => console.log(data));
    },[])

    return (
        <>
            <Container>
            <CardGroup>
            {
                allLunch.map(lunch=><Lunch lunch={lunch}></Lunch>)
            }
            </CardGroup>
           </Container>
        </>
    );
};

export default AllLunch;