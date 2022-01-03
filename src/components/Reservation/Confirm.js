import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import booking from './../../images/logo/booking.png';
import { useForm } from "react-hook-form";
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Confirm ()
{
    const [reservation, setReservation] = useState({})
    const location = useLocation();
    const { register, handleSubmit } = useForm();

    useEffect(() =>
    {
        setReservation(location.state.data)
    }, [location]);

    const onSubmit = data =>
    {
        console.log(data);
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
                                <Form.Control type="text" {...register("booking_name")} placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Booking Email</Form.Label>
                                <Form.Control type="email" {...register("booking_email")} placeholder="Enter your email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Add special request</Form.Label>
                            <Form.Control {...register("request")} placeholder="If you have any special requirement. Please tell us..." />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Booking Date</Form.Label>
                                <Form.Control {...register("booking_date")} defaultValue={reservation.date} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Booking Time</Form.Label>
                                <Form.Control {...register("booking_time")} defaultValue={reservation.time} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Number of Guest</Form.Label>
                                <Form.Control {...register("guest_number")} type='number' max={6} min={1} defaultValue={reservation.guest} />
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

export default Confirm
