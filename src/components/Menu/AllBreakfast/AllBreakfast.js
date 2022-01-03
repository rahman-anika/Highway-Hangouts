import React, { useEffect, useState } from 'react';
import { CardGroup,Container } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';

const AllBreakfast = () => {
    const [allBreakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setBreakfast(data));
        // .then(data => console.log(data));
    },[])
    return (
        <>
          <Container>
            <CardGroup>
            {
                allBreakfast.map(breakfast=><Breakfast breakfast={breakfast}></Breakfast>)
            }
            </CardGroup>
           </Container>  
        </>
    );
};

export default AllBreakfast;