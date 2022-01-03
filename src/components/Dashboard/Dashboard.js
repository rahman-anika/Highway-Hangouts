import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../Shared/Footer/Footer'
import Header from '../../Shared/Header/Header'

function Dashboard ()
{
    return (
        <div>
            <Header />

            <div className='d-flex justify-content-center my-5'>
                < Nav.Link as={Link} className="btn btn-outline-secondary" to="/all-booking">
                    All Booking
                </Nav.Link>
                < Nav.Link as={Link} className="btn btn-outline-secondary" to="/my-booking">
                    My Booking
                </Nav.Link>
            </div>

            <Footer />
        </div>
    )
}

export default Dashboard
