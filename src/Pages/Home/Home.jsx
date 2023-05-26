import React from 'react';
import Banner from './Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { Outlet } from 'react-router-dom';
import RecipeCategory from './Recipe/RecipeCategory';
import LatestRecipe from './Recipe/LatestRecipe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <RecipeCategory></RecipeCategory>
            <LatestRecipe></LatestRecipe>
        </div>
    );
};

export default Home;