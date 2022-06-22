import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider'

const PrivateRoute = () => {
    let auth = useContext(AuthContext);
    let location = useLocation();
    return setTimeout(auth.check((cb) => cb), 100) ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
}


export default PrivateRoute;