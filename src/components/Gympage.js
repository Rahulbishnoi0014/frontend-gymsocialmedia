import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
const Gympage = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [gym, setgym] = useState({});
    const [loading, setLoading] = useState(true);





    const getgyms = async () => {
        try {
            const res = await axios.get("http://51.20.85.223:5001/allgym");

            // console.log(res.data);
            // res= await res.json();
            const card = res.data.find(card => card._id === id);
            console.log(card);
            setgym(card);
            setLoading(false);

        }
        catch (err) {
            console.log(err);
            navigate("/allgyms");

        }
    }

    useEffect(() => {
        getgyms();
    }, [])

    return (
        <>
            <Navbar />

            {!loading && <div className='pad1 '>
                <div className="gymheading pad1 mar1">

                    <a className='fithubfloat' href='http://51.20.85.223:3000/' target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h6>powered by</h6>
                        <h1 id="fithub" className='rgb'>F I T H U B</h1>
                    </a>
                    <h2 className='rgb'>{gym.gymname}</h2>
                    <p className='rgb'>Owner: {gym.name}</p>
                    {!gym.gymDetails.length == 0 && <p className='rgb'>{gym.gymDetails[0].descreption}</p>}

                </div>

                <hr></hr>
                <div className="gymdetails">

                    <div className='info1'>
                        <div className='timing'>
                            <h1>Timing</h1>
                            <p><strong>Morning :</strong></p>
                            <p> {gym.gymDetails[0].morningOpening}am to {gym.gymDetails[0].morningClosing}am</p>
                            <p><strong>Evening :</strong></p>
                            <p> {gym.gymDetails[0].eveningOpening}pm to {gym.gymDetails[0].eveningClosing}pm</p>
                        </div>
                        <br></br>
                        <div className='description'>
                            <h1>Description</h1>
                            <p>{gym.gymDetails[0].descreption}</p>
                            <p><strong>Category:</strong> {gym.gymDetails[0].category}</p>
                            <p><strong>Total Members:</strong> {gym.newmembers.length}</p>

                        </div>
                    </div>

                    <div className='info2'>
                        <div className='contact'>
                            <h1>CONTACT</h1>
                            <p><strong>Owner:</strong>  {gym.name}</p>

                            <p><strong>Phone:</strong> {gym.phone}</p>
                            <p><strong>Email:</strong> {gym.email}</p>
                        </div>
                        <br></br>
                        <div className='address'>
                            <h1>Address</h1>
                            <p><strong>Address:</strong> {gym.gymDetails[0].gymAddress}</p>
                            <p><strong>City:</strong> {gym.gymDetails[0].city}</p>
                        </div>
                        <a href='http://51.20.85.223:3000/' target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1 id="fithub" className='rgb'>F I T H U B</h1>
                        </a>

                    </div>


                </div>

            </div>
            }
            {loading && <Loading />}
        </>
    )
}

export default Gympage