import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';

const ViewRecipe = () => {
    window.scrollTo(0, 0)
    const [recipes, setRecipes] = useState([])
    const chef = useLoaderData();
    const { id, bio, chef_picture, chef_name, years_of_experience, likes, num_recipes
    } = chef;
    const allRecipe = recipes.filter(recipe => recipe.id == id)
    console.log(allRecipe)
    useEffect(() => {
        fetch('https://bengali-bhoj-recipe-server-sakib56.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    // console.log(recipes)
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto md:my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 shadow-lg rounded p-5 md:p-10'>
                    <div className='p-3 md:p-10'>
                        <h1 className='text-2xl font-bold text-orange-500'>{chef_name}</h1>
                        <p className='text-lg font-semibold mt-5'>{bio}</p>
                        <p className='text-lg font-semibold mt-5'>Experience: {years_of_experience}</p>
                        <p className='text-lg font-semibold'>Number of Recipe: {num_recipes}</p>
                        <p className='text-lg font-semibold'>Likes Number {likes}</p>
                    </div>
                    <div>
                        <LazyLoad height={200} once threshold={0.95}>
                            <img className='w-72 md:w-128 rounded-2xl' src={chef_picture} alt="" />
                        </LazyLoad>

                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5'>
                {

                    allRecipe.map(recipe =>
                        <RecipeCard key={recipe.recipe_no} recipe={recipe}
                        >
                        </RecipeCard>)
                }
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>

    );
};

export default ViewRecipe;