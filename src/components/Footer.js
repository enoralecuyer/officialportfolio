import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="justify-content-center padding">
                    <h3>&copy; 2020 Enora Lecuyer - Front-end developer</h3>
                </Row>
                <Row className="justify-content-center">
                    <a className="icon" href="mailto:enora.lecuyer1@gmail.com" title="Email Me"><FaEnvelope /></a>
                    <a className="icon" href="https://github.com/enoralecuyer" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                    <a className="icon" href="https://www.linkedin.com/in/enoralecuyer1/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
                </Row>
            </Container>
        </footer>
    );


}

export default Footer;