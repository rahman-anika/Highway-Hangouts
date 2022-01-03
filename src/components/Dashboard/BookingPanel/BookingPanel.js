import React, { useEffect, useState } from 'react'
import { Badge, CloseButton, Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

function BookingPanel ()
{
    const { user } = useAuth();
    const [bookingInfo, setBookingInfo] = useState([]);

    useEffect(() =>
    {
        fetch(`http://localhost:5000/booking?booking_email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookingInfo(data))
    }, [user.email]);

    const handleMyOrderDelete = id =>
    {
        Swal({
            title: "Are you sure, you want to DELETE the Booking?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) =>
            {
                if (willDelete) {
                    fetch(`/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data =>
                        {
                            if (data.deletedCount > 0) {
                                Swal("Successfully Deleted your Booking!", {
                                    icon: "success",
                                });
                                const restBooking = bookingInfo.filter(book => book._id !== id);
                                setBookingInfo(restBooking);
                            };
                        });
                };
            });
    };

    return (
        <Container className="bg-info rounded shadow my-5">
            <h2 className="fw-bold text-center pt-3">
                <u>My </u><span className="text-white"><u>Booking</u></span>
            </h2>
            <p className="fw-light fs-4 mt-3 text-center">Total Booking: {bookingInfo.length} </p>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Booking Name</th>
                        <th>Booking Email</th>
                        <th>Booking Date</th>
                        <th>Booking Time</th>
                        <th>Number of Guest</th>
                        <th>Special Request</th>
                        <th>Order Status</th>
                        <th>Order Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingInfo.map(book => <tr key={book._id} className="bg-light">
                            <td>{book._id}</td>
                            <td>{book.booking_name}</td>
                            <td className="text-center">{book.booking_email}</td>
                            <td className="text-center">{book.booking_date}</td>
                            <td className="text-center">{book.booking_time}</td>
                            <td className="text-center">{book.guest}</td>
                            <td className="text-center">{book.request}</td>
                            <td className="text-center">
                                {
                                    (book.bookStatus === 'pending') ? <Badge bg="warning" text="dark">
                                        Pending
                                    </Badge> : <Badge bg="success" text="light">
                                        Shipped
                                    </Badge>
                                }

                            </td>
                            <td className="text-center">
                                <CloseButton onClick={() => handleMyOrderDelete(book._id)} className="fs-5 bg-danger rounded-circle ms-2" title="Delete Order" />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default BookingPanel
