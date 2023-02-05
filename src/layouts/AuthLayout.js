import React from 'react';
import {Outlet} from "react-router-dom"
const AuthLayout = () => {
    return (
        <div className={"w-[100vw] h-[100vh] bg-zinc-300 flex items-center justify-center"}>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;