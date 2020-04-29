import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true} className="footer">
                <Row className="justify-content-center">
                    <h3>&copy; 2020 Enora Lecuyer - Front-end developer</h3>
                </Row>
                <Row className="justify-content-center">
                    <a className="icon" href="mailto:enora.lecuyer1@gmail.com"><FaEnvelope /></a>
                    <a className="icon" href="https://github.com/enoralecuyer"><FaGithub /></a>
                    <a className="icon" href="https://www.linkedin.com/in/enoralecuyer1/"><FaLinkedin /></a>
                </Row>
            </Container>
        </footer>
    );


}

export default Footer;