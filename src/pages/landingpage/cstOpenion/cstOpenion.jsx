import './cstOpenion.css';
import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../../assets/openion.png';
import op from '../../../assets/op.png';
import person from '../../../assets/person.png';

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
                <img
                    className="position-absolute py-5  px-5 d-flex "
                    src={op}
                    alt="theme"
                />
                <img
                    className="d-block  h-auto"
                    src={ExampleCarouselImage}
                    alt="fixed slide"
                />
                <Carousel.Item>
                    <Carousel.Caption>
                        <img src={person} className='pb-5 mb-5 w-25 w-md-50'/>
                        <h4>Courtney Henry</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <img src={person} className='pb-5 mb-5 w-25 w-md-50'/>
                        <h4>Courtney Henry</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <img src={person} className='pb-5 mb-5 w-25 w-md-50'/>
                        <h4>Courtney Henry</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>

        </div>);
}

export default CstOpenion;