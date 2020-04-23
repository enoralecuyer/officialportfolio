import React from 'react';
import Hero from '../components/Hero';
import workcoaching1 from '../images/work-coaching1.png';
import workcoaching2 from '../images/work-coaching2.png';
import workcoaching3 from '../images/work-coaching3.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function WorkRobot(props) {
    return(
        <div>
            <Hero title={props.title}/>
                <Container>
                    <Row>
                        <h2 className="title-gold">
                            Back in 2017, I was frustrated by WordPress and SquareSpace, so I decided to learn to code from scratch and built this website in 6 weeks with simple HTML, CSS, Bootsrap and Bulma, which I then deployed after buying a google domain. 
                        </h2>
                        {/* <h2> <a href="https://store-resort.netlify.app/">View Website</a></h2> */}
                        <Col className="resort"> 
                            <h3 className="title">1. Home page of my business.</h3>
                            <img className="resort-image" src={workcoaching1} alt="coaching website" />
                        </Col>
                        <Col className="resort">
                            <h3 className="title">2. Coaching page with price options.</h3>
                            <img className="resort-image" src={workcoaching2} alt="coaching website" />
                        </Col>
                        <Col className="resort">
                            <h3 className="title">2. Page of testimonials.</h3>
                            <img className="resort-image" src={workcoaching3} alt="coaching website" />
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WorkRobot;