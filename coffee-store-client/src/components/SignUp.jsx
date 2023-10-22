import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = e =>{

        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 6) {
            Swal.fire("Password must be at least 6 characters");
            return;
          }

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            const createdAt = result.user?.metadata?.creationTime
            const user = {email, password, createdAt};

            fetch (' https://coffee-store-server-nlogatvug-istiaks-projects.vercel.app/user', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire('Account Has been Created!! You will be direct to Home')
                    .then(()=>{
                        navigate(location?.state ? location.state : '/home');
                    })
                }
            })
        })
        .catch(error=>{
            Swal.fire("Password Must be of 6 Characters")
        })



    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleSignUp} className="card-body">
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <button className="btn btn-primary">Sign Up</button>
                          
                        </div>

                        <p className='mt-2 text-center'>Already have an account?<span className='text-blue-600'> <a href="/signin">SignIn</a></span></p>
             
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;