import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import './ChefsCard.css';
import { FaArrowRight, FaThumbsUp } from 'react-icons/fa';

const ChefsCard = ({ chef }) => {
    // console.log(chef)
    const { id, chef_picture, chef_name, years_of_experience, likes, num_recipes
    } = chef;
    return (
        <div className='shadow-xl text-center md:text-left p-5 md:p-10'>
            <LazyLoad height={200} once threshold={0.95}>
                <img className='w-80 mx-auto md:w-96 h-48 rounded-lg' src={chef_picture} alt="" />
            </LazyLoad>
            <h1 className='text-2xl font-bold mt-2 md:mt-5 text-orange-600'>{chef_name}</h1>
            <p className='text-md font-semibold '>Year of experience: {years_of_experience}</p>
            <div className='md:flex items-end justify-between mt-5 md:mt-10'>
                <div>
                    <p className='text-lg font-semibold'>Total Recipe : {num_recipes}</p>
                    <p className='text-lg font-semibold flex items-center justify-center gap-x-2'>People Likes: {likes} <span className='mb-1'><FaThumbsUp></FaThumbsUp></span> </p>
                </div>
                <div>
                    <Link to={`/chefs/${id}`}>
                        <button className='bg-orange-400 text-white font-bold px-5 py-2 rounded-md mt-3 md:mt-0'>
                            View Recipes
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ChefsCard;