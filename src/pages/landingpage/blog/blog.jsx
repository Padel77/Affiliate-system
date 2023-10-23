import './blog.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Coursemarket1 from '../../../assets/cards/image 12.png';
import Coursemarket2 from '../../../assets/cards/image 13.png';
import Coursemarket3 from '../../../assets/cards/image 14.png';

function Blog() {

    return (<div className="container pt-5 mb-5">
            <div >
                <div className='header w-100 mb-4'>
                    <h2 className=' m-md-auto text-end border-end border-primary border-5 p-0 pe-2'>المدونة</h2>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card >
                            <Card.Img variant="top" src={Coursemarket1}/>
                            <Card.Body>
                                <Card.Header className='fs-5 fw-bold'>دليلك للبدء في مجال الأفلييت</Card.Header>
                                <Card.Text className='text-center  fw-bold mt-3'>
                                    مجال الافيليت ماركتنج يُعتبر فرصة مهمة جدًا للأفراد والشركات لكسب أموال عبر الترويج للمنتجات، والخدمات ...
                                </Card.Text>
                                <Button className='ps-5 pe-5 fw-bold' variant="primary">المزيد</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card >
                            <Card.Img variant="top" src={Coursemarket3}/>
                            <Card.Body>
                                <Card.Header className='fs-5 fw-bold'>دليلك للبدء في مجال الأفلييت</Card.Header>
                                <Card.Text className='text-center  fw-bold mt-3'>
                                    مجال الافيليت ماركتنج يُعتبر فرصة مهمة جدًا للأفراد والشركات لكسب أموال عبر الترويج للمنتجات، والخدمات ...
                                </Card.Text>
                                <Button className='ps-5 pe-5 fw-bold' variant="primary">المزيد</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card >
                            <Card.Img variant="top" src={Coursemarket2}/>
                            <Card.Body>
                                <Card.Header className='fs-5 fw-bold'>دليلك للبدء في مجال الأفلييت</Card.Header>
                                <Card.Text className='text-center  fw-bold mt-3'>
                                    مجال الافيليت ماركتنج يُعتبر فرصة مهمة جدًا للأفراد والشركات لكسب أموال عبر الترويج للمنتجات، والخدمات ...
                                </Card.Text>
                                <Button className='ps-5 pe-5 fw-bold' variant="primary">المزيد</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>);
}

export default Blog;