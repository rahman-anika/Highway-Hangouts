import React, { useEffect, useState } from 'react';
import './Chef.css';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Chef = () => {

    let { isLoading } = useAuth();

    // state declaration starts 
    const [services, setServices] = useState([]);
    // state declaration ends 



    // data load from database/server starts 
    useEffect(() => {
        fetch('http://localhost:5000/allChefs')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);
    // data load from database/server ends 



    if (services.length > 0) {
        isLoading = false;

    }

    if (services.length === 0) {
        isLoading = true;
    }




    // if loading then shows spinner 

    console.log(services);

    // if (isLoading === true) {
    //     return <Spinner animation="border" variant="danger" />
    // }

    return (
        // chef section starts 
        <div id="chefs" className="container w-100 m-auto p-5 animate__animated animate__jello">

            {/* title starts */}
            <h1 className="service-title-main">Our Expert Chefs</h1>

            {/* title ends  */}


            {

                isLoading ?
                    <Spinner animation="border" variant="danger" />
                    :
                    ''

            }



            {/* showing all chefs after data loading starts  */}
            <div className="row">

                {services?.map((service) => (
                    <div key={service._id} className="col-md-6 col-sm-12">
                        <div className="cart service p-3 m-2 border border">

                            {/* image showing starts  */}
                            <div className="service img">
                                <img src={service.image} alt="category" />
                            </div>
                            {/* image showing ends  */}

                            {/* chef info starts  */}
                            <h4 className="mt-4 service-info">{service.name}</h4>



                            <h6 className="mt-4 service-info">Duration: {service.designation}</h6>


                            {/* contact icon starts */}
                            <div className="icons">
                                <i class="fab fa-facebook"></i> <i class="fab fa-twitter-square"></i> <i class="fas fa-envelope-square"></i> <i class="fab fa-linkedin"></i>
                            </div>
                            {/* contact icon ends */}

                            {/* chef info ends  */}


                        </div>
                    </div>
                ))}
            </div>
            {/* showing all chefs after data loading ends  */}

            <br />
            <br />



        </div>
        // chef section ends 

    );
};

export default Chef;