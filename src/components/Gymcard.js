// GymCard.jsx

import React from 'react';

const Gymcard = ({ gymInfo, index }) => {
    const { gymname, name, phone, email, gymDetails, newmembers } = gymInfo;

    return (
        <div id={index} className="gymcard borr pad1">
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


                        <p><strong>Morning Time:</strong> {gymDetails[0].morningOpening}am to {gymDetails[0].morningClosing}am</p>
                        <p><strong>Evening Time:</strong> {gymDetails[0].eveningOpening}pm to {gymDetails[0].eveningClosing}pm</p>

                        <p><strong>Description:</strong> {gymDetails[0].descreption}</p>
                        <p><strong>Address:</strong> {gymDetails[0].gymAddress}</p>
                        <p><strong>Total Members:</strong> {newmembers.length}</p>


                    </>
                }
            </div>
        </div>
    );
};

export default Gymcard;
