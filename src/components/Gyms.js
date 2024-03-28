import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from "axios";
import Gymcard from './Gymcard';

import "../CSS/gymcard.css";
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const Gyms = () => {

    const navigate = useNavigate();

    const [gym, setgym] = useState([]);
    const [loading, setLoading] = useState(true);


    const getgyms = async () => {
        try{
        const res = await axios.get("http://51.20.85.223:5001/allgym");

        // console.log(res.data);
        setgym(res.data);
        setLoading(false);


        }
        catch(err){
            console.log(err);
            navigate("/signin");



        }
    }

    useEffect(() => {
        getgyms();
    }, [])
    return (
        <>
            <Navbar />

            <div className=' mar1 '>
                <div className='center'>

                    <h1 className='coheading' >All registered GYMs</h1>
                </div>


                <div className='spaceSection box1'>
                    {gym.map((curr, index) => {

                        return (
                            <>
                                <Gymcard gymInfo={curr} index={index}></Gymcard>


                            </>
                        )

                    })}
                </div>


                <div>

                </div>
            </div>
            {loading && <Loading/>}

        </>
    )
}

export default Gyms