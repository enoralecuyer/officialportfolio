import React from 'react';
import Hero from '../components/Hero';
import workresort1 from '../images/work-resort1.jpg';
import workresort2 from '../images/work-resort2.jpg';
import workresort3 from '../images/work-resort3.jpg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function WorkResort(props) {
    return(
        <div>
            <Hero title={props.title}/>
                <Container>
                    <Row>
                        
                        <h2 className="title-gold">
                            I built this hotel in React, added new hotel rooms with CMS Contentful, and deployed in on GitHub and Netlify.
                        </h2>
                        {/* <h2> <a href="https://store-resort.netlify.app/">View Website</a></h2> */}
                        <Col className="resort"> 
                            <h3 className="title">1. Home page with featured rooms.</h3>
                            <img className="resort-image" src={workresort1} alt="resort website" />
                        </Col>
                        <Col className="resort">
                            <h3 className="title">2. Rooms page with filtering options.</h3>
                            <img className="resort-image" src={workresort2} alt="resort website" />
                        </Col>
                        <Col className="resort">
                            <h3 className="title">3. Individual room page with details.</h3>
                            <img className="resort-image" src={workresort3} alt="resort website" />
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WorkResort;