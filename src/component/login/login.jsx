import './login.css'
import img2 from '../../assets/login&register/login.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosInstance from "../../axiosConfig/axiosinstance.js";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {is_s_admin,usernamered,usertypered,usertokenred} from "../../store/action";
import {AsyncStorage} from "reactjs-async-localstorage";

function Login() {

    const [userName,setUserName]=useState("")
    const [password,setPassword] = useState("")
    const [userToken,setUserToken] = useState("")
    const [loader,setLoader] = useState(false)
    const navigate =useNavigate()
    const dispatch = useDispatch();

    const userCheck = async ()=>{


            console.log('uesr check')
             const toto = await AsyncStorage.getItem('manfa3aToken')
            axiosInstance.post('/users/user_check_mobile',{token:toto})
                .then(response=>{
                    console.log(response)
                    if(response.data.success){
                        dispatch(usernamered(response.data.success['fullname']))
                        dispatch(usertypered(response.data.success['usertype']))
                        navigate('/home')
                    }

                }).catch(reso=>{
                console.log(reso)
            })

        // if (userToken){
        //
        //
        // }
    }
    useEffect(() => {

        const chkTok =async ()=>{

        console.log("use efect from login")
            try {
                const tuserToken = await AsyncStorage.getItem("manfa3aToken")
                console.log(tuserToken)
                if (tuserToken) {
                    dispatch(usertokenred(tuserToken))
                    setUserToken(tuserToken)

                }
            }

            catch {

            }}

            chkTok()
        userCheck()


    }, [userName]);
    const login_submit = ()=>{
        setLoader(true)
        const reg_data={
            username:userName,
            password:password,
        }
        const headers={
            'Content-Type' : 'application/json'
        }
        axiosInstance.post("/users/login",reg_data,{headers})
            .then(response=>{
                if(response.data.success){
                    setLoader(false)
                    // console.log(response.data['userdata'])
                    localStorage.setItem("manfa3aToken", response.data['user_data'].token);
                    localStorage.setItem("manfa3aProfile",response.data['user_data'].user_img)
                    if (response.data['user_data'].usertype == 'Super_user') {
                        dispatch(is_s_admin(true));

                    }

                    if (response.data.error == "too_many_requests") {
                        dispatch(error_many(true));
                        navigate("/", {replace: true});
                    }
                    navigate("/home");

                    Swal.fire({
                        title: 'تم تسجيل الدخول بنجاح',
                        text: response.data.success,
                        icon: 'success',
                        timer: 2000, // Time in milliseconds (2 seconds in this example)
                        showConfirmButton: false
                    })
                }
                else {
                    setLoader(false)
                    console.log(response.data)
                    Swal.fire({
                        title: 'خطأ',
                        text: response.data.error,
                        icon: 'error',
                        // confirmButtonText: 'Cool'
                        timer: 2000, // Time in milliseconds (2 seconds in this example)
                        showConfirmButton: false
                    })
                }
            }).catch(reso=>{
            setLoader(false)
            Swal.fire({
                title: 'خطأ ',
                text: "خطأ",
                icon: 'error',
                timer: 2000, // Time in milliseconds (2 seconds in this example)
                showConfirmButton: false

            })

        })

    }

    return (
        <div className="login">
            <div className="container pt-5 ">
                <div className="row pb-5 ">
                    <div className="col-12 float-end col-md-6 pt-5 text-end  text-white mt-5">
                        <div className='mb-2'>
                            <h1>مرحبا بك فى <span className='text-info'>منفعة</span> </h1>
                            <p className='fw-bold'>قم بتسجيل الدخول إلى حسابك باستخدام اسم السمتخدم وكلمة المرور</p>
                        </div>
                        <Form className=' w-100 d-block ' >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>اسم المستخدم</Form.Label>
                                <Form.Control className='w-75  ' type="text" placeholder="ادخل اسم السمتخدم"  onChange={(e)=>{setUserName(e.target.value)}}/>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>كلمة المرور</Form.Label>
                                <Form.Control className='w-75  ' type="password" placeholder="ادخل كلمة المرور" onChange={(e)=>{setPassword(e.target.value)}}/>
                            </Form.Group>

                        <p>نسيت كلمة المرور؟ <Link className='text-info' to='/ForgetPassword'>استرجاع</Link> </p>
                            <Button className='ps-5 pe-5 fw-bold' variant="primary" type="button" onClick={login_submit}>
                                {loader?<div className="spinner-border" role="status">
                                    < span className = "visually-hidden" > Loading...</span>
                                </div>:'الدخول'
                                }
                            </Button>
                        </Form>
                        <div className=' fw-bold'>
                            <p>لا يوجد لديك حساب؟ <Link className='text-info' to='/register'>التسجيل</Link> </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-md-block d-none">
                        <img className='w-100' src={img2}  alt='logo' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
