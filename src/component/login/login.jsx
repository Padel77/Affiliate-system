import './login.css'
import img2 from '../../assets/login&register/login.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
function Login() {
    return (
        <div className="login">
            <div className="container pt-5 ">
                <div className="row pb-5 ">
                    <div className="col-12 col-md-6 d-md-block d-none">
                        <img className='w-100' src={img2}  alt='logo' />
                    </div>
                    <div className="col-12 float-end col-md-6 pt-5 text-end  text-white mt-5">
                        <div className='mb-2'>
                            <h1>مرحبا بك فى <span className='text-info'>منفعة</span> </h1>
                            <p className='fw-bold'>قم بتسجيل الدخول إلى حسابك باستخدام اسم السمتخدم وكلمة المرور</p>
                        </div>
                        <Form className=' w-100 d-block ' dir='rtl'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>اسم المستخدم</Form.Label>
                                <Form.Control className='w-75  ' type="text" placeholder="ادخل اسم السمتخدم" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>كلمة المرور</Form.Label>
                                <Form.Control className='w-75  ' type="password" placeholder="ادخل كلمة المرور" />
                            </Form.Group>

                        <p>نسيت كلمة المرور؟ <Link className='text-info' to='/ForgetPassword'>استرجاع</Link> </p>
                            <Button className='ps-5 pe-5 fw-bold' variant="primary" type="submit">
                                الدخول
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

export default Login;