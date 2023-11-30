import './App.css'
import { BrowserRouter, Route  , Routes } from 'react-router-dom';
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer.jsx";
import AffilateNavbar from "./component/AffilateNavbar/AffilateNavbar.jsx";
import AffilateFooter from "./component/AffilateFooter/affilatefooter.jsx";
// import LandingPage from "./pages/landingpage/LandingPage.jsx";
// import Login from "./component/login/login.jsx";
// import Register from "./component/register/register.jsx";
// import ForgetPassword from "./component/ForgetPassword/forgetPassword.jsx";
import React, {Suspense, useEffect} from 'react';
import ReactLoading from "react-loading";
import axiosInstance from "./axiosConfig/axiosinstance";
import {useDispatch} from "react-redux";
import PrivateRoutes from "./utils/PrivateRoutes";
import AffilateHome from "./pages/ecommerce/Homepage/affilatehome.jsx";
import blogs from "./pages/ecommerce/blogs/blog.jsx";
import privateRoutes from "./utils/PrivateRoutes";
function App() {
    const LoadingMarkup = () => <div className='d-flex justify-content-center align-items-center '
                                     style={{height: "100vh"}}>
        <div>
            <ReactLoading type="spin" color="#00537f"
                          height={100} width={50}/>
        </div>
    </div>
    const dispatch = useDispatch()
    const LazyLanding = React.lazy(() =>import('./pages/landingpage/LandingPage'))
    const LazyRegister = React.lazy(() =>import('./component/register/register'))
    const LazyForget = React.lazy(() =>import('./component/ForgetPassword/forgetPassword'))
    const LazyLogin = React.lazy(() =>import('./component/login/login'))
    // const LazyAffilatNavbar =React.lazy(() =>import('./pages/Affilatnavbar/Affilatnavbar'))
    const LazyBlogs =React.lazy(() =>import('./pages/ecommerce/blogs/blog.jsx'))
    // const LazyPrivatePage3 =React.lazy(() =>import('./pages/privatePage3/PrivatePage3'))
    const LazyAbout = React.lazy(()=>import('./pages/landingpage/about-us/about'))
    const LazyResetpass = React.lazy(()=>import('./component/ResetPassword/ResetPassword'))
    const LazyActivateUser = React.lazy(()=>import('./component/ActivateUser/ActivateUser'))

const token = localStorage.getItem('manfa3aToken')

    useEffect(() => {
        // Function to extract the token from the URL
        const extractTokenFromUrl = () => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            const logout = params.logout;
            if (logout) {
                // Now you have the token, and you can use it as needed.'
                localStorage.removeItem("manfa3aToken")
                // localStorage.removeItem("visitToken")
                window.location.href = 'http://localhost:5173';
            }
        extractTokenFromUrl();
            }
    }, [token]);

  return (
    <div dir='rtl'>
      <BrowserRouter >
          <Suspense fallback={<LoadingMarkup/>}>
            <Routes>
                <Route element={<PrivateRoutes/>}>
                    <Route exact path='/home' element={<AffilateHome/>}   />
                    <Route exact path='/blogs' element={<LazyBlogs/>}   />
                    {/*<Route exact path='/privatepage3' element={<LazyPrivatePage3/>}   />*/}
                </Route>
                <Route exact path='/' element={<LazyLanding/>}   />
                <Route exact path='/home' element={<AffilateHome/>}  />
                <Route exact path='/login' element={<LazyLogin/>}   />
                <Route exact path='/register'  element={<LazyRegister/>}  />
                <Route exact path='/ForgetPassword' element={<LazyForget/>}   />
                <Route exact path='/reset/:token' element={<LazyResetpass/>}   />
                <Route exact path='/activate/:token' element={<LazyActivateUser/>}   />
            </Routes>
              </Suspense>
      </BrowserRouter>

    </div>
  )
}

export default App
