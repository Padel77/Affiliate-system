import './register.css'
import img2 from '../../assets/login&register/register.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import axiosInstance from "../../axiosConfig/axiosinstance.js";
import Swal from "sweetalert2";
function Register() {
    const [userName,setUserName]=useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const [fullName,setFullname] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [userType,setUsertype]= useState("")
    const navigatee =useNavigate()
    const reg_submit = ()=>{
        const reg_data={
            username:userName,
            email:email,
            password:password,
            re_password:repassword,
            full_name:fullName,
            phone:phone,
            address:address,
            user_type:userType
        }
        const headers={
            'Content-Type' : 'application/json'
        }

        console.log(userType)
        axiosInstance.post(`/users/register_${userType}`,reg_data,{headers})
            .then(response=>{
                if(response.data.success){
                    Swal.fire({
                        title: 'تم التسجيل',
                        text: response.data.success,
                        icon: 'success',
                        timer: 2000, // Time in milliseconds (2 seconds in this example)
                        showConfirmButton: false
                    })
                    navigatee('/login')
                }
                else {
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
            Swal.fire({
                title: 'خطأ ',
                text: "خطأ",
                icon: 'error',
                timer: 2000, // Time in milliseconds (2 seconds in this example)
                showConfirmButton: false

            })

        })

    }



    return (<div className="register">
            <div className="container pt-5 ">
                <div className="row pb-5 ">
                    <div className="col-12 col-md-6 d-xl-block d-none">
                        <img className='w-100' src={img2} alt='logo'/>
                    </div>
                    <div className="col-12 float-end col-xl-6 col pt-5 text-end  text-white mt-1">
                        <div className='mb-2'>
                            <h1>مرحبا بك فى التسجيل فـ <span className='text-info'>منفعة</span></h1>
                            <p className='fw-bold'>أدخل بياناتك بشكل صحيح، ثم انتظر رسالة القبول الإلكترونية</p>
                        </div>
                        <Form className=' w-100 ' dir='rtl'>
                            <div className='d-flex gap-4'>
                                <Form.Group className="mb-3" controlId="formBasicFullName">
                                    <Form.Label className='fw-bold'>الاسم بالكامل </Form.Label>
                                    <Form.Control type="text" placeholder="ادخل الاسم كاملاً" onChange={(e)=>{setFullname(e.target.value)}}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicUserName">
                                    <Form.Label className='fw-bold'>اسم المستخدم </Form.Label>
                                    <Form.Control type="text" placeholder="ادخل الاسم كاملاً" onChange={(e)=>{setUserName(e.target.value)}}/>
                                </Form.Group>

                            </div>
                            <div className='d-flex gap-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-bold'>البريد الالكتروني</Form.Label>
                                    <Form.Control type="email" placeholder="البريد الالكتروني" onChange={(e)=>{setEmail(e.target.value)}}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMobileNumber">
                                    <Form.Label>رقم المحمول</Form.Label>
                                    <Form.Control type="text" placeholder="ادخل رقم المحمول" onChange={(e)=>{setPhone(e.target.value)}}/>
                                </Form.Group>

                            </div>
                            <div className='d-flex gap-4'>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>كلمة المرور</Form.Label>
                                    <Form.Control type="password" placeholder="كلمة المرور" onChange={(e)=>{setPassword(e.target.value)}}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formRePassword">
                                    <Form.Label className='fw-bold'>اعادة كلمة المرور</Form.Label>
                                    <Form.Control type="text" placeholder="اعادة كلمة المرور" onChange={(e)=>{setRepassword(e.target.value)}}/>
                                </Form.Group>
                                {/*<Form.Group className="mb-3" controlId="formBasicPassword">*/}
                                {/*    <Form.Label>رابط المنصة</Form.Label>*/}
                                {/*    <Form.Control type="text" placeholder="ادخل رابط المنصة"/>*/}
                                {/*</Form.Group>*/}

                            </div>
                            <div className='d-flex gap-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-bold'>العنوان</Form.Label>
                                    <Form.Control type="email" placeholder="العنوان" onChange={(e)=>{setAddress(e.target.value)}}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formUserType">
                                    <Form.Label>نوع المسنخدم</Form.Label>
                                    <Form.Select as="select" value={userType} type="text" placeholder="نوع المستخدم" onChange={(e)=>{setUsertype(e.target.value)}}>
                                        <option>اختر نوع المستخدم</option>
                                        <option value="seller">بائع</option>
                                        <option value="marketer">مسوق</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <Button className='ps-5 pe-5 fw-bold' variant="primary" type="button" onClick={reg_submit}>
                                التسجيــل
                            </Button>
                        </Form>
                        <div className=' fw-bold'>
                            <p> يوجد لديك حساب؟ <Link className='text-info' to='/login'>الدخول</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Register;
