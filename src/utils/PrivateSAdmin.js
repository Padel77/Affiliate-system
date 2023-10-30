import { Outlet, Navigate } from "react-router-dom";
import {  useSelector } from "react-redux";


const PrivateSAdmin = () => {

    const is_s_admin = useSelector((state) => state.is_s_admin);
       
    return(
        <>
        {is_s_admin ? <Outlet/> : <Navigate to="/maindashboard"/>}     
        </>
    )
    
}


export default PrivateSAdmin;