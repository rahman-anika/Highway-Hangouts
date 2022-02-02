import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../../../Shared/Footer/Footer';
import Header from '../../../../Shared/Header/Header';


const DinnerDetails = () => {

    const { serviceId } = useParams();



    // state declaration starts 
    const [data, setData] = useState([]);
    // state declaration ends 

    // data loading starts using Services.json file starts 
    useEffect(() => {
        fetch('https://stark-savannah-40498.herokuapp.com/allDinner')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    // data loading starts using Services.json file ends 



    // console.log(data[0].id);

    // try to match data 
    const service = data?.filter(sv => sv._id == serviceId);

    console.log(service);

    return (
        <div>
            {/* header section starts */}
            <Header></Header>
            {/* header section ends */}

            <br />
            <br />

            {/* Service Details section starts  */}

            <Row>
                {/* <h1>This is service : {serviceId} </h1> */}

                {/* selected data's image showing starts */}
                <Col>
                    <img width="70%" height="310" src={service[0]?.img} alt="" />
                </Col>
                {/* selected data's image showing ends */}

                {/* selected data's details showing starts */}
                <Col className="p-3 mx-5 text-start">
                    <h3 style={{ color: "orange" }}>Name : {service[0]?.name}</h3>

                    <h3 style={{ color: "orange" }}>Price : {service[0]?.price} BDT</h3>

                    <h3 style={{ color: "orange" }}>Category: {service[0]?.category}</h3>

                    <h5 style={{ color: "orange" }}>Serves : {service[0]?.serves} person(s)</h5>
                    <br />

                    <h5 style={{ color: "orange" }}>Details</h5>




                    {/* <NewlineText text={'Line one\nLine two\nLine three'} /> */}

                    <div className='new-line'>
                        {service[0]?.details}

                    </div>

                    <br />

                    < h4 style={{ color: "orange" }}> <b>Eat & Enjoy!</b></h4>

                </Col>
                {/* selected data's details showing ends */}

            </Row>

            {/* Service details section ends  */}





            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}

        </div >
    );
};

export default DinnerDetails;