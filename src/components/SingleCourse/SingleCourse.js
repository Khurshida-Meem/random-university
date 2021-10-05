import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './SingleCourse.css'

const SingleCourse = (props) => {
    const { id, thumb, coursename, shortname, students, star, instructor, instructorThumb } = props.course;

    const history = useHistory();
    const handleDetailsClick = () => {
        history.push(`/course/${id}`);
    }

    // checking its home page or courses page
    const h1 = !props.cost ? <h1 className='dark-text'>{coursename}</h1> : <h3 className='dark-text'>{coursename}</h3>;
    const h4 = !props.cost ? '' : <h4 className='dark-text'>Cost: ${props.cost}</h4>;
    return (

        <Col className='animate__animated animate__zoomIn'>
            <Card className='card-container'>
                <div className='img-cont'>
                    <Card.Img variant="top" src={thumb} height='300px' />
                </div>
                <div>
                    <Card.Body>
                        <div>
                            {h1}
                            <h4 className='secondary-text'>{shortname}</h4>
                            {h4}
                            <div className='d-flex justify-content-between align-items-center'>
                                <Rating
                                    initialRating={star}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly></Rating>
                                {/* ==========more details button================== */}
                                <button onClick={handleDetailsClick} className='primary-btn mt-2 py-1 px-3 '>More Detail</button>
                            </div>

                        </div>

                        <hr />
                        <div className='mt-3 d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='rounded-pill' src={instructorThumb} height='50px' alt="" />
                                <p className='ms-2 dark-text'>{instructor}</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center fw-bold dark-text'>
                                <p className='secondary-text'><i className="far fa-user"></i></p>
                                <p className='ms-2 dark-text'>{students}</p>
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </Card>

        </Col>
    );
};

export default SingleCourse;
