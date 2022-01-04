import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const BookingInfo = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    // console.log(id);
    // console.log("hiii");
    const [booking, setBooking] = useState({});

    const onSubmit = data => {
        axios.post('http://localhost:5000/booking', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Successfully added your information.Thank you");
                     reset();
                }
            })
    }

    useEffect(() => {

        if (`http://localhost:5000/allbreakfast/${id}`) { 
            fetch(`http://localhost:5000/allbreakfast/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))
        }

        else if(`http://localhost:5000/AllLunch/${id}`) {
            fetch(`http://localhost:5000/AllLunch/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))
        }
        else if(`http://localhost:5000/allDinner/${id}`) {
            fetch(`http://localhost:5000/allDinner/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))
        }
            /* fetch(`http://localhost:5000/menuAll/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data)) */
        
        // console.log(data)
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <Col sm={8} md={6}>
                        <img src={booking.img} alt="" />
                    </Col>
                    <Col sm={4} md={6}>
                    <h2 style={{color:"orange"}}>Provide Your Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("FoodName", { required: true, maxLength: 20 })} defaultValue={booking.name}  /> <br />
                    <input {...register("email", { required: true, maxLength: 20 })} defaultValue={user.email}  /> <br />
                    <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName}  /> <br />
                    <input type="number" {...register("price")} placeholder="price" defaultValue={booking.price}/>  <br />
                    <input {...register("number")} placeholder="phone number" />  <br /> <br />
                    <input className="button-regular" type="submit" />
                </form>
            <input type="email"/>
                    </Col>
                </Row>
                </Container> 
        </>
    );
};

export default BookingInfo;