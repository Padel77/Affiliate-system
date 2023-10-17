import image from '../../assets/image/mnf3a.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  nav-underline  text-light fw-bold" dir='rtl'>
        <div className="container">
        <a className="navbar-brand" href="#"><img src={image} alt='logo'/></a>
    <button className="navbar-toggler border-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
                <a className="nav-link  text-light" aria-current="page" href="#">الرئيسية</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link text-light" aria-current="page" href="#">معلومات عنا</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">لماذا نحن</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">كيف نبدأ</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">اراء العملاء</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">تعلم التسويق</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">المدونة</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">الاسئلة الشائعه</a>
            </li>
        </ul>
        <form className=" ">
                <button className="btn btn-sm btn-outline-light fw-bold bg-info" type="button">تسجيـل الدخـول</button>
        </form>
    </div>
</div>
</nav>
    );
}

export default Navbar;