// GymCard.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Gymcard = ({ gymInfo, index }) => {
    const { gymname, name, phone, email, gymDetails, newmembers, _id } = gymInfo;

    const navigate = useNavigate();

    return (

        <div id={index} className="gymcard borr pad1">
            <Link to={`/gym/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

                <div className="card-header">
                    <h2 className='rgb'>{gymname}</h2>
                    <p className='rgb'>Owner: {name}</p>
                </div>

                <hr></hr>
                <div className="card-body">
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Email:</strong> {email}</p>

                    {
                        (gymDetails.length == 0) ? <p>no details</p> : <>

                            <p className=''><strong>City:</strong> {gymDetails[0].city}</p>
                            <p className=''><strong>Category:</strong> {gymDetails[0].category}</p>



                        </>
                    }

                </div>
            </Link>
        </div>
    );
};

export default Gymcard;
