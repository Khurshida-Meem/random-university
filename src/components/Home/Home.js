import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import HomeCourses from '../SingleCourse/SingleCourse';
import Notes from '../Notes/Notes';
import './Home.css'
import useData from '../../hooks/useData';
import HomeAbout from '../HomeAbout/HomeAbout';
import Facilities from '../Facilities/Facilities';


const Home = () => {

    const [courses] = useData('./fakedata.json');
    courses.splice(4, 4);


    return (
        <div>
            {/* banner area */}
            <Banner></Banner>
            {/* 3 sticky notes */}
            <Notes></Notes>
            <Facilities></Facilities>

            <Container>
                <div className='mt-5 pt-5'>
                    <h4 className='secondary-text'>Our Courses</h4>
                    <hr className='separator' />
                    <h2 className='secondary-text'>Featured Courses</h2>
                    {/* Showing 4 courses featured loaded from fakedb and loaded properties from single course */}

                    <Row xs={1} md={2} className="g-4 mt-2">

                        {
                            courses.map(course => <HomeCourses
                                key={course.id}
                                course={course}
                            ></HomeCourses>)
                        }
                    </Row>
                </div>
                {/* about of home loaded from HomeAbout */}
                <HomeAbout></HomeAbout>
            </Container>

        </div>
    );
};

export default Home;