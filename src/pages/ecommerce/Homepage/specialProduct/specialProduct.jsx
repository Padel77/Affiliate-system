import React from 'react';
import CarouselImage1 from '../../../../assets/homeAffilate/PhoneCard.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faHeartPulse,
    faStarHalfStroke
} from "@fortawesome/free-solid-svg-icons";

function Offering(props) {

    return (
        <div className='HomePage text-end mb-2 bg-light pb-2'>
            <div className='d-flex justify-content-between p-3  mb-1 border-bottom border-2'>
                <h5 className='fw-400 mb-0 '>منتجات مميزة</h5>
                <a className='text-decoration-none' href='#'>عرض المزيد</a>
            </div>
            <CardGroup className='d-flex  ms-0  '>
                <Col lg={3} >
                    <div className='z-1  position-absolute '>
                        <p className='p-2 bg-danger-subtle alert-link '>خصم حتى %35</p>
                    </div>
                    <Card >
                        <Card.Img variant="top" src={CarouselImage1}/>
                        <Card.Body className='p-3 pb-0'>
                            <Card.Title className='d-flex justify-content-between mb-3'>
                                <div className='d-flex '>
                                    <p className='small'>(0.5)</p>
                                    <div>
                                        <FontAwesomeIcon icon={faStarHalfStroke} />
                                    </div>
                                </div>
                                <div className='justify-content-between mb-2'>
                                    <span className='text-bg-primary p-2 ps-4 pe-4'>الكترونيات</span>
                                </div>
                            </Card.Title>
                            <Card.Title className='text-primary'>
                                A76 هاتف اوبو
                            </Card.Title>
                            <Card.Text className='text-muted'>
                                .....هاتف اوبو A76 بسعة 128 جيجا بايت
                            </Card.Text>
                            <Card.Text className='d-flex  justify-content-between'>
                                <div className='text-muted'>
                                    عمولة : 40ج.م
                                    <p>
                                        متوفر عدد : 32
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        40ج.م
                                    </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=' p-0 d-flex '>
                            <button className='w-100 text-bg-info text-light border-0 '>المفضلة&nbsp;&nbsp;<FontAwesomeIcon icon={faHeartPulse}/></button>
                            <button className='w-100 text-bg-primary  border-0 '>عرض التفاصيل&nbsp;&nbsp;<FontAwesomeIcon icon={faCartShopping}/></button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} >
                    <div className='z-1  position-absolute '>
                        <p className='p-2 bg-danger-subtle alert-link '>خصم حتى %35</p>
                    </div>
                    <Card >
                        <Card.Img variant="top" src={CarouselImage1}/>
                        <Card.Body className='p-3 pb-0'>
                            <Card.Title className='d-flex justify-content-between mb-3'>
                                <div className='d-flex '>
                                    <p className='small'>(0.5)</p>
                                    <div>
                                        <FontAwesomeIcon icon={faStarHalfStroke} />
                                    </div>
                                </div>
                                <div className='justify-content-between mb-2'>
                                    <span className='text-bg-primary p-2 ps-4 pe-4'>الكترونيات</span>
                                </div>
                            </Card.Title>
                            <Card.Title className='text-primary'>
                                A76 هاتف اوبو
                            </Card.Title>
                            <Card.Text className='text-muted'>
                                .....هاتف اوبو A76 بسعة 128 جيجا بايت
                            </Card.Text>
                            <Card.Text className='d-flex  justify-content-between'>
                                <div className='text-muted'>
                                    عمولة : 40ج.م
                                    <p>
                                        متوفر عدد : 32
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        40ج.م
                                    </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=' p-0 d-flex '>
                            <button className='w-100 text-bg-info text-light border-0 '>المفضلة&nbsp;&nbsp;<FontAwesomeIcon icon={faHeartPulse}/></button>
                            <button className='w-100 text-bg-primary  border-0 '>عرض التفاصيل&nbsp;&nbsp;<FontAwesomeIcon icon={faCartShopping}/></button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} >
                    <div className='z-1  position-absolute '>
                        <p className='p-2 bg-danger-subtle alert-link '>خصم حتى %35</p>
                    </div>
                    <Card >
                        <Card.Img variant="top" src={CarouselImage1}/>
                        <Card.Body className='p-3 pb-0'>
                            <Card.Title className='d-flex justify-content-between mb-3'>
                                <div className='d-flex '>
                                    <p className='small'>(0.5)</p>
                                    <div>
                                        <FontAwesomeIcon icon={faStarHalfStroke} />
                                    </div>
                                </div>
                                <div className='justify-content-between mb-2'>
                                    <span className='text-bg-primary p-2 ps-4 pe-4'>الكترونيات</span>
                                </div>
                            </Card.Title>
                            <Card.Title className='text-primary'>
                                A76 هاتف اوبو
                            </Card.Title>
                            <Card.Text className='text-muted'>
                                .....هاتف اوبو A76 بسعة 128 جيجا بايت
                            </Card.Text>
                            <Card.Text className='d-flex  justify-content-between'>
                                <div className='text-muted'>
                                    عمولة : 40ج.م
                                    <p>
                                        متوفر عدد : 32
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        40ج.م
                                    </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=' p-0 d-flex '>
                            <button className='w-100 text-bg-info text-light border-0 '>المفضلة&nbsp;&nbsp;<FontAwesomeIcon icon={faHeartPulse}/></button>
                            <button className='w-100 text-bg-primary  border-0 '>عرض التفاصيل&nbsp;&nbsp;<FontAwesomeIcon icon={faCartShopping}/></button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} >
                    <div className='z-1  position-absolute '>
                        <p className='p-2 bg-danger-subtle alert-link '>خصم حتى %35</p>
                    </div>
                    <Card >
                        <Card.Img variant="top" src={CarouselImage1}/>
                        <Card.Body className='p-3 pb-0'>
                            <Card.Title className='d-flex justify-content-between mb-3'>
                                <div className='d-flex '>
                                    <p className='small'>(0.5)</p>
                                    <div>
                                        <FontAwesomeIcon icon={faStarHalfStroke} />
                                    </div>
                                </div>
                                <div className='justify-content-between mb-2'>
                                    <span className='text-bg-primary p-2 ps-4 pe-4'>الكترونيات</span>
                                </div>
                            </Card.Title>
                            <Card.Title className='text-primary'>
                                A76 هاتف اوبو
                            </Card.Title>
                            <Card.Text className='text-muted'>
                                .....هاتف اوبو A76 بسعة 128 جيجا بايت
                            </Card.Text>
                            <Card.Text className='d-flex  justify-content-between'>
                                <div className='text-muted'>
                                    عمولة : 40ج.م
                                    <p>
                                        متوفر عدد : 32
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        40ج.م
                                    </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className=' p-0 d-flex '>
                            <button className='w-100 text-bg-info text-light border-0 '>المفضلة&nbsp;&nbsp;<FontAwesomeIcon icon={faHeartPulse}/></button>
                            <button className='w-100 text-bg-primary  border-0 '>عرض التفاصيل&nbsp;&nbsp;<FontAwesomeIcon icon={faCartShopping}/></button>
                        </Card.Footer>
                    </Card>
                </Col>

            </CardGroup>
        </div>
    );
}

export default Offering;