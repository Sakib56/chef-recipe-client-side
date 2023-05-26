import React from 'react';

const RecipeCategory = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10 md:mt-28'>
            <h1 className='text-4xl font-bold text-center mb-7 md:mb-16'>Recipe Categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-5 mt-3 md:mt-7'>
                <div className='px-2'>
                    <img className='w-52 md:w-96 h-40 md:h-52 rounded-lg' src="https://assets.epicurious.com/photos/5c93ede3e6249a2fe87f23c2/4:3/w_5252,h_3939,c_limit/Grilled-Marinated-Leg-of-Lamb-118032019.jpg" alt="" />
                    <h1 className='text-2xl font-bold text-center text-orange-500'>Meat Recipe</h1>
                </div>
                <div className='px-2'>
                    <img className='w-52 md:w-96 h-40 md:h-52 rounded-lg' src="https://img.taste.com.au/BU7jqjpF/w720-h480-cfill-q80/taste/2016/11/chargrilled-fish-with-green-chilli-coriander-and-coconut-relish-70446-1.jpeg" alt="" />
                    <h1 className='text-2xl font-bold text-center text-orange-500'>Fish Recipe</h1>
                </div>
                <div className='px-2'>
                    <img className='w-52 md:w-96 h-40 md:h-52 rounded-lg' src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Gosht-Biryani-1300x868.jpeg?v=1625193165" alt="" />

                    <h1 className='text-2xl font-bold text-center text-orange-500'>Mutton Biryani</h1>
                </div>
                <div className='px-2'>
                    <img className='w-52 md:w-96 h-40 md:h-52 rounded-lg' src="https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Homemade-Smores-Oreo-Cookies.webp" alt="" />
                    <h1 className='text-2xl font-bold text-center text-orange-500'>Dessert Recipes</h1>
                </div>
            </div>
        </div>
    );
};

export default RecipeCategory;