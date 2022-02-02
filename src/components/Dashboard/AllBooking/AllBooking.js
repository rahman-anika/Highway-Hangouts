import React, { useEffect, useState } from 'react'
import { Badge, Button, CloseButton, Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

function AllBooking ()
{
    const [bookings, setBookings] = useState([]);
    const [trigger, setTrigger] = useState(false);

    const { user } = useAuth();

    useEffect(() =>
    {
        fetch('https://stark-savannah-40498.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(error => console.log(error));
    }, [trigger]);


    const handleUpdateStatus = id =>
    {
        const statusUpdate = { status: 'Confirmed' };
        fetch(`https://stark-savannah-40498.herokuapp.com/booking/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(statusUpdate)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        `Thank You, ${user.displayName}!`,
                        'Your booking status updated as confirmed',
                        'success'
                    );
                    setTrigger(true);
                };
            });
    };

    const handleBookingDelete = id =>
    {
        Swal.fire({
            title: 'Are you sure, you want to DELETE the Booking?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) =>
        {
            if (result.isConfirmed) {
                fetch(`https://stark-savannah-40498.herokuapp.com/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data =>
                    {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            )
                            const restBooking = bookings.filter(book => book._id !== id);
                            setBookings(restBooking);
                        };
                    });
            };
        })
    };

    return (
        <Container style={{ backgroundColor: "orange" }} className="rounded shadow my-5">
            <h2 className="fw-bold text-center pt-3">
                <span className="text-white fw-normal fst-italic"><u>All Booking Info</u></span>
            </h2>
            <p className="fw-light fs-4 mt-3 text-center">Total Booking: {bookings.length} </p>
            <Table responsive>
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
                        <th>Management</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(book => <tr key={book._id} className="bg-light">
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
                            <td className="d-flex justify-content-around align-items-center">
                                <Button onClick={() => handleUpdateStatus(book._id)} variant="outline-dark" size="sm">
                                    Confirmed
                                </Button>
                                <CloseButton onClick={() => handleBookingDelete(book._id)} className="fs-5 bg-danger rounded-circle ms-2" title="Delete Booking" />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default AllBooking
