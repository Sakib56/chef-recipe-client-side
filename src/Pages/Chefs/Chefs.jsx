import React, { useEffect, useState } from 'react';
import ChefsCard from './ChefsCard';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://bengali-bhoj-recipe-server-sakib56.vercel.app/chefs')
            .then(response => {
                setChefs(response.data);
                setLoading(false); 
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='mt-8 md:mt-20 max-w-7xl mx-auto'>
            {
                loading ? <div className='text-center'><ClipLoader
                    color="#36d7b7"
                    // loading={loading}
                    // cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> </div> :
                    <>
                        <h1 className='text-4xl font-bold text-center mb-2 md:mb-10'>Most Popular Chefs</h1>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>

                            {

                                chefs.map(chef =>
                                    <ChefsCard key={chef.id} chef={chef}>

                                    </ChefsCard>)
                            }
                        </div></>
            }
        </div>

    );
};

export default Chefs;