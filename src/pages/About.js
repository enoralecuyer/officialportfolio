import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import logo from '../images/avatar2.png';


import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaGithub, FaStackOverflow, FaLinkedin, FaEnvelope, FaFile } from 'react-icons/fa';



function About(props) {
    return(
        <div>
            {/* take hero component but change title */}
            <Hero title={props.title}/>
            <Content>
                <Container>
                    <Row className="p-5">
                        <Col>
                            <img className="logo" src={logo} alt="Logo" />
                            </Col>
                            <Col>
                            <h1><strong>Hi, nice to meet you!</strong></h1>
                            <p>I code in HTML5, CSS3 and JavaScript. When I am not working, I enjoy walking, 
                                gardening or playing video games with my wife.</p>
                            <h2>Expertise</h2>
                            <ul>
                                <li>HTML and CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>ReactJS</li>
                                <li>GatsbyJS</li>
                                <li>Bootstrap</li>
                                <li>APIs</li>
                                <li>Contentful</li>
                                <li>Netlify</li>
                                <li>Responsive Design</li>
                                <li>Testing and Debugging</li>
                                <li>Versions Control with Git</li>
                            </ul>
                            <h1>Education</h1>
                            <ul>
                                <li>Data Science Professional Certificate Specialization - IBM</li>
                                <li>Software Product Management Specialization - University of Alberta, Canada</li>
                                <li>Master's degree in Art History and Cultural Management - France</li>
                            </ul>
                            <h1>Download Resume</h1>
                                <a className="icon-small" href="https://www.linkedin.com/in/enoralecuyer1/"><FaFile /></a>
                            <h1>Get in touch</h1>
                            <a className="icon-small" href="mailto:enora.lecuyer1@gmail.com"><FaEnvelope /></a>
                            <a className="icon-small" href="https://github.com/enoralecuyer"><FaGithub /></a>
                            <a className="icon-small" href="https://stackoverflow.com/users/12963316/eimn?tab=profile"><FaStackOverflow /></a>
                            <a className="icon-small" href="https://www.linkedin.com/in/enoralecuyer1/"><FaLinkedin /></a>
                        </Col>
                    </Row>
                </Container>
            </Content>
        </div>
    );
}


export default About;