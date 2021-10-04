import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import HomeCourses from '../SingleCourse/SingleCourse';
import Notes from '../Notes/Notes';
import './Home.css'
import useData from '../../hooks/useData';
import HomeAbout from '../HomeAbout/HomeAbout';

const Home = () => {

    const [courses] = useData('./fakedata.json');
    courses.splice(4, 4);

    return (
        <div>
            <Banner></Banner>
            <Notes></Notes>
            <HomeAbout></HomeAbout>
            <Container>
                <div className='mt-5 pt-5'>
                    <h4 className='secondary-text'>Our Courses</h4>
                    <hr className='separator' />
                    <h2 className='secondary-text'>Featured Courses</h2>
                    <Row xs={1} md={2} className="g-4 mt-2">

                        {
                            courses.map(course => <HomeCourses
                                key={course.id}
                                course={course}
                            ></HomeCourses>)
                        }

                    </Row>
                </div>

            </Container>

        </div>
    );
};

export default Home;