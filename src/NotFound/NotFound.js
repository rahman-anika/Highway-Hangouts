import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../images/notFound/notFound.jpg';

const NotFound = () =>
{
    return (
        <div className='text-center'>
            <img style={{ width: '50%' }} src={notfound} alt="" />
            <br />
            <br />

            {/* go to homepage starts */}
            <Link to="/"><Button>Go Back</Button>
            </Link>
            {/* go to homepage ends  */}

            <br /><br />
        </div>

    );
};

export default NotFound;