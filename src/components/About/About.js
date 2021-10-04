import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleTeacher from '../SingleTeacher/SingleTeacher';
import './About.css'

const About = () => {
    const [teachers] = useData('./teacherfakedata.json')
    return (
        <Container>
            <div className='my-5 py-5 animate__animated animate__fadeInLeft'>
                <div>
                    <h5 className='secondary-text animate__animated animate__fadeInLeft'>About us</h5>
                    <hr className='separator' />
                    <h1 className='secondary-text animate__animated animate__fadeInLeft'>Welcome to Random University</h1>
                    <p className='dark-text animate__animated animate__fadeInRight'>A university is a higher learning institution.The word university comes from the Latin <br /> universitas magistrorum et scholarium, roughly meaning "community of teachers and scholars".Students <br />  can go to university to get an academic degree.Unlike the schooling they have done before, the courses at university are specialised. <br /> A person studying biology at university has many courses about biology and fewer courses in other fields such as <br />  languages or history.To get a higher degree, people must do some research.</p>

                </div>
            </div>
            <h1 className='my-3 pt-5 secondary-text'>Our Honourable Faculty Heads</h1>
            {
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        teachers.map(teacher => <SingleTeacher
                            key={teacher.id}
                            teacher={teacher}

                        ></SingleTeacher>)
                    }
                </Row>
            }

        </Container>


    );
};

export default About;