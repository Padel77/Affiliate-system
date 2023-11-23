import React from 'react';
import Logo from "./logo/logo.jsx";
 import Consider from "./considers/consider.jsx";
import About from "./about-us/about.jsx";
import Solution from "./solutions/solution.jsx";
import Services from "./productAndServices/services.jsx";
import CstOpenion from "./cstOpenion/cstOpenion.jsx";
import CommonQues from "./commonQues/commonQues.jsx";
import LerningMarketing from "./lernningMarketing/lernnigMarketing.jsx";
import Blog from "./blog/blog.jsx";

function LandingPage(props) {
    return (
        <div>
            <Logo/>
            <Consider/>
            <About/>
            <Solution/>
            <Services/>
            <CstOpenion/>
            <CommonQues/>
            <LerningMarketing/>
            <Blog/>
        </div>
    );
}

export default LandingPage;