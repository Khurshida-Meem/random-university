import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './NotFound.css'

const NotFound = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }

    return (
        <Container>
            <div className='text-center light-bg m-5 p-5'>
                <h1>404 <br /> Page not Found</h1>
                <button className='secondary-btn px-3 py-2' onClick={handleClick}>Back to Home</button>
            </div>
        </Container>

    );
};

export default NotFound;