import './cstOpenion.css';
import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../../assets/image/mnf3a.jpg';

function CstOpenion() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (<div className="container pt-5 ">
            <div className='header w-100 mb-4'>
                <h2 className=' m-md-auto text-end border-end border-primary border-5 p-0 pe-2'>اراء العملاء</h2>
            </div>
            <Carousel className='Carousel' data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ExampleCarouselImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>First slide label</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=eee"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 className=''>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>);
}

export default CstOpenion;