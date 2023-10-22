import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-xs"></span>
    }

    if(user){

        return children;

    }
    return <Navigate to ="/signin"></Navigate>;
};

export default PrivateRoute;