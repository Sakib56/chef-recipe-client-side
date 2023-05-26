import React from 'react';
import errorImg from '../../assets/error_page.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-full h-96 md:h-screen' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;