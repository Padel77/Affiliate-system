import image from '../../assets/image/mnf3a.svg';
import {Link, useNavigate} from "react-router-dom";
import {AsyncStorage} from "reactjs-async-localstorage";
import {useDispatch,useSelector} from "react-redux";
import {usernamered, usertokenred, usertypered, error_many, isload, userimgred} from "../../store/action.jsx";
import {useEffect,useState} from "react";
import axiosInstance from "../../axiosConfig/axiosinstance";
import { motion } from "framer-motion";
// import {position} from "html2canvas/dist/types/css/property-descriptors/position.js";
// import { MenuItem } from "./MenuItem";

function Navbar() {
    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };
    const itemIds = [0];
    const [loader, setLoader] = useState(false);
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
    const [navPosition, setNavPosition] = useState('fixed');
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

        const handleScroll = () => {
            if (window.screenX > 0 && window.screenY >   0) {
                setNavitems((prevItems) => ({
                    ...prevItems,
                    signup: 'd-none' // Hide the signup item
                }));
                setNavPosition('absolute'); // Change the position to absolute
            } else {
                setNavitems((prevItems) => ({
                    ...prevItems,
                    signup: 'nav-item' // Show the signup item
                }));
                setNavPosition('fixed'); // Change the position to fixed
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ isloaded, toto]);

    // async function logout() {
    //     // console.log("token in fixed navbar: " , token)
    //     setLoader(true)
    //     await axiosInstance.post(`/users/logout`, {
    //             token: toto,
    //         }, {
    //             headers:{
    //                 "Authorization": `Token ${toto}`,
    //                 "Content-Type": "application/json",
    //             }
    //         }
    //     ).then(res => {
    //         console.log("res in logout", res)
    //             setLoader(false)
    //             localStorage.removeItem('manfa3aToken');
    //         if (res.data.success) {
    //             localStorage.removeItem('manfa3aProfile')
    //             dispatch(isload(false));
    //             navigate('/', { replace: true });
    //         }else{
    //             if (res.data.error === "too_many_requests") {
    //                 dispatch(error_many(true));
    //                 navigate("/", {replace: true});
    //             }
    //         }
    //
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }
// function scrolld () {
//     const scrol =     document.querySelector('.navbar')
//     if (window.scrollY > 0 ) {
//     // .classList.toggle('', window.scrollY > 0
//     //     console.log("hamada")
//     //     scrol.classList.add('fixed-top')
//         // scrol.classList.add('transitio')
//         // scrol.classList.toggle('sticky')
//         // scrol.styles('position','fixed')
//         // scrol.classList.toggle('fixed')
//     }else {
//         // scrol.classList.remove('fixed-top')
//     }
// }
// scrolld()
    return (
        <nav
            // data-aos="zoom-fade-in"
            className={` navbar  navbar-expand-lg navbar-light  ${navPosition}  nav-underline  text-light fw-bold`} dir='rtl'>
        <div className="container-fluid">
        <Link className="navbar-brand" href="#"><img  src={image } alt='logo'/></Link>
            <div className={`${navitems.signout}`}>
                     <img  className={`rounded-circle img-fluid `} style={{width:50,height:40}} src={ `data:image/jpeg;base64, ${localStorage.getItem('manfa3aProfile')}`}/>
                    <h5>{user}</h5>
            </div>
            <div className='d-flex gap-3'>
                <button className={`  btn  text-capitalize  fw-bold  text-bg-light border ${navitems.signin}`} type="button">
                    <Link className='link-dark text-decoration-none text-primary ' to='/login' >تسجيـل الدخـول</Link>
                </button>
                <button className="navbar-toggler   " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "/>
                </button>
            </div>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-md-2">
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
            <li className="nav-item" >
                <Link className="nav-link text-light link-opacity-100-hover" to="ass">الاسئلة الشائعه</Link>
            </li>
        <button  className={` btn text-capitalize  fw-bold btn text-bg-primary  border ${navitems.signin}`} type="button">
                <Link className={` text-decoration-none link-dark  text-light  `}  to="/register">انشاء حساب</Link>
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
