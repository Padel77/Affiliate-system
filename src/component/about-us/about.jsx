import './about.css';
import obgImg from '../../assets/OBJECTS.png';
import obgImg2 from '../../assets/OBJECTS2.png';
function About() {
    return (
            <div className="container pt-5">
                <div className="row pt-4">
                    <div className="col-12 col-md-6 text-end pt-3 ">
                        <h2 className='pb-3 fw-bold'> عن منفعة</h2>
                        <p className='fs-4'>أول وأكبر منصة خدمية للتجارة الإلكترونية في مصر،
                            تقدم خدامتها المختلفة لتطوير حلول التجارة الإلكترونية للتجار
                            ونظام تسويق بالعمولة للمسوقين لزيادة ارباحهم.</p>
                        <button className="btn btn-sm btn-outline-light fw-bold bg-success m-3 p-2" type="button">سجل الآن كتاجر</button>
                        <button className="btn btn-sm btn-outline-light fw-bold bg-primary p-2" type="button">سجل الآن كمسوق</button>
                    </div>
                    <div className="col-12 col-md-6  features-intro-img">
                        <div className='about-image'><img className='w-100' src={obgImg} alt="img" /></div>
                    </div>
                </div>
                <div className="row mt-5 pt-4">
                    <div className="col-12 col-md-6  features-intro-img">
                        <div className='about-image'><img className='w-100' src={obgImg2} alt="img" /></div>
                    </div>
                    <div className="col-12 col-md-6 text-end pt-3 ">
                        <h2 className='pb-3 fw-bold'> لماذا نحن </h2>
                        <p className='fs-4'>
                            لأن منفعة رائدة في حلولها المختلفة للتجارة الالكترونية، تقدم حلول مختلفة لزيادة مبيعات التجار ومنتجات ومتنوعه في شكل نظام تسويق بالعمولة للمسوقين اعرف الخدمات دلوقتي
                        </p>
                        <button className="btn btn-sm btn-outline-light fw-bold bg-success m-3 p-2" type="button">سجل الآن كتاجر</button>
                        <button className="btn btn-sm btn-outline-light fw-bold bg-primary p-2" type="button">سجل الآن كمسوق</button>
                    </div>
                </div>
            </div>

    );
}

export default About;