import image from '../../assets/image/mnf3a.svg';
import {Link, useNavigate} from "react-router-dom";
import {AsyncStorage} from "reactjs-async-localstorage";
import {useDispatch,useSelector} from "react-redux";
import {usernamered, usertokenred, usertypered, error_many, isload, userimgred} from "../../store/action.jsx";
import {useEffect,useState} from "react";
import axiosInstance from "../../axiosConfig/axiosinstance";
function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let toto=localStorage.getItem('manfa3aToken')
    const   check = async()=>{

         toto = await AsyncStorage.getItem('manfa3aToken')
        axiosInstance.post(`/users/user_check_mobile`,
            {
                token: toto
            }).then(res => {
            if (res.data.success) {
                dispatch(usernamered(res.data.success['fullname']))
                dispatch(usertypered(res.data.success['usertype']))
                dispatch(userimgred(res.data.success['']))
                dispatch(usertokenred(toto))


            } else {
                navigate('/', { replace: true });
                localStorage.removeItem("manfa3aToken")
                dispatch(usernamered(""))
                dispatch(usertypered(""))
                dispatch(usertokenred(""))
            }

            if (res.data.error === "too_many_requests") {
                dispatch(error_many(true));
                navigate("/", {replace: true});
            }


        }).catch(err => {
            // console.log(err);
        })
    }
    const [name_user, setName_user] = useState()
    const user = useSelector((state) => state.usernamered);
    const isloaded = useSelector((state) => state.isload);
    const [navitems, setNavitems] = useState({
        signin: "d-block",
        signout: "d-none",
        signup:"d-lg-block"
    });

    useEffect(() => {
        if (toto){
            check()
        }
        console.log('tokennavbar',toto)
        if (toto) {
            setName_user(usernamered)
            setNavitems({
                ...navitems,
                signin: "d-none",
                signout: "d-block",
                signup :"d-none"
            });
        }else {
            setNavitems({
                ...navitems,
                signin: "d-block",
                signout: "d-none",
                signup: "d-lg-block"
            })
            // navigate("/home");
        }
        // else if(!user.name){
        //   setNavitems({
        //     ...navitems,
        //     signin: "d-block",
        //     signout: "d-none",
        //     signup: "d-lg-block"
        //   })
        // navigate("/home");
        // }


    }, [ isloaded, toto]);

    async function logout() {
        // console.log("token in fixed navbar: " , token)

        await axiosInstance.post(`/users/logout`, {
                token: toto,
            }, {
                headers:{
                    "Authorization": `Token ${toto}`,
                    "Content-Type": "application/json",
                }
            }
        ).then(res => {
            console.log("res in logout", res)
            if (res.data.success) {

                localStorage.removeItem('manfa3aToken');
                localStorage.removeItem('manfa3aProfile')
                dispatch(isload(false));
                navigate('/', { replace: true });
            }else{
                if (res.data.error === "too_many_requests") {
                    dispatch(error_many(true));
                    navigate("/", {replace: true});
                }
            }

        }).catch(error => {
            console.log(error);
        });
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light  nav-underline  text-light fw-bold" dir='rtl'>
        <div className="container-fluid">
        <Link className="navbar-brand" href="#"><img  src={image } alt='logo'/></Link>
            <div className={`${navitems.signout}`}>
            <img  className={`rounded-circle img-fluid `} style={{width:60,height:60}} src={ `data:image/jpeg;base64, ${localStorage.getItem('manfa3aProfile')}`}/>
            <p>{user}</p>
            </div>
    <button className="navbar-toggler border-white toast-header  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-md-3">
            <li className="nav-item ">
                <Link className="nav-link  text-light" href="#scrollspyHeading1" aria-current="page" to="/">الرئيسية</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-light" aria-current="page" to="#scrollspyHeading3">معلومات عنا</Link>
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
            <button className={` nav-link btn  text-capitalize  fw-bold btn bg-info  ${navitems.signout}`} type="button">
                <Link className='text-decoration-none text-light  ' onClick={() => { logout();  }}>تسجيل الخروج</Link>
            </button>
            <button className={` nav-link btn  text-capitalize  fw-bold  bg-light border ${navitems.signin}`} type="button">
                <Link className='text-decoration-none  text-primary ' to='/login' >تسجيـل الدخـول</Link>
            </button>
            <button  className={` nav-link btn  text-capitalize  fw-bold btn bg-primary  border ${navitems.signin}`} type="button">
                <Link className={` text-decoration-none  text-light  `}  to="/register">انشاء حساب</Link>
            </button>

        </ul>
        {/*<form className=" ">*/}
        {/*</form>*/}
    </div>
</div>
</nav>
    );
}

export default Navbar;
