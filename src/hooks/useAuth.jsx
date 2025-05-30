import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;