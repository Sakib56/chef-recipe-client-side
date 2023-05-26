import React, { useEffect, useState } from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {        
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
        // setIsLoading(false)
    }, []);

    return (
        <div>
            {
                isLoading ? <div className='h-screen w-screen flex items-center justify-center'><ClipLoader
                    color="#36d7b7"
                    // loading={loading}
                    // cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> </div> : 
                <>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                    <ToastContainer></ToastContainer>
                </>
            }
        </div>
    );
};

export default Main;