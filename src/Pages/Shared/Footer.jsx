import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-screen-2xl mx-auto bg-gray-800'>
            <footer className="footer p-20 text-white md:mt-20 ">
                <div>
                    <span className="footer-title text-xl">Subscribe</span>
                    <span className='text-xl'>Register and get notified about all the news <br /> & updates before it gets too late</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Your Email address" className="input input-bordered w-full " />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Sign UP</button>
                        </div>
                    </div>
                </div>

                <div className='text-lg'>
                    <span className="footer-title">Explore</span>
                    <a className="link link-hover">Browse Recipes</a>
                    <a className="link link-hover">Submit a Recipe</a>
                    <a className="link link-hover">Our Chefs</a>
                    <a className="link link-hover"> Latest News</a>
                    <a className="link link-hover">  Contact</a>
                </div>
                <div className='text-lg'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <div className='text-white text-center pb-5'>
                <p>Copyright © 2023 - All right reserved by Bengali Bhoj</p>
            </div>
        </div>

    );
};

export default Footer;