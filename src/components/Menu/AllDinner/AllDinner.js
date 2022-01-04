import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Dinner from './Dinner/Dinner';


const AllDinner = () => {

    const [allDinner, setDinner] = useState([]);
    useEffect(() => {
        fetch('https://stark-savannah-40498.herokuapp.com/alldinner')
            .then(res => res.json())
            .then(data => setDinner(data));
        // .then(data => console.log(data));
    }, [])

    return (
        <>
            <Header></Header>
            <Container className='my-5'>
                <CardGroup>
                    {
                        allDinner.map(dinner => <Dinner dinner={dinner}></Dinner>)
                    }
                </CardGroup>
            </Container>
            <Footer></Footer>

        </>

    );
};

export default AllDinner;