import { Outlet, Navigate } from "react-router-dom";
import react, { useEffect, useState } from 'react';
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuth, istest, isload } from "../store/action";
import { error_many } from "../store/action";
import axiosInstance from '../axiosConfig/axiosinstance';
// import axiosInstance2 from '../axiosConfig/instance2';
const PrivateRoutes = () => {

    const [isBusy, setIsBusy] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem("manfa3aToken");
    const [authent, setAuthent] = useState({ "token": false })
    const valueurl = useSelector((state) => state.valueurl);
    async function check() {
        axiosInstance.post(`/user/check/`,
            {
                token: token
            }).then(res => {
                console.log("res check",res)
                setIsBusy(true);
                setAuthent({ "token": true });
                if (res.data.name) {
                    dispatch(isAuth(res.data));
                    dispatch(istest(true));
                    dispatch(isload(true));
                }else if (res.data.error == "too_many_requests") {
                    dispatch(error_many(true));
                    navigate("/", {replace: true});
                }else{
                    console.log(res.data.error)
                     localStorage.removeItem("manfa3aToken");
                }
            }).catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        if (token) {
            check();
        } else {
            navigate('/login');
        }

    }, [token]);

    return (
        <>
            {
                isBusy ? (authent.token ? <Outlet /> : <Navigate to="/login" />) : (<div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
                    <div>
                        <ReactLoading type="spin" color="#00537f"
                            height={100} width={50} />
                    </div>

                </div>)

            }


        </>
    )


}


export default PrivateRoutes;
