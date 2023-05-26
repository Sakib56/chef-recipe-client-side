import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { toast , ToastContainer} from 'react-toastify';


const Resister = () => {
    const navigate = useNavigate()
    const auth = getAuth(app)
    const [show, setShow] = useState(false)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const { user, createUser, updatedUserInfo, logOut } = useContext(AuthContext)
    // console.log(createUser)

    const handleResister = event => {
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoUrl = form.Photo_url.value;
        console.log(name, email, password, photoUrl)

        if (password.length < 6) {
            setError('your password At least 6 Characters ')
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updatedUserInfo(loggedUser, name, photoUrl)
                    .then(() => { })
                    .catch(error => console.log(error))
                setSuccess('Successfully Account Created')
                logOut()
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(error => console.log(error))
                form.reset()
                navigate('/', { replace: true })
                toast.success('Registration successfully completed ! please Login', {
                    position: toast.POSITION.TOP_CENTER
                });
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-10">Resister now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full md:w-128 shadow-2xl bg-base-100">
                        <form onSubmit={handleResister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input type='url' name='Photo_url' placeholder="Your Photo url link" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                                    <p>Already Resister ? <Link className='link text-blue-600 text-xl font-semibold' to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <div>
                                <p className='text-red-600'>{error}</p>
                                <p className='text-green-500 font-semibold'>{success}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Resister</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Resister;