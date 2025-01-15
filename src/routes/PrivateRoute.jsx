import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth()
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-dots loading-md"></span>
    }

    if (user) {
        return children;
    }

    <Navigate to="/login" state={location?.pathname}/>

};

export default PrivateRoute;