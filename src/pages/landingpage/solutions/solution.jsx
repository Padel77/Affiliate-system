import './solution.css';
import obgImg1 from '../../../assets/cards/triggerSolution/charge.png';
import obgImg2 from '../../../assets/cards/triggerSolution/B6.png';
// import obgImg3 from '../../../assets/cards/triggerSolution/storage.png';
import obgImg4 from '../../../assets/cards/triggerSolution/customerServ.png';
import obgImg5 from '../../../assets/cards/triggerSolution/addition1.png';
import obgImg6 from '../../../assets/cards/triggerSolution/boxing.png';

import marImg1 from '../../../assets/cards/marketerSolution/moreProduct.png';
import marImg2 from '../../../assets/cards/marketerSolution/storage.png';
import marImg3 from '../../../assets/cards/marketerSolution/speedChage.png';
import marImg4 from '../../../assets/cards/marketerSolution/customersevice.png';
import marImg5 from '../../../assets/cards/marketerSolution/netProfit.png';
import marImg6 from '../../../assets/cards/marketerSolution/followPic.png';


function Solution() {
    return (
        <div className="container pt-5">
            <div className="triger">
                <div className='header w-100 mb-4'>
                        <h2 data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className='w-auto  text-end border-end -3 border-4 border-primary pe-2'> حلــــــــول منفعة للتاجر</h2>
                </div>
                <div className="row row-cols-2 row-cols-lg-3  d-flex  g-4">
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1000" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0 d-flex">
                                <div className="col-md-7 ">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3">الشحن</h5>
                                        <p className="card-text fw-semibold text-dark">توفير الشحن بجودة عاليه لضمان أعلي نسبة تسليم بسعر موحد علي مستوي مصر</p>
                                    </div>
                                </div>
                                <div  className="col-md-5 ">
                                    <img src={obgImg1} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1100" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3">التغليف</h5>
                                        <p className="card-text fw-semibold text-dark">توفير تغليف بجودة عالية للحفاظ علي منتجاتك اثناء الشحن</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={obgImg6} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1200" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3">التخزين</h5>
                                        <p className="card-text fw-semibold text-dark">توفير جميع مساحات التخزينية لنمو عملك بدون اي تكاليف اضافية</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={marImg2} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1300" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3">الدعم الفنى</h5>
                                        <p className="card-text fw-semibold text-dark">
                                            يوفر انجزني خدمة عملاء لمتابعة الاوردرات مع عملائك ودعم فني لمساعدتك علي مدار اليوم</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={obgImg4} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1400" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title  text-primary pb-3">السيستم والاضافات</h5>
                                        <p className="card-text fw-semibold text-dark">سيستم لمتابعة المخزون والمبيعات والربط بموقعك لنقل الاوردرات بشكل اوتوماتيكي</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={obgImg5} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1500" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3">الامان والتنظيم</h5>
                                        <p className="card-text fw-semibold text-dark">يوفر انجزني نظام عالمي لتنظيم منتجاتك وانظمة
                                            حماية للحفاظ علي المنتجات</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={obgImg2} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='header w-100 mb-4'>
                        <button data-aos="fade-left" data-aos="fade-up" className="btn btn-sm btn-outline-light fw-bold fs-5 bg-info m-2 p-2 ps-4 pe-4 "
                                type="button">شاهد الفيديو
                        </button>
                        <button data-aos="fade-right" className="btn btn-sm btn-outline-light fw-bold fs-5 bg-primary m-2 p-2 ps-4 pe-4"
                                type="button">سجل الآن كتاجر
                        </button>
                    </div>
                </div>
            </div>
            <div className="triger mt-5 ">
                <div className='header w-100 mb-4'>
                    <h2 data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="2000" className='w-auto  text-end border-end -3 border-4 border-primary pe-2 '>حلــــــــول منفعة للمسوق</h2>
                </div>
                <div className="row row-cols-2 row-cols-lg-3  d-flex  g-4">
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1000"  className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3 pt-3">خدمة عملاء</h5>
                                        <p className="card-text fw-semibold text-dark">
                                            خدمة عملاء 24/7 لتأكيد ومتابعة الاوردر</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={marImg4} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1100" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3 pt-3">تخزين وتغليف</h5>
                                        <p className="card-text fw-semibold text-dark">
                                            أنسي مشاكل التخزين والتغليف </p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={marImg2} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1200" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3 pt-3">منتجات عديدة</h5>
                                        <p className="card-text fw-semibold text-dark">
                                            تقدر تختار بين مئات المنتجات المختلفة </p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={marImg1} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1300" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3 pt-3">سهولة المتابعة</h5>
                                        <p className="card-text fw-semibold text-dark">
                                            متابعة الاوردرات والارباح من سيستم منفعة </p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={marImg6} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1400" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3 pt-3">تحصيل الأرباح</h5>
                                        <p className="card-text fw-semibold text-dark">
                                            تحصيل وجمع الارباح من العملاء</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={marImg5} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1500" className="col">
                        <div className="card mb-3" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary pb-3 pt-3">شحن سريع</h5>
                                        <p className="card-text fw-semibold text-dark">
                                            أسرع شحن وتوصيل علي مستوي مصر</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={marImg3} className="img-thumbnail card-img-top rounded-end-pill" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='header w-100 mb-4'>
                        <button data-aos="fade-up" className="btn btn-sm btn-outline-light fw-bold fs-5 bg-info m-2 p-2 ps-4 pe-4 "
                                type="button">شاهد الفيديو
                        </button>
                        <button data-aos="fade-down" className="btn btn-sm btn-outline-light fw-bold fs-5 bg-primary m-2 p-2 ps-4 pe-4"
                                type="button">سجل الآن كمسوق
                        </button>
                    </div>
                </div>
            </div>
        </div>);
}

export default Solution;