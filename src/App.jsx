import './App.css'
import { BrowserRouter, Route  , Routes } from 'react-router-dom';
import Navbar from "./component/navbar/navbar.jsx";
import Sidebar from "./component/sidebar/sidebar.jsx";
import Logo from "./component/logo/logo.jsx";
import About from "./component/about-us/about.jsx";
import Solution from "./component/solutions/solution.jsx";
import Consider from "./component/considers/consider.jsx";
import Services from "./component/productAndServices/services.jsx";
import CommonQues from "./component/commonQues/commonQues.jsx";
import CstOpenion from "./component/cstOpenion/cstOpenion.jsx";
import LerningMarketing from "./component/lernningMarketing/lernnigMarketing.jsx";
import Blog from "./component/blog/blog.jsx";
import Footer from "./component/footer/footer.jsx";
function App() {

  return (
    <>
      <BrowserRouter>
          <div dir='rtl'>
          <Navbar/>
          <Logo/>
          <Consider/>
          <About/>
          <Solution/>
          <Services/>
          <CstOpenion/>
          <CommonQues/>
          <LerningMarketing/>
          <Blog/>
          <Footer/>
      <Routes>

        </Routes>

          </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
