import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef();
    const { user, userLogIn, googleLogin, githubLogin, passwordReset } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const location = useLocation()

    console.log(location)
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    const handleSignIn = event => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
            })
    }

    const handlePasswordReset = (event) => {
        const email = emailRef.current.value;
        if (!email) {
            alert("please provide email address")
            return
        }
        passwordReset(email)
            .then(result => {
                alert('please check your email')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-10">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full md:w-128  shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'
                                    ref={emailRef} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p onClick={() => { setShow(!show) }}>{
                                        show ? 'Hide password' : 'Show password'
                                    }</p>
                                </label>

                                <label className="label">
                                    <div>Forget your password ? <span onClick={handlePasswordReset} className='link text-xl text-blue-600'>Reset</span></div>
                                </label>
                                <label className="label">
                                    <p>New User Please ? <Link className='link text-xl text-blue-600' to='/resister'>Resister</Link></p>
                                </label>
                            </div>
                            <div><p className='text-red-600'>{error}</p></div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full">Login</button>
                            </div>
                        </form>
                        <div className="mb-10 text-center">
                            <button onClick={handleGoogleLogin} className=" btn btn-outline w-5/6 text-blue-700">Login with Google <FaGoogle className='ml-3 text-lg '></FaGoogle></button>
                            <button onClick={handleGithubLogin} className=" btn btn-outline w-5/6 mt-5 ">Login with Github <FaGithub className='ml-3 text-lg '></FaGithub></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;