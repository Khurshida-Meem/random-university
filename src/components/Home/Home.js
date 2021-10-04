import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import HomeCourses from '../HomeCourses/HomeCourses';
import Notes from '../Notes/Notes';

const Home = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./HomeFakedata.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Notes></Notes>
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {
                        courses.map(course => <HomeCourses
                            key={course.id}
                            course={course}
                        ></HomeCourses>)
                    }

                </Row>
            </Container>

            {/* {
                courses.map(course => <HomeCourses
                    key={course.id}
                    course={course}
                ></HomeCourses>)
            } */}
        </div>
    );
};

export default Home;