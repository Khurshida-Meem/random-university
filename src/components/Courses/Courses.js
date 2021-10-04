import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {

    const [courses] = useData('./fakedata.json');

    return (
        <div>
            <Container>
                <h1 className='text-center secondary-text animate__animated animate__fadeInLeft mt-5 pt-5'>Our Courses</h1>
                <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                    {
                        courses.map(course => <SingleCourse
                            key={course.id}
                            course={course}
                            cost={course.cost}
                        ></SingleCourse>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Courses;