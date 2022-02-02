import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { Badge, CloseButton, Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

function MyBooking ()
{
    const { user } = useAuth();
    const [bookingInfo, setBookingInfo] = useState([]);

    useEffect(() =>
    {
        fetch(`http://localhost:5000/booking/${user.email}`)
=======
import { Badge, CloseButton, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

function MyBooking() {
    const { user } = useAuth();
    const [bookingInfo, setBookingInfo] = useState([]);

    useEffect(() => {
        fetch(`https://stark-savannah-40498.herokuapp.com/booking/${user.email}`)
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
            .then(res => res.json())
            .then(data => setBookingInfo(data))
    }, [user.email]);

<<<<<<< HEAD
    const handleBookingDelete = id =>
    {
=======
    const handleBookingDelete = id => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
        Swal.fire({
            title: 'Are you sure, you want to DELETE the Booking?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
<<<<<<< HEAD
        }).then((result) =>
        {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data =>
                    {
=======
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://stark-savannah-40498.herokuapp.com/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            )
                            const restBooking = bookingInfo.filter(book => book._id !== id);
                            setBookingInfo(restBooking);
                        };
                    });
            };
        })
    };

    return (
<<<<<<< HEAD
        <Container style={{ backgroundColor: "orange" }} className="rounded shadow my-5">
=======
        <Container style={{ backgroundColor: "orange" }} className="rounded shadow text-center my-5">
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
            <h2 className="fw-bold text-center pt-3">
                <span className="text-white fw-normal fst-italic"><u>My Booking Info</u></span>
            </h2>
            <p className="fw-light fs-4 mt-3 text-center">My Total Booking: {bookingInfo.length} </p>
<<<<<<< HEAD
            <Table responsive>
=======


            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr className='text-center'>
                            <th>Booking ID</th>
                            <th>Booking Name</th>
                            <th>Booking Email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Guest</th>
                            <th>Request</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingInfo.map(book => <tr key={book._id} className="bg-light">
                                <td>{book._id}</td>
                                <td>{book.booking_name}</td>
                                <td>{book.booking_email}</td>
                                <td className="text-center">{book.booking_date}</td>
                                <td className="text-center">{book.booking_time}</td>
                                <td className="text-center">{book.guest_number}</td>
                                <td className="text-center">{book.request}</td>
                                <td className="text-center">
                                    {
                                        (book.status === 'pending') ? <Badge bg="warning" text="dark">
                                            Pending
                                        </Badge> : <Badge bg="success" text="light">
                                            Confirmed
                                        </Badge>
                                    }

                                </td>
                                <td className="text-center">
                                    <CloseButton onClick={() => handleBookingDelete(book._id)} className="fs-5 bg-danger rounded-circle ms-2" title="Delete Booking" />
                                </td>
                            </tr>
                            )
                        }
                    </tbody >
                </table>
            </div>



            {/* <Table responsive>
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
                <thead>
                    <tr className='text-center'>
                        <th>Booking ID</th>
                        <th>Booking Name</th>
                        <th>Booking Email</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guest</th>
                        <th>Request</th>
                        <th>Status</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingInfo.map(book => <tr key={book._id} className="bg-light">
                            <td>{book._id}</td>
                            <td>{book.booking_name}</td>
                            <td>{book.booking_email}</td>
                            <td className="text-center">{book.booking_date}</td>
                            <td className="text-center">{book.booking_time}</td>
                            <td className="text-center">{book.guest_number}</td>
                            <td className="text-center">{book.request}</td>
                            <td className="text-center">
                                {
                                    (book.status === 'pending') ? <Badge bg="warning" text="dark">
                                        Pending
                                    </Badge> : <Badge bg="success" text="light">
                                        Confirmed
                                    </Badge>
                                }

                            </td>
                            <td className="text-center">
                                <CloseButton onClick={() => handleBookingDelete(book._id)} className="fs-5 bg-danger rounded-circle ms-2" title="Delete Booking" />
                            </td>
                        </tr>
                        )
                    }
<<<<<<< HEAD
                </tbody>
            </Table>
        </Container>
    )
}

export default MyBooking
=======
                </tbody >
            </Table > */}

        </Container >
    )
}

export default MyBooking
>>>>>>> 0ac96804b02c890b274f4c64d1e80c4d36f7bfea
