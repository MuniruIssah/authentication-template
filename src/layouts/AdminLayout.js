import React from 'react';
import {Outlet} from "react-router-dom"
const AdminLayout = () => {
    return (
        <div>
        {/*    Navigation*/}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default AdminLayout;