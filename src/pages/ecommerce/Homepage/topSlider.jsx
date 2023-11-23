import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../../../assets/homeAffilate/slider1.png';
import CarouselImage2 from '../../../assets/homeAffilate/slider2.png';
import CarouselImage3 from '../../../assets/homeAffilate/slider1.png';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChild} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

function TopSlider(props) {

    return (
        <div className='HomePage text-end p-2'>
            <Container fluid>
                <Row>
                    <Col md={3} className='bg-light ps-0 pe-0 '>
                        <div className='bg-primary-subtle p-3  d-flex  justify-content-between'>
                            <h5 className='fw-bold p-0 mb-0'>التصنيفات </h5>
                            <Link to='/home' className='text-decoration-none text-muted ps-4 small'><FontAwesomeIcon
                                icon={faChevronLeft}/>عرض الكل</Link>
                        </div>
                        <div>
                            <ul className='list-unstyled p-md-3 '>
                                <li className='pb-md-3'>
                                    &nbsp;<FontAwesomeIcon icon={faChild}/>
                                    &nbsp;إلكترونيات وهواتف محمولة
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    &nbsp;ملابس وأحذية
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    &nbsp;الجمال والصحة
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    أجهزة كهربائية&nbsp;
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    &nbsp;هدايا وأكسسوارات
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    &nbsp;الأثاث
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    &nbsp;الأثاث
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                   &nbsp; أدوات منزلية
                                 </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    &nbsp;كتب وروايات
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>رياضة
                                   &nbsp;
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    &nbsp;منتجات أطفال
                                </li>
                                <li className='pb-md-3'>
                                    <FontAwesomeIcon icon={faChild}/>
                                    &nbsp;منتجات أطفال
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={7}>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                {/*<CarouselImage1 />*/}
                                <img src={CarouselImage1} alt='FirstSlide'/>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img src={CarouselImage2} alt='SecondSlide'/>
                                {/*<CarouselImage2  />*/}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={CarouselImage1} alt='ThirdSlide'/>
                                {/*<CarouselImage3  />*/}
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col md={2} className='bg-light ps-0 pe-0'>
                        <div className='bg-primary-subtle p-3 w-100 fs-4 text-center'>
                            <h5 className='fw-bold mb-0'>
                                عروض اليوم&nbsp;<FontAwesomeIcon aria-label='' icon={faChevronLeft}/>
                            </h5>
                        </div>
                        <div>
                            <ul className='list-unstyled'>
                                <li className='p-1'>
                                    <Card className='d-flex flex-row-reverse'>
                                        <Card.Body>
                                            <p className='m-0 fa-spin-reverse'>40000</p>
                                            <span className='text-mute small'>بدلا من <span
                                                className='text-decoration-line-through'>40</span></span>
                                        </Card.Body>
                                        <Card.Img src={CarouselImage1} className='w-50'/>
                                    </Card>
                                </li>

                                <li className='p-1'>
                                    <Card className='d-flex flex-row-reverse'>
                                        <Card.Body>
                                            <p className='m-0 fa-spin-reverse'>40000</p>
                                            <span className='text-mute small'>بدلا من <span
                                                className='text-decoration-line-through'>40</span></span>
                                        </Card.Body>
                                        <Card.Img src={CarouselImage1} className='w-50'/>
                                    </Card>
                                </li>
                                <li className='p-1'>
                                    <Card className='d-flex flex-row-reverse flex-row'>
                                        <Card.Body>
                                            <p className='m-0 fa-spin-reverse'>40000ج</p>
                                            <span className='text-mute small'>بدلا من <span
                                                className='text-decoration-line-through'>40</span></span>
                                        </Card.Body>
                                        <Card.Img src={CarouselImage2} className='w-50'/>
                                    </Card>
                                </li>
                                <li className='p-1'>
                                    <Card className='d-flex flex-row-reverse'>
                                        <Card.Body>
                                            <p className='m-0 fa-spin-reverse'>40000</p>
                                            <span className='text-mute small'>بدلا من <span
                                                className='text-decoration-line-through'>40</span></span>
                                        </Card.Body>
                                        <Card.Img src={CarouselImage1} className='w-50'/>
                                    </Card>
                                </li>
                            </ul>
                        </div>
                    </Col>


                </Row>
            </Container>

        </div>
    );
}

export default TopSlider;