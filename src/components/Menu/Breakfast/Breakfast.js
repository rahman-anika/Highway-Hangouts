import React from 'react';
import { Card } from 'react-bootstrap';

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
                </Card.Body>
            </Card>
        </>
    );
};

export default Breakfast;