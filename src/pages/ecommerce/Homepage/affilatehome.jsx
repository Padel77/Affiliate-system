import React from 'react';
import TopSlider from "./topSlider.jsx";
import Advertising from "./advertising.jsx";
import Offering from "./offering.jsx";
import Container from "react-bootstrap/Container";
import SpecialProduct from "./specialProduct.jsx";
import LastProduct from "./lastProduct.jsx";

function AffilateHome(props) {

    return (
        <div>
            <TopSlider/>
            <Advertising/>
            <Container className='mt-3 p-0'>
                <Offering/>
                <SpecialProduct/>
                <LastProduct/>
            </Container>
        </div>
    );
}

export default AffilateHome;