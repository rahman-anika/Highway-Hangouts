import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Lunch from './Lunch/Lunch';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';

const AllLunch = () => {
    const [allLunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alllunch')
            .then(res => res.json())
            .then(data => setLunch(data));
        // .then(data => console.log(data));
    }, [])

    return (
        <>
            <Header></Header>
            <Container className='my-5'>
                <CardGroup>
                    {
                        allLunch.map(lunch => <Lunch lunch={lunch}></Lunch>)
                    }
                </CardGroup>
            </Container>
            <Footer></Footer>

        </>
    );
};

export default AllLunch;