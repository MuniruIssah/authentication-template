import React from 'react';
import {useAtom} from "jotai";
import {loggedInAtom} from "../atoms";
import {Navigate} from "react-router-dom"

const Protected = ({children}) => {
    const [loggedIn]=useAtom(loggedInAtom)
    //IF THE USER IS NOT LOGGED IN RETURNS TO LOGIN
    if(!loggedIn) <Navigate to={'/auth'} replace />

    //ELSE RENDER CONTENT
    return children;
};

export default Protected;