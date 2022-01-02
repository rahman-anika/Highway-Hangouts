import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Breakfast = ({ breakfast }) => {
    const { name, img, details, price } = breakfast;
    return (
        <>
            <Card className="p-2" style={{ background: "#E3DFDE", marginLeft: "10px", borderRadius: "8px" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>${price}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="success">Purshase Now</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Breakfast;