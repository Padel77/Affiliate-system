import React from 'react';
import TopSlider from "./topSlider/topSlider.jsx";
import Advertising from "./advertising/advertising.jsx";
import Offering from "./offering/offering.jsx";
import Container from "react-bootstrap/Container";
import SpecialProduct from "./specialProduct/specialProduct.jsx";
import LastProduct from "./lastProduct/lastProduct.jsx";
import AffilateNavbar from "../../../component/AffilateNavbar/AffilateNavbar.jsx";
import Affilatefooter from "../../../component/AffilateFooter/affilatefooter.jsx";

function AffilateHome(props) {

    return (<>
    <AffilateNavbar/>
        <div>
            <TopSlider/>
            <Advertising/>
            <Container fluid className='mt-3 p-0'>
                <Offering/>
                <SpecialProduct/>
                <LastProduct/>
            </Container>
        </div>
        <Affilatefooter/>
    </>);
}

export default AffilateHome;