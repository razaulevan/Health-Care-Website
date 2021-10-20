import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner7.jpg';
import banner2 from '../../../images/medical-02.jpg';
import banner3 from '../../../images/medical-04.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black bg-primary">WELCOME TO RK-HOSPITAL</h3>
                        <p className="text-black">We are here to make you Happy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-black">YOU ARE ALWAYS READY FOR YOUR SERVICE</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-black">Take Doctor's Advice Every 3 months</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;