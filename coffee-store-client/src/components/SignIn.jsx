import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

import Swal from 'sweetalert2';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e =>{

        e.preventDefault();
        

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('currentPassword');

        console.log(email, password)

        signInUser(email, password)
        .then(result =>{
            Swal.fire(
                'LogIn Successful!',
                'Directed To Home',
                'success'
            ).then(()=>{
                navigate(location?.state ? location.state : '/home');
            })

            
        })
        .catch((error)=>{
            if (error.message === 'Invalid email or password') {
                Swal.fire('Login Failed', 'Invalid email or password', 'error');
              } else {
                Swal.fire('An error occurred while signing in', 'Please try again later', 'error');
              }
        })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">You Will be Landing On a Private Page</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="currentPassword" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='mt-2 text-center'>Do not have an account?<span className='text-blue-600'> <a href="/signup">SignUp</a></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;