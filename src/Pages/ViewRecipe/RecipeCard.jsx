import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    const [show, setShow] = useState(true)

    const handleFavoriteBtn = () => {
        toast.success('the recipe is your favorite ', {
            position: toast.POSITION.TOP_CENTER
        });
        setShow(false);
    }
    console.log(recipe)
    const { name, rating, method, ingredients } = recipe;
    return (
        <div className='shadow-2xl p-10 h-128 relative'>
            <h1 className='text-xl text-center font-bold border-b-2 mb-5 border-b-orange-500 text-orange-500'>{name}</h1>
            <p className='text-md font-semibold'>Ingredients:</p>
            {ingredients.map((ingredient, index) =>
                <p className='text-base italic font-serif' key={index}>
                    <span className=' mr-2'>  {`${index + 1}`}.</span>{ingredient}
                </p>
            )}
            <p className='text-md mt-5'> <span className='font-bold'>Method:</span> {method.slice(0, 200)} ....</p>
            <div className='absolute bottom-0 mb-5'>
                <div className='mb-2'>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                </div>
                {
                    show ? <button onClick={() => { handleFavoriteBtn() }} className='bg-orange-500 text-white px-10 py-2 rounded'>Favorite </button>:
                    <button onClick={() => { handleFavoriteBtn() }} className='btn-disabled text-white px-10 py-2 rounded'>Favorite </button>
                }

            </div>

        </div>
    );
};

export default RecipeCard;