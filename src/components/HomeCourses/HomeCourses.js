import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './HomeCourses.css'

const HomeCourses = (props) => {
    const { thumb, coursename, shortname, students, star, instructor, instructorThumb } = props.course;
    console.log(props.course);
    return (
        // <div className='course-container'>

        // </div>
        <Col className='animate__animated animate__zoomIn'>
            <Card className='card-top-img'>
                <div className='img-cont'>
                    <Card.Img variant="top" src={thumb} height='300px' />
                </div>
                <div>
                    <Card.Body>
                        <h1 className='dark-text'>{coursename}</h1>
                        <h4 className='secondary-text'>{shortname}</h4>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating>
                        <hr />
                        <div className='mt-3 d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='rounded-pill' src={instructorThumb} height='50px' alt="" />
                                <p className='ms-2 dark-text'>{instructor}</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center fw-bold dark-text'>
                                <p><i className="far fa-user"></i></p>
                                <p className='ms-2 dark-text'>{students}</p>
                            </div>
                        </div>
                    </Card.Body>
                </div>


            </Card>
        </Col>
    );
};

export default HomeCourses;