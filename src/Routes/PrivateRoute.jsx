import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;