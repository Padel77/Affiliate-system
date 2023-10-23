import image from '../../assets/image/mnf3a.svg';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  nav-underline  text-light fw-bold" dir='rtl'>
        <div className="container">
        <Link className="navbar-brand" href="#"><img src={image} alt='logo'/></Link>
    <button className="navbar-toggler border-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-md-3">
            <li className="nav-item ">
                <Link className="nav-link  text-light" aria-current="page" to="/">الرئيسية</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-light" aria-current="page" to="#">معلومات عنا</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" to="#">لماذا نحن</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" to="#">كيف نبدأ</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" to="#">اراء العملاء</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" to="#">تعلم التسويق</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" to="#">المدونة</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" to="#">الاسئلة الشائعه</Link>
            </li>
            <button className="btn btn-sm btn-outline-light fw-bold bg-info ps-3 pe-3" type="button"><Link className='text-decoration-none text-light' to='/login' >تسجيـل الدخـول</Link>  </button>
        </ul>
        {/*<form className=" ">*/}
        {/*</form>*/}
    </div>
</div>
</nav>
    );
}

export default Navbar;