import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

<<<<<<< HEAD
function Booking ()
{
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data =>
    {
=======
function Booking() {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
        history.push(
            {
                pathname: '/booking-confirm',
                state: { data: data }
            }
        );
    };

    return (
<<<<<<< HEAD
        <>
=======
        <div id="makeReservation">
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
            <h2 style={{ color: "orange" }} className='text-center mt-4'>
                <FaQuoteLeft className='fs-4' />
                &nbsp;&nbsp;Book your Table with Highway Hangouts&nbsp;&nbsp;
                <FaQuoteRight className='fs-4' />
            </h2>
            <div className='mt-4 mb-5 d-flex justify-content-center'>
                <Navbar variant="light" bg="outline-secondary" className='rounded-3 shadow px-3 py-3'>
                    <Container fluid>
                        <Nav>
                            <Form onSubmit={handleSubmit(onSubmit)} className='d-lg-flex justify-lg-content-center'>
                                <Form.Control type="date" {...register("date")} className='m-0 me-2' required />
                                <Form.Select {...register("time")} className='me-2' required>
                                    <option value='07:00 PM'>Time - 07:00 PM</option>
                                    <option value='07:30 PM'>Time - 07:30 PM</option>
                                    <option value='08:00 PM'>Time - 08:00 PM</option>
                                    <option value='08:30 PM'>Time - 08:30 PM</option>
                                    <option value='09:00 PM'>Time - 09:00 PM</option>
                                    <option value='09:30 PM'>Time - 09:30 PM</option>
                                    <option value='10:00 PM'>Time - 10:00 PM</option>
                                </Form.Select>
                                <Form.Select {...register("guest")} className='me-2' required>
                                    <option value='1'>1 Person Only</option>
                                    <option value='2'>2 People</option>
                                    <option value='3'>3 People</option>
                                    <option value='4'>4 People</option>
                                    <option value='5'>5 People</option>
                                    <option value='6'>6 People</option>
                                </Form.Select>
                                <Button variant='outline-secondary' type='submit' className='text-nowrap'>Book my Table</Button>
                            </Form>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
<<<<<<< HEAD
        </>
    )
}

export default Booking
=======
        </div>
    )
}

export default Booking
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
