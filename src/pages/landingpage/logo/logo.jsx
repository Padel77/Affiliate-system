import './logo.css'
import img2 from '../../../assets/Marketing-cuate 2.svg';
function Logo() {
    return (
        <div className="logo">
            <div className="container pt-5 ">
                <div className="row pb-5 ">

                    <div data-aos='fade-left' className=" col-12 col-md-8 px-5  text-end  text-white">
                        <p className="fw-bold offset-md-4 fs-2  mt-5">
                            أبدا رحلة تجارتك الإلكترونية دلوقتي مع منفعة
                                مبيعات بالكوم منفعة توفرهالك
                        </p>
                            <button className="btn btn-sm btn-outline-light fw-bold bg-info m-3 p-2" type="button">سجل الآن كتاجر</button>
                            <button className="btn btn-sm btn-outline-light fw-bold bg-primary p-2" type="button">سجل الآن كمسوق</button>
                    </div>
                    <div data-aos='fade-right' className=" col-12 col-md-4">
                        <img className='w-100' src={img2}  alt='logo' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logo;