import React from 'react';
// import LazyLoad from 'react-lazy-load';

const LatestRecipe = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10 md:mt-28'>
            <h1 className='text-4xl font-bold text-center md:mb-10'>Latest Recipes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='shadow-xl p-3 md:p-10'>
                    <img className='w-80 md:w-96 mx-auto h-48 rounded-lg' src="https://i2.wp.com/petukcouple.com/wp-content/uploads/2022/01/Beef-Rezala-Recipe.jpeg?resize=960%2C540&ssl=1" alt="" />
                    <div className='p-3 md:p-0'>
                        <h1 className='text-2xl font-bold md:mt-5 text-orange-500'>Beef Rezala Recipe</h1>
                        <p className='text-lg font-semibold mt-2'>Read the recipe from beginning to end, including any notes, before you begin. </p>
                    </div>
                </div>
                <div className='shadow-xl p-3 md:p-10'>
                    <img className='w-80 md:w-96 mx-auto h-48 rounded-lg' src="https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg" alt="" />
                    <div className='p-3 md:p-0'>
                        <h1 className='text-2xl font-bold md:mt-5 text-orange-500'>Chicken Recipe</h1>
                        <p className='text-lg font-semibold mt-2'>Read the recipe from beginning to end, including any notes, before you begin.</p>
                    </div>
                </div>
                <div className='shadow-xl p-3 md:p-10'>
                    <img className='w-80 md:w-96 mx-auto h-48 rounded-lg' src="https://kitchenofdebjani.com/wp-content/uploads/2022/10/Barishali-Ilish-Recipe-debjanir-rannaghar.jpg" alt="" />
                    <div className='p-3 md:p-0'>
                        <h1 className='text-2xl font-bold md:mt-5 text-orange-500'>Fish curry</h1>
                        <p className='text-lg font-semibold mt-2'>Read the recipe from beginning to end, including any notes, before you begin.</p>
                    </div>
                </div>
                <div className='shadow-xl p-3 md:p-10'>
                    <img className='w-80 md:w-96 mx-auto h-48 rounded-lg' src="https://fashionblitzs.com/wp-content/uploads/2020/07/mutton-rezala.jpg" alt="" />
                    <div className='p-3 md:p-0'>
                        <h1 className='text-2xl font-bold md:mt-5 text-orange-500'>Mutton Recipes</h1>
                        <p className='text-lg font-semibold mt-2'>Read the recipe from beginning to end, including any notes, before you begin.</p>
                    </div>
                </div>
                <div className='shadow-xl p-3 md:p-10'>
                    <img className='w-80 md:w-96 mx-auto h-48 rounded-lg' src="https://img.taste.com.au/56r_iNcB/w720-h480-cfill-q80/taste/2016/11/indian-style-vegetable-curry-59371-1.jpeg" alt="" />
                    <div className='p-3 md:p-0'>
                        <h1 className='text-2xl font-bold md:mt-5 text-orange-500'>Vegetable Recipes</h1>
                        <p className='text-lg font-semibold mt-2'>Read the recipe from beginning to end, including any notes, before you begin.</p>
                    </div>
                </div>
                <div className='shadow-xl p-3 md:p-10'>
                    <img className='w-80 md:w-96 mx-auto h-48 rounded-lg' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps21585_THCA153054D10_15_4b.jpg?fit=700,1024" alt="" />
                    <div className='p-3 md:p-0'>
                        <h1 className='text-2xl font-bold md:mt-5 text-orange-500'>Dessert Recipes</h1>
                        <p className='text-lg font-semibold mt-2'>Read the recipe from beginning to end, including any notes, before you begin.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestRecipe;