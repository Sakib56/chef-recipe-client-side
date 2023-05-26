import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto relative'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-screen h-60 md:h-140">
                        <img src="https://www.westend61.de/images/0001015939pw/two-chefs-standing-in-a-restaurant-kitchen-plating-food-MINF03816.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-screen h-60 md:h-140">
                        <img src="https://images.france.fr/zeaejvyq9bhj/4uVEZ294wWLVmDHXl8S2bW/c8f9b91c595b7384c7c2359359110a7b/chef-adobe-233304884.jpg?w=1120&h=490&q=70&fm=webp&fit=fill" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-screen h-60 md:h-140">
                        <img src="https://www.hitsa.com.au/wp-content/uploads/types-of-chefs-1030x687.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div className='absolute top-2 md:top-20 right-2 md:right-20 w-32 md:w-80 p-2 md:px-5 md:py-10 bg-zinc-100 opacity-70 bg-opacity-90 rounded'>
                    <h1 className='text-xs md:text-4xl text-orange-500 font-bold'>A Chef In  Every  Tasty Meal Box</h1>
                    <p className='md:mt-3 md:font-sans text-xs md:text-xl font-semibold'>Want to learn cook but confused how to start ?</p>
                    <p className='text-xs md:text-xl font-semibold md:mt-2'>No need to worry again</p>
                    <h1 className='text-xs md:text-2xl md:mt-5 font-bold text-orange-500'>Let's start Cooking with Popular Recipe</h1>
                </div>
            </div>

        </div>
    );
};

export default Banner;