import './lernnigMarketing.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Coursemarket1 from '../../../assets/cards/market1.png';
import Coursemarket2 from '../../../assets/cards/market2.png';
import Coursemarket3 from '../../../assets/cards/market3.png';

function LernnigMarketing() {

    return (<div className="container pt-5">
            <div >
                <div className='header w-100 mb-4'>
                    <h2 className=' m-md-auto text-end border-end border-primary border-5 p-0 pe-2'>تعلم تسويق</h2>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card >
                            <Card.Img variant="top" src={Coursemarket1}/>
                            <Card.Body>
                                <Card.Header className='fs-5 fw-bold'>التسويق علي منصات التواصل </Card.Header>
                                <div className='justify-content-start text-end'>
                                    <p className='mb-1'>مقدم من : <span>sd</span></p>
                                    <p className='mb-1'>الوقت : <span>sd</span></p>
                                    <p className='mb-1'>التقييم : <span>sd</span></p>
                                </div>
                                <Button className='ps-5 pe-5 fw-bold' variant="primary">سجل الان</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card >
                            <Card.Img variant="top" src={Coursemarket3}/>
                            <Card.Body>
                                <Card.Header className='fs-5 fw-bold'>   تعلم القيام بالاعلانات الممولة </Card.Header>
                                <div className='justify-content-start text-end'>
                                    <p className='mb-1'>مقدم من : <span>sd</span></p>
                                    <p className='mb-1'>الوقت : <span>sd</span></p>
                                    <p className='mb-1'>التقييم : <span>sd</span></p>
                                </div>
                                <Button className='ps-5 pe-5 fw-bold' variant="primary">سجل الان</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <Card.Img variant="top" src={Coursemarket2}/>
                            <Card.Body>
                                <Card.Header className='fs-5 fw-bold'>التسويق علي منصات التواصل </Card.Header>
                                <div className='justify-content-start text-end'>
                                    <p className='mb-1'>مقدم من : <span>sd</span></p>
                                    <p className='mb-1'>الوقت : <span>sd</span></p>
                                    <p className='mb-1'>التقييم : <span>sd</span></p>
                                </div>
                                <Button className='ps-5 pe-5 fw-bold' variant="primary">سجل الان</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>);
}

export default LernnigMarketing;