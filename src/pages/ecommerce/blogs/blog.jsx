import React from 'react';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import card from '../../../assets/blogs/card.png';
function Blog(props) {
    return (
        <div className='container-fluid p-3    '>
            <div className='d-flex bg-light p-2 align-content-center mb-2  justify-content-between'>
                <div className='mb-0'>
                    <h3 className=' text-bg-primary m-0  p-1 rounded-3'>المدونة</h3>
                </div>
                <div>
                    <InputGroup dir='ltr' className="fs-3 m-0">
                        <Button  className='disabled text-light ps-4 pe-4 ' variant="primary" id="button-addon2">
                            ابحث
                        </Button>
                        <Form.Control
                            placeholder="قم بالبحث داخل المتجر عن البرامج"
                            aria-label="قم بالبحث داخل المتجر عن البرامج"
                            aria-describedby="basic-addon2"
                            className='text-end fs-5'
                            required
                            onChange={(e) => {
                                if (e.target.value.length === 0)
                                    document.getElementById('button-addon2').classList.add('disabled')
                                else
                                    document.getElementById('button-addon2').classList.remove('disabled')
                            }}
                        />
                    </InputGroup>
                </div>
            </div>
            <div dir='ltr' className=''>
                <Breadcrumb >
                    <Breadcrumb.Item href="/">الرئيسية</Breadcrumb.Item>
                    <Breadcrumb.Item active>السوق الدولى</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='bg-light p-3'>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card className='text-end'>
                                <Card.Img variant="top" src={card} />
                                <Card.Body>
                                    <Card.Title className='border-bottom border-info py-2'>برنامج التسويق بالعمولة مع منفعة</Card.Title>
                                    <Card.Text className='small'>
                                        اذا كنت شغوفًا بالتسويق ولديك الرغبة في زيادة دخلك، مع منفعة يمكنك البدء في رحلة التسويق بالعمولة والكسب من كل عملية بيع تتم عبر روابطك
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Blog;