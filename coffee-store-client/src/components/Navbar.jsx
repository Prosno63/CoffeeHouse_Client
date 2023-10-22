import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {

        logOut()
            .then(result => {

                toast('Signed Out');

                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 1200); // Adjust the delay duration as needed
                });
            })
            .then(() => {
                // Perform the navigation
                navigate(location?.state ? location.state : '/login');



            })
            .catch(error => {

            })

    }

    const navLinks = <>

        <li className='text-lg'><NavLink to='/home'>Home</NavLink></li>
        <li className='text-lg'><NavLink to='/addCoffee'>Add Coffee</NavLink></li>
        <li className='text-lg'><NavLink to='/'>My Cart</NavLink></li>
        <li className='text-lg'><NavLink to='/users'>Users</NavLink></li>

    </>
    return (
        <div className="navbar bg-cyan-200 p-5">
          

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-24 rounded-full' src="https://i.ibb.co/bR9qZkk/logo.jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?

                            <>
                                <div className='flex flex-col-reverse lg:flex lg:flex-row gap-2 items-center m-2'>
                                    <span>{user.email}</span>

                                    <button onClick={handleSignOut} className='btn'><Link to='/home'>SignOut</Link></button>
                                </div>

                            </>


                            :
                            <Link to='/signin'>
                                <button className="btn">Login </button>
                            </Link>
                    }


                </div>

                <ToastContainer />

         


        </div>
    );
};

export default Navbar;