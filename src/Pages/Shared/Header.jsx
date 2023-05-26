import React, { useContext, useState } from 'react';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [nameVisible, setNameVisible] = useState(false);
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <nav className='pt-1 pb-2 bg-base-100 sticky top-0 z-10'>
            <div className="navbar max-w-6xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to="/blog">blog</ActiveLink>
                            <ActiveLink to="/about">About Us</ActiveLink>


                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-0 text-xl md:text-4xl font-bold'>Bengali Bhoj</h1>
                        <small className='text-orange-500 text-xl font-semibold italic'>Cooking recipe</small>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-bold gap-5">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                        <ActiveLink to="/about">About Us</ActiveLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex items-center gap-5 relative'>
                            <div className=''>
                                {
                                    user.photoURL && <img className='w-12 h-12 rounded-full' src={user?.photoURL} onMouseEnter={() => setNameVisible(true)} onMouseLeave={() => setNameVisible(false)} alt="" />
                                }
                                <p className='absolute b-2 text-lg font-semibold mb-1'>{nameVisible && <span className="user-name">{user?.displayName}</span>}</p>
                            </div>
                            <button onClick={handleLogout} className='btn'>Sign Out</button>
                        </div> :
                            <div>
                                <ActiveLink to='/login'><div className='border font-semibold hover:bg-gray-300 text-lg rounded border-black px-5 py-2'>
                                    Login
                                </div></ActiveLink>
                            </div>
                    }
                </div>
            </div>
        </nav>

    );
};

export default Header;