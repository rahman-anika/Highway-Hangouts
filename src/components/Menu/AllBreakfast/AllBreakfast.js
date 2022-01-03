import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Breakfast from '../Breakfast/Breakfast';

const AllBreakfast = () => {
    const [allBreakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allbreakfast')
            .then(res => res.json())
            .then(data => setBreakfast(data));
        // .then(data => console.log(data));
    }, [])
    return (
        <>

            <Header></Header>
            <Container className='my-5'>
                <CardGroup>
                    {
                        allBreakfast.map(breakfast => <Breakfast breakfast={breakfast}></Breakfast>)
                    }
                </CardGroup>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllBreakfast;