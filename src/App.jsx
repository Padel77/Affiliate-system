import './App.css'
import { BrowserRouter, Route  , Routes } from 'react-router-dom';
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer.jsx";
import LandingPage from "./pages/landingpage/LandingPage.jsx";
import Login from "./component/login/login.jsx";
import Register from "./component/register/register.jsx";
import ForgetPassword from "./component/resetPassword/forgetPassword.jsx";
function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route element={<LandingPage/>}  path='/' />
                <Route element={<LandingPage/>}  path='/home'  />
                <Route element={<Login/>}  path='/login'  />
                <Route element={<Register/>}  path='/register'  />
                <Route element={<ForgetPassword/>} path='/ForgetPassword'  />
            </Routes>
          <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
