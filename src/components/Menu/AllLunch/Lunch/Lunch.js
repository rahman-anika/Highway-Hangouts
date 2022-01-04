import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Lunch = ({ lunch }) => {
    const { name, price, details, img, _id } = lunch;
    return (
        <>
            <Card className="p-2" style={{ background: "#E3DFDE", marginLeft: "10px", borderRadius: "8px" }}>
                <Card.Img variant="top" className="img-fluid mx-auto" style={{ width: "100%", height: "310px" }} src={img} />
                <Card.Body>
                    <Card.Title className="fs-2">{name}</Card.Title>
                    <Card.Title className="fs-4">${price}</Card.Title>
                    <Card.Text className="text-start">
                        {details.slice(0, 69)}..
                    </Card.Text>
                    <Link to={`/details/${_id}`}><Button variant="success">Show Details</Button></Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Lunch;