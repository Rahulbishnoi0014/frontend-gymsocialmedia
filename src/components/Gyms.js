import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Gymcard from './Gymcard';
import '../CSS/gymcard.css';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const Gyms = () => {
    const navigate = useNavigate();

    const [gym, setGym] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [searchCity, setSearchCity] = useState('');

    const getGyms = async () => {
        try {
            const res = await axios.get('http://51.20.85.223:5001/allgym');
            setGym(res.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            navigate('/signin');
        }
    };

    useEffect(() => {
        getGyms();
    }, []);

    // Function to handle filter changes
    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    // Function to handle city search
    const handleCitySearch = (event) => {
        setSearchCity(event.target.value.toLowerCase());
    };

    // Filter gyms based on selected options and city search
    const filteredGyms = gym.filter((gym) => {
        if (selectedFilter === '' && searchCity === '') {
            return true;
        } else {
            return (
                (selectedFilter === '' || gym.gymDetails[0].category === selectedFilter) &&
                (searchCity === '' || gym.gymDetails[0].city.toLowerCase().includes(searchCity.toLowerCase()))
            );
        }
    });

    return (
        <>
            <Navbar />

            <div className='mar1'>
                <div className='center'>
                    <h1 className='coheading'>All registered GYMs</h1>
                </div>
                <div className='filterbox'>
                    {/* Filter dropdown */}
                    <div className='filter'>
                        <select value={selectedFilter} onChange={handleFilterChange}>
                            <option value=''>All Gyms</option>
                            <option value='CrossFit'>CrossFit</option>
                            <option value='Boutique'>Boutique Gyms</option>
                            <option value='Powerlifting'>Powerlifting Gyms</option>
                        </select>
                    </div>

                    {/* City search */}
                    <div className='city-search'>
                        <input type='text' placeholder='Search by City' value={searchCity} onChange={handleCitySearch} />
                    </div>
                </div>
                {/* Display filtered gyms */}
                <div className='spaceSection box1'>
                    {filteredGyms.map((curr, index) => (
                        <Gymcard gymInfo={curr} key={index} />
                    ))}
                </div>
            </div>

            {loading && <Loading />}
        </>
    );
};

export default Gyms;
