import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Dinner = ({ dinner }) => {

    const { name, price, details, img, _id } = dinner;

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
                    <Link to={`/dinnerDetails/${_id}`}><Button variant="success">Show Details</Button></Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Dinner;