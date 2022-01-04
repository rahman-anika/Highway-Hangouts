import React, { useEffect, useState } from 'react';
import { CardGroup,Container } from 'react-bootstrap';
import Dinner from './Dinner/Dinner';

const AllDinner = () => {
    const [allDinner, setDinner] = useState([]);
    useEffect(() => {
        fetch('./dinner.JSON')
        .then(res => res.json())
        .then(data => setDinner(data));
        // .then(data => console.log(data));
    },[])
    return (
        <>
          <Container>
            <CardGroup>
            {
                allDinner.map(dinner=><Dinner dinner={dinner}></Dinner>)
            }
            </CardGroup>
           </Container>
        </>
    );
};

export default AllDinner;