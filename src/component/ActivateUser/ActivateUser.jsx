import './ActivateUser.css'
import img2 from '../../assets/login&register/Forgot-password.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import axiosInstance from "../../axiosConfig/axiosinstance";
function ActivateUser() {
    console.log("hi from reset")

    const { token } = useParams();
    const [isBusy, setIsBusy] = useState(true);
    const [password, setPassword] = useState();
    const [repassword, setRePassword] = useState();
    const navigateee = useNavigate();
    const dispatch = useDispatch();
    function showAlert(message, icon) {
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 1500
        });
    }


    async function checktok() {
        await axiosInstance.post(`/users/chk_active`, {
            token: token
        }).then(res => {
            // console.log(res)
            if (res.data.success) {
                sendActivate();
            } else {
                if (res.data.error == "too_many_requests") {
                    dispatch(error_many(true));
                    navigateee("/", {replace: true});
                }else{
                    document.getElementById("form").innerHTML = `<div className="text-center ">
          <h4 className="text-capitalize fw-bold">
           res.data.error    
          </h4>
          </div>` ;
                }

            }
        })
    }


    async function sendActivate() {
        console.log('from activate ',token)
        await axiosInstance.post(`/users/marketer_activation`, {
            token: token
        }).then(res => {
            if (res.data.success) {
                showAlert(res.data.success, "success");
                navigateee('/login', { replace: true });
            } else {
                if (res.data.error == "too_many_requests") {
                    dispatch(error_many(true));
                    navigateee("/", {replace: true});
                }else{
                    navigateee('/activate', { replace: true });
                    showAlert(res.data.error, "error");
                    document.getElementById("form").innerHTML = `<div className="text-center ">
            <h4 className="text-capitalize fw-bold">
           {res.data.error} 
            </h4>
            </div>` ;
                }
            }
        })
    }


    // function checkUser() {
    //     if (localStorage.getItem("asefToken")) {
    //         navigateee("/home");
    //     } else {
    //         check();
    //     }
    // }

    useEffect(() => {
        checktok();
    }, []);

    return (
        <>
            <section className={` `}>
                 <div className='d-flex align-items-center'>
                    <div className="w-100">
                        <div className={`  row  mt-5`}>
                            <div className=" my-5 form ">
                                <div className="forText">
                                    <div className='form-contain'>
                                        <form id="form" className="my-3 ">

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ActivateUser;
