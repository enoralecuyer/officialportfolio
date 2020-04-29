import React from 'react';
import profile from '../images/profile.png';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function About() {
    return(
        <>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8}>
                            <h1 className="about-title">Hi, nice to meet you!</h1>
                            <img className="profile" src={profile} alt="profile" />
                            <div className="about-description">
                            <p>
                                Enora Lecuyer lives in Orange County, CA with her wife, and their cat and dog. Originally from France, 
                                she previously studied Art History, Project Management and Business Coaching.
                            </p>
                            <p>
                                After running two businesses in coaching and pet care, she returned to her deep love of databases and coding.
                                Enora is currently volunteering on the open source project 1 Trillion Trees to help replant trees around the world.
                            </p>
                            <p>
                                When she is not coding and learning about new languages, she is usually found hiking, gardening or playing video
                                games with her wife. 
                            </p>
                            
                            <p className="pt-3">
                                <strong>Skills: </strong>HTML5, CSS3, React, Bootstrap, jQuery, APIs, Gatsby, Contentful, Netlify, Github, Responsive Design, 
                                Version Control, Testing and Debugging.
                            </p>

                            <p className="pt-3">
                                <strong>Education: </strong>
                                    <li className="no-dot">Data Science Professional Certificate Specialization - IBM</li>
                                    <li className="no-dot">Software Product Management Specialization - University of Alberta, Canada</li>
                                    <li className="no-dot">Master's degree in Art History and Cultural Management - France</li>
                            </p>
                            <p className="pt-3">
                                <strong>Get in touch: </strong> 
                                <a href="https://www.linkedin.com/in/enoralecuyer1/">Resume</a>,
                                <a href="mailto:enora.lecuyer1@gmail.com"> Email</a> ,
                                <a href="https://github.com/enoralecuyer"> GitHub</a>, 
                                <a href="https://www.linkedin.com/in/enoralecuyer1/"> LinkedIn</a>.
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </>
    );
}


export default About;