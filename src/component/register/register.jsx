import './register.css'
import img2 from '../../assets/login&register/register.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";

function Register() {
    return (<div className="register">
            <div className="container pt-5 ">
                <div className="row pb-5 ">
                    <div className="col-12 col-md-6 d-xl-block d-none">
                        <img className='w-100' src={img2} alt='logo'/>
                    </div>
                    <div className="col-12 float-end col-xl-6 col pt-5 text-end  text-white mt-5">
                        <div className='mb-2'>
                            <h1>مرحبا بك فى التسجيل فـ <span className='text-info'>منفعة</span></h1>
                            <p className='fw-bold'>أدخل بياناتك بشكل صحيح، ثم انتظر رسالة القبول الإلكترونية</p>
                        </div>
                        <Form className=' w-100 ' dir='rtl'>
                            <div className='d-flex gap-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-bold'>الاسم بالكامل </Form.Label>
                                    <Form.Control type="text" placeholder="ادخل الاسم كاملاً"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>رقم المحمول</Form.Label>
                                    <Form.Control type="text" placeholder="ادخل رقم المحمول"/>
                                </Form.Group>
                            </div>
                            <div className='d-flex gap-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-bold'>الايميل</Form.Label>
                                    <Form.Control type="email" placeholder="ادخل عنوان الايميل"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>الباسورد</Form.Label>
                                    <Form.Control type="password" placeholder="ادخل الباسورد"/>
                                </Form.Group>
                            </div>
                            <div className='d-flex gap-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-bold'>اسم المنصة</Form.Label>
                                    <Form.Control type="text" placeholder="اسم المنصة"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>رابط المنصة</Form.Label>
                                    <Form.Control type="text" placeholder="ادخل رابط المنصة"/>
                                </Form.Group>
                            </div>

                            <Button className='ps-5 pe-5 fw-bold' variant="primary" type="submit">
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