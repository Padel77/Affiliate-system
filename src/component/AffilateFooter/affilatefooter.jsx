import "./affilatefooter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationArrow, faLocationPin, faMobileAndroidAlt, faMobilePhone} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF, faGooglePlay, faInstagram,
    faWhatsapp,
    faXTwitter,
    faYoutube,

} from "@fortawesome/free-brands-svg-icons";
function Affilatefooter() {
    return (
        <>
        <div className='bg-light '>
            <div className="container-fluid py-5">
                <div className="row text-md-end">
                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <h5 className='text-muted'>اشترك معنا في القائمة البريدية ليصلك كل جديد في منصة منفعة إلى الإيميل مباشرة</h5>

                            </div>
                            <div dir='ltr' className="col-12">
                                <div className="input-group mb-3 p-3">
                                    <button className="btn btn-outline-primary" type="button" id="button-addon2">اشترك</button>
                                    <input type="text" className="form-control p-2 text-center" placeholder="ادخل البريد الالكتروني" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 col">
                        <div dir='ltr'>
                            <div>
                                <h5 className=''>معلومات التواصل</h5>
                                <ul className=' list-unstyled'>
                                    <li><a href="#" className='text-decoration-none text-muted'>manfa3a@App.com <FontAwesomeIcon icon={faGooglePlay}/></a></li>
                                    <li><a href="#" className='text-decoration-none text-muted'>01050112675</a> <FontAwesomeIcon icon={faMobileAndroidAlt} size='lg'/></li>
                                    <li><a href="#" className='text-decoration-none text-muted'>Egypt, Qena, Negahammadi </a><FontAwesomeIcon icon={faLocationArrow} size='lg'/></li>
                                </ul>
                        </div>
                            </div>
                    </div>
                    <div className="col-md-3 col">
                        <div dir='ltr'>
                            <div >
                                <h5 className=''>سياسات منفعة</h5>
                                <ul className='list-unstyled'>
                                    <li><a href="#" className='text-decoration-none text-muted'>سياسة الخصوصية</a></li>
                                    <li><a href="#" className='text-decoration-none text-muted'>سياسة الاستخدام</a></li>
                                    <li><a href="#" className='text-decoration-none text-muted'>سياسة الاسترجاع</a></li>
                                    <li><a href="#" className='text-decoration-none text-muted'>سياسة الشحن</a></li>
                                    <li><a href="#" className='text-decoration-none text-muted'>سياسة الدفع</a></li>
                                    <li><a href="#" className='text-decoration-none text-muted'>سياسة الاعلانات</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div  className=" col-12 mx-auto">
                        <ul className='list-unstyled d-flex gap-2'>
                            <li><a href="#" className='text-decoration-none text-muted'><FontAwesomeIcon icon={faFacebookF} size="lg" color='blue' /></a></li>
                            <li><a href="#" className='text-decoration-none text-muted'><FontAwesomeIcon icon={faXTwitter} size="lg" color='black' /></a></li>
                            <li><a href="#" className='text-decoration-none text-muted'><FontAwesomeIcon icon={faInstagram} size="lg" color='#E1306C' /></a></li>
                            <li><a href="#" className='text-decoration-none text-muted'><FontAwesomeIcon icon={faYoutube} size="lg" color='red'/></a></li>
                            <li><a href="#" className='text-decoration-none text-muted'><FontAwesomeIcon icon={faWhatsapp} size="lg" color='green' /></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        </>);
}

export default Affilatefooter;