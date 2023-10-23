import './forgetPassword.css'
import img2 from '../../assets/login&register/Forgot-password.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
function ForgetPassword() {
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
                        <Form className=' w-100 d-block ' dir='rtl'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>البريد الالكترونى</Form.Label>
                                <Form.Control className='w-75  ' type="email" placeholder="Enter email" />

                            </Form.Group>

                            {/*<Form.Group className="mb-3" controlId="formBasicPassword">*/}
                            {/*    <Form.Label>الباسورد</Form.Label>*/}
                            {/*    <Form.Control className='w-75  ' type="password" placeholder="Password" />*/}
                            {/*</Form.Group>*/}

                            <Button className='ps-5 pe-5 fw-bold' variant="primary" type="submit">
                                ارسال
                            </Button>
                        </Form>
                        <div className=' fw-bold'>
                            <p>لا يوجد لديك حساب؟ <Link className='text-info' to='/register'>التسجيل</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;