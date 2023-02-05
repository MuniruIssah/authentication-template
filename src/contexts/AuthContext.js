import React, {useContext, useState} from 'react';

const AuthContext=React.createContext({});
export const useAuth=()=>useContext(AuthContext);

const AuthProvider = () => {
    const [user,setUser]=useState()

    let values={
        user
    }
    return (
        <AuthContext.Provider value={values}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;