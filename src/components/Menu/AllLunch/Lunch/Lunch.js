import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Lunch = ({lunch}) => {
    const { name, price, details, img,_id } = lunch;
    return (
        <>
            <Card className="p-2" style={{ background: "#E3DFDE", marginLeft: "10px", borderRadius: "8px" }}>
        <Card.Img variant="top" className="img-fluid mx-auto" style={{width:"200px",height:"200px"}} src={img} />
        <Card.Body>
          <Card.Title className="fs-2">{name}</Card.Title>
          <Card.Title className="fs-4">${price}</Card.Title>
          <Card.Text className="text-start">
            {details} 
          </Card.Text>
          <Link to={`/booking/${_id}`}><Button variant="success">Purshase Now</Button></Link>
        </Card.Body>
      </Card>
        </>
    );
};

export default Lunch;