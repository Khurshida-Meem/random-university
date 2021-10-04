import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css'

const NotFound = () => {
    return (
        <Container>
            <div className='text-center light-bg m-5 p-5'>
                <h1>404 <br /> Page not Found</h1>
            </div>
        </Container>

    );
};

export default NotFound;