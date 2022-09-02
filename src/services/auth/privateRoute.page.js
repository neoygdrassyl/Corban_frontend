import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'rsuite';
import { AuthContext } from '../../resources/customs/contextProviders/auth.provider'
import { UtilContext } from '../../resources/customs/contextProviders/util.provider';

const PrivateRoute = () => {
    let auth = useContext(AuthContext);
    let location = useLocation();
    const utilities = useContext(UtilContext);
    const btn = utilities.getTranslation('btns');

    let [login, setLogin] = React.useState(false);
    let [load, setLoad] = React.useState(0);

    React.useEffect(() => {
        if (login == false && load == 0) {
            auth.check((cb) => {
                setLogin(cb);
                setLoad(1);
            });
        }
    }, [load]);


    if (load == 0) return  <div className='txt-c my-3'><Loader size="lg" content={btn.load} vertical /></div>
    return login ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
}


export default PrivateRoute;