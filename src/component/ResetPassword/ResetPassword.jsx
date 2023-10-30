import './resetPassword.css'
import img2 from '../../assets/login&register/Forgot-password.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import axiosInstance from "../../axiosConfig/axiosinstance";
function ResetPassword() {
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


    async function check() {
        console.log('hi from reset')
        await axiosInstance.post(`/users/chk_tok`, {
            token: token
        }).then(res => {
            console.log(res.data)
            if (res.data.error) {
                if (res.data.error == "too_many_requests") {
                    dispatch(error_many(true));
                    navigateee("/", {replace: true});
                }else{
                    showAlert(res.data.error, "error");
                    navigateee('/home', { replace: true })
                }
            } else {
                setIsBusy(true);
            }
        })
    }


    async function sendPassword() {
         if (machErrorValidation === true) {
            await axiosInstance.post(`/users/reset_password`, {
                token: token,
                password: password,
                re_password: repassword
            }).then(res => {
                if (res.data.success) {
                    showAlert(res.data.success, "success");
                    navigateee('/login', { replace: true })
                } else {
                    if (res.data.error == "too_many_requests") {
                        dispatch(error_many(true));
                        navigateee("/", {replace: true});
                    }else{
                        showAlert(res.data.error, "error");
                    }
                }
            })
        }
    }

    const [machError, setMachError] = useState('');
    const [machErrorValidation, setMachErrorValidation] = useState('');


    function machingPassword(value) {

        let eleErr = document.getElementById("rePassword");
        if (value === password) {
            eleErr.classList.add('d-none');
            return true;
        } else {
            setMachError("كلمتا المرور غير متطابقتان");
            eleErr.classList.remove('d-none');
            return false;
        }
    }

    useEffect(() => {
        check()
    }, []);

    return (
        <div className="resetPassword">
            <div className="container pt-5 ">
                <div className="row ">
                    <div className="col-12 col-md-6 d-xl-block d-none">
                        <img className='w-100' src={img2}  alt='logo' />
                    </div>
                    <div className="col-12 float-end col-xl-6 col pt-5 text-end  text-white mt-5">
                        <div className='mb-2'>
                            <h1>نسيت كلمة المرور ؟ <span className='text-info'>منفعة</span> </h1>
                            <p className='fw-bold'>قم بأدخال البريد الإلكتروني وستصلك رســـالة عليه </p>
                        </div>


                            {/*<Form.Group className="mb-3" controlId="formBasicPassword">*/}
                            {/*    <Form.Label>الباسورد</Form.Label>*/}
                            {/*    <Form.Control className='w-75  ' type="password" placeholder="Password" />*/}
                            {/*</Form.Group>*/}

                        <form className="my-3 " >
                            <div className='return text-center' >
                                <h3 className={`text-capitalize fw-bold `}>اعادة تعيين كلمة المرور</h3>
                            </div>
                            <p className='text-capitalize '>
                                ادخل كملمة مرور قوية
                            </p>

                            <input className=" form-control mb-3" type="password" placeholder="ادخل كلمة المرور الجديدة" onChange={(e) => {
                                // console.log(e.target.value);
                                setPassword(e.target.value);
                            }} required autoFocus />

                            <input className=" form-control mb-3" type="password" placeholder="تأكيد كلمة المرور" onChange={(e) => {
                                machingPassword(e.target.value)
                                setMachErrorValidation(machingPassword(e.target.value));
                                //  console.log(e.target.value);
                                setRePassword(e.target.value);
                            }} required autoFocus />
                            <p id="rePassword" className='d-none text-danger mt-2'>{machError}</p>
                            <button type="button"  onClick={sendPassword} className={` form-control btn text-capitalize `}>ارسال</button>
                            <div className={`mt-2`}>
                                <Link className={` mx-2 text-danger`} to="/login">تسجيل الدخول</Link>
                            </div>
                        </form>
                        <div className=' fw-bold'>
                            <p>لا يوجد لديك حساب؟ <Link className='text-info' to='/register'>التسجيل</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
