import React from 'react';
import Hero from '../components/Hero';
import workrobot1 from '../images/work-robot1.png';
import workrobot2 from '../images/work-robot2.png';
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
                            I built this web app to be able to search for robot by their name, with the data extracted from the API RobotSearch.
                        </h2>
                        {/* <h2> <a href="https://store-resort.netlify.app/">View Website</a></h2> */}
                        <Col className="resort"> 
                            <h3 className="title">1. Home page with featured robot.</h3>
                            <img className="resort-image" src={workrobot1} alt="robot website" />
                        </Col>
                        <Col className="resort">
                            <h3 className="title">2. Result of the search when typing glenna.</h3>
                            <img className="resort-image" src={workrobot2} alt="robot website" />
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WorkRobot;