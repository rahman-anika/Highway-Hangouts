import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import booking from './../../images/logo/booking.png';
import { useForm } from "react-hook-form";
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

<<<<<<< HEAD
function Confirm ()
{
=======
function Confirm() {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
    const { user } = useAuth();
    const [reservation, setReservation] = useState({});

    const { register, handleSubmit, reset } = useForm();

    const location = useLocation();

<<<<<<< HEAD
    useEffect(() =>
    {
        setReservation(location.state.data)
    }, [location]);

    const onSubmit = data =>
    {
=======
    useEffect(() => {
        setReservation(location.state.data)
    }, [location]);

    const onSubmit = data => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
        let book = data;
        if (data.guest_number === '') {
            book['booking_date'] = reservation.date;
            book['booking_time'] = reservation.time;
            book['guest_number'] = reservation.guest;
            book['status'] = 'pending';
        }
        else {
            book['booking_date'] = reservation.date;
            book['booking_time'] = reservation.time;
            book['status'] = 'pending';
        }

<<<<<<< HEAD
        fetch('http://localhost:5000/booking', {
=======
        fetch('https://stark-savannah-40498.herokuapp.com/booking', {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
<<<<<<< HEAD
            .then(data =>
            {
=======
            .then(data => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
                if (data.insertedId) {
                    Swal.fire(
                        `Thank You, ${user.displayName}!`,
                        `Your table booking has been confirmed at ${reservation.time} on ${reservation.date}.`,
                        'success'
                    );
                    reset();
                    console.log(book);
                };
            });
    };

    return (
        <>
            <Header />

            <h1 className='fst-italic fw-lighter text-center my-5' style={{ color: "orange" }}>
                <FaQuoteLeft className='fs-2' />
                &nbsp;Confirm your booking&nbsp;
                <FaQuoteRight className='fs-2' />
            </h1>
            <div className='d-lg-flex justify-content-lg-evenly align-items-center my-5 '>
                <div>
                    <Image src={booking} width="750px" alt="" fluid rounded />
                </div>
                <div className='bg-light shadow rounded p-4'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Booking Name</Form.Label>
                                <Form.Control type="text" {...register("booking_name")} defaultValue={user.displayName} required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Booking Email</Form.Label>
                                <Form.Control type="email" {...register("booking_email")} defaultValue={user.email} required />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Add special request</Form.Label>
                            <Form.Control {...register("request")} placeholder="If you have any special requirement. Please tell us..." />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Booking Date</Form.Label>
                                <Form.Control {...register("booking_date")} defaultValue={reservation.date} readOnly />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Booking Time</Form.Label>
                                <Form.Control {...register("booking_time")} defaultValue={reservation.time} readOnly />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Number of Guest</Form.Label>
                                <Form.Control {...register("guest_number")} type='number' max={6} min={1} defaultValue={reservation.guest} required />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Agree to terms and conditions" required />
                        </Form.Group>

                        <Button variant="outline-secondary" type="submit">
                            Confirm my booking
                        </Button>
                    </Form>
                </div>
            </div>

            <Footer />
        </>
    )
}

<<<<<<< HEAD
export default Confirm
=======
export default Confirm
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
