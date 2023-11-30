import image from '../../assets/image/mnf3a.svg';
import {Link, useNavigate} from "react-router-dom";
import {AsyncStorage} from "reactjs-async-localstorage";
import {useDispatch,useSelector} from "react-redux";
import {usernamered, usertokenred, usertypered, error_many, isload, userimgred} from "../../store/action.jsx";
import {useEffect,useState} from "react";
import axiosInstance from "../../axiosConfig/axiosinstance";

import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from "framer-motion";
// import { MenuItem } from "./MenuItem";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCoffee,
    faGlobe,
    faPerson,
    faRightToBracket,
    faStore, faUser, faX
} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {Dropdown} from "react-bootstrap";
import {faFacebook, faGoogle, faInstagram, faThreads, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

function AffilateNavbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
        setLoader(true)
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
                setLoader(false)
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
        <div>
    <Navbar  expand="lg" className=" bg-body-tertiary p-0  pe-md-3 ps-md-3">
        <Container fluid>
            <Navbar.Brand href="#" className='d-flex gap-mg-2 '>
                <Button variant="" className=' fw-bold' onClick={() => { logout()  }}><FontAwesomeIcon icon={faRightToBracket} size="xl" />&nbsp;&nbsp;تسجل الخروج </Button>
                {/*<Button variant="" className=' fw-bold'><FontAwesomeIcon icon={faUser} size="xl" />&nbsp;&nbsp;حساب جديد</Button>*/}
                <div className={`${navitems.signout}`}>
                    <img className={`rounded-circle img-fluid `} style={{width:50,height:40}} src={ `data:image/jpeg;base64, ${localStorage.getItem('manfa3aProfile')}`}/>
                    <h5>{user}</h5>
                </div>
            </Navbar.Brand>

            <Navbar.Collapse className='justify-content-center align-item-centre ' id="navbarScroll">
                <div className="d-flex gap-2  ">
                    <FontAwesomeIcon color='blue' icon={faFacebook} size="xl" />
                    <FontAwesomeIcon color='red' icon={faInstagram} size="xl" />
                    <FontAwesomeIcon color='green' icon={faWhatsapp} size="xl" />
                    <FontAwesomeIcon color='blue' icon={faTwitter} size="xl" />
                    <FontAwesomeIcon color='black' icon={faThreads} size="xl" />
                </div>

            </Navbar.Collapse>
            <Dropdown >
                <Dropdown.Toggle variant="outline-primary text-body" id="dropdown-basic" >
                    <FontAwesomeIcon icon={faGlobe} size='lg' />&nbsp;
                    العربية
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item Acitve href="#/action-1">العربية</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">الانجليزية</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
            <Navbar  expand="lg" className="navbar justify-content-center align-content-center pe-md-3 ps-md-3 p-0">
                <Container className='ps-2 pe-2'  fluid>
                    <Navbar.Brand href="#">
                        <img  src={image } alt='logo'/>
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" >
                            <Button variant="primary" onClick={handleShow} className="me-2">                    </Button>
                        </Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll ">
                        <Form className="d-flex w-100 ps-5 pe-5 ">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className=" fs-5 text-center outline-none w-100"
                                aria-label="Search"

                            />
                        </Form>
                        <div className='d-flex gap-lg-3 text-white'>
                        <Button variant=''  className=' fs-5 text-white'>
                        <FontAwesomeIcon icon={faHeart} size="lg" />
                         <span className=' fw-bold '>المفضلة</span>
                        </Button>
                        <Button variant='' className='fs-5 text-white'>
                        <FontAwesomeIcon icon={faCartShopping} size="lg"/>
                            <span className=' fw-bold '>السلة</span>
                        </Button>
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            {/*<Offcanvas show={show} onHide={handleClose} >*/}
                {/*<Offcanvas.Header closeButton>*/}
                    {/*<Offcanvas.Title>*/}
                    {/*    <img  src={image } alt='logo'/>*/}
                    {/*</Offcanvas.Title>*/}
                {/*</Offcanvas.Header>*/}
                {/*<Offcanvas.Body>*/}

            <Navbar dir='rtl' expand="lg" className="bg-body-tertiary  text-primary pe-md-3 ps-md-3" id=''>
                <Container fluid>
                    <Navbar.Collapse id="navbarScroll">
                    <Nav fill variant="tabs" className='d-flex gap-lg-2 ' defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link ><Link className='text-decoration-none text-black active' to='/home'>الرئيسية</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link className='text-decoration-none text-dark ' to='/companies'>كل الشركات</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link className='text-decoration-none text-dark ' to='/categories'> جميع التصنيفات</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link className='text-decoration-none text-dark ' to='/blogs'>المدونة</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link className='text-decoration-none text-dark ' to='/products'>كل المنتجات</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                {/*</Offcanvas.Body>*/}
            {/*</Offcanvas>*/}
        </div>
    );
}

export default AffilateNavbar;
