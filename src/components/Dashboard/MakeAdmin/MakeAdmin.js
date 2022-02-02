import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://stark-savannah-40498.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    e.target.reset();
                    setSuccess(true);

                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2 style={{ color: "orange" }} className="mt-5">Make an Admin</h2>
            <br />

            <form onSubmit={handleAdminSubmit}>
                <input className="input-field"

                    type="email"
                    placeholder="Enter Email"
                    onBlur={handleOnBlur}
                    variant="standard" />

                <br />
                <br />

                <input type="submit" style={{ color: "orange", backgroundColor: "white", border: "2px solid orange", borderRadius: "8px" }} value="Make Admin" />
            </form>
            {success && <Alert variant="success">Made Admin successfully!</Alert>}
        </div>

    );
};

export default MakeAdmin;