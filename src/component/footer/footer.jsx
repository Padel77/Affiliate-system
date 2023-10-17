import "./footer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
    return (
        <div className='footer-bg mt-5'>
        <Card className="footer-bg fw-bold text-light text-center">
            <Card.Body>
                <Card.Title className='fw-bold fs-3  '>ابدأ حلمك دلوقتي بسهولة مع منفعة</Card.Title>
                <Card.Text className='fs-4 text-white'>
                    اكسب اكتر وزود مبيعاتك
                </Card.Text>
                <Button className='ms-3  fw-semibold' variant="light">سجل الان كمسوق</Button>
                <Button className=' fw-semibold text-light' variant="info">سجل الان كتاجر</Button>
            </Card.Body>
            <Card.Footer className="border-top-white ">
                <FontAwesomeIcon icon="fa-brands fa-facebook"  />
                <FontAwesomeIcon icon="fa-brands fa-twitter"  />
                <FontAwesomeIcon icon="fa-brands fa-instagram"  />
                <FontAwesomeIcon icon="fa-brands fa-linkedin"  />
            </Card.Footer>
            <Card.Link className='text-light' href="#">سياسة الخصوصية</Card.Link>
            <Card.Text className='text-small text-light'>جميع الحقوق محفوظة © 2023 منفعة</Card.Text>
        </Card>
        </div>
    );
}

export default Footer;