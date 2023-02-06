import React from 'react';
import {useAtom} from "jotai";
import {roleAtom} from "../atoms";
import {useNavigate} from "react-router-dom";

const AdminProtected = ({children}) => {
    const navigate=useNavigate();
    //CHECK USER ROLE
    const [role]=useAtom(roleAtom)

    //GO BACK TO SAFETY
    if(!role.toUpperCase()==="ADMIN") return navigate(-1,{replace:true})

    //RENDER CONTENT
    return children;
};

export default AdminProtected;