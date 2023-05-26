import React from 'react';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-0 p-5 md:p-0'>
                <div className=''>
                    <h1 className='text-2xl md:text-5xl font-semibold font-sans'>Inspiring food lovers <br /> everywhere</h1>
                    <p className='mt-5 text-base md:w-128'>Great Chefs is the team behind the fastest growing food websites in the BD.Both sites are go-to destinations for foodies in search of recipe inspiration, cooking guides and in-depth features on the world of food, drink, cooking and chefs.</p>
                </div>
                <div className=''>
                    <img className='w-full rounded' src="https://global-uploads.webflow.com/634c3ec362fcbb6e6cabf43f/63d2cceec826f5dd7a25532b_Chef.png" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-32'>
                <div className='shadow-lg p-5 md:p-10 rounded'>
                    <h1 className='text-2xl font-bold mb-3'>Who we are</h1>
                    <p className='text-md'>Bengali Bhoj is an entrepreneurial business that was founded in 2023 with the ambition of being the go-to website for foodies and the preferred partner of a select group of premium food brands. We believe that most food websites cater to the lowest common denominator, but foodies want more. We work with the finest chefs and food writers to create recipes, guides, features and videos that inspire foodies to cook for themselves and others, all whilst celebrating the diversity of bengali food scene.</p>
                </div>
                <div className='shadow-lg p-5 md:p-10 rounded'>
                    <h1 className='text-2xl font-bold mb-3'>What we do</h1>
                    <p className='text-md'>We have collected over 5,000 recipes from the most interesting and inspiring chefs and food writers cooking in Bengalian and Italy today. Our content is designed to inspire foodies from cooking with squid ink and learning to spherify to mastering knife skills and barbecuing lamb, we have recipe ideas and how-to-cook articles covered. We also bring you unique experiences, regular competitions, in-depth features and the latest in food trends.</p>
                </div>
                <div className='shadow-lg p-5 md:p-10 rounded'>
                    <h1 className='text-2xl font-bold mb-3'>Get involved</h1>
                    <p className='text-md'>Our community of one million like-minded foodies come to Great Bengali Chefs for all their culinary inspiration, and by registering for an account you get access to a recipe binder and regular newsletters. You can also join our Cookbook Club on Facebook or sign up to the Great Bengali Chefs Club, which offers unlimited access to our content, exclusive recipes, videos and competitions, plus if you opt to become a Gold member free gifts delivered to your door.</p>
                </div>
            </div>
            <div className='my-5 md:my-20 text-center p-2'>
                <h2 className='text-lg mb-3 font-bold'>Meet the team</h2>
                <p>We have a great team that works very hard to make sure we are the best food website out there. Do get <br /> in touch if you want to join us.</p>
            </div>
        </div>
    );
};

export default About;