import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <div className='banner-container d-flex align-items-center'>
                    <div className='text-container p-5 animate__animated animate__fadeIn'>
                        <h1 className='display-2 fw-bold animate__animated animate__fadeInLeft'>Start The Beginning <br /> You Want</h1>
                        <p className='animate__animated animate__fadeInUp'>Shift the Ctrl to us we will Alt your World. <br /> We assure to provide best education for your future</p>
                    </div>
                </div>
            </Container>
        </div>


    );
};

export default Banner;