import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'

const Blogs = () => {

    const [blogs] = useData('./blogsFakedata.json');

    return (
        <Container>
            <h1 className='mt-5 py-5 secondary-text text-center animate__animated animate__fadeInDown'>Top Blogs</h1>
            <CardGroup>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        blogs.map(blog => <SingleBlog
                            key={blog.id}
                            blog={blog}
                        ></SingleBlog>)
                    }
                </Row>
            </CardGroup>
        </Container>
    );
};

export default Blogs;