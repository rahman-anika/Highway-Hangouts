import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Breakfast = ({ breakfast }) => {
    const { name, img, details, price } = breakfast;
    return (
        <>
            <Card className="p-2" style={{ background: "#E3DFDE", marginLeft: "10px", borderRadius: "8px" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="fs-2">{name}</Card.Title>
                    <Card.Title className="fs-4">${price}</Card.Title>
                    <Card.Text className="text-start">
                        {details}
                    </Card.Text>
                    <Button variant="success">Purshase Now</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Breakfast;