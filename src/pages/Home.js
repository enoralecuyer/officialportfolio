import React from 'react';
import Emoji from '../components/Emoji';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function Home() {
    return(
        <>
        <Container fluid={true} className="table-of-contents">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1>
                        Enora Lecuyer
                    </h1>
                    <h1>
                        Front-End Developer
                    </h1>
                    <h1 style={{ color: 'grey' }}>
                    based in Orange County <Emoji symbol="🍊" label="tangerine"/> , CA
                    </h1>
                    <Row>
                        <a className="icon" href="mailto:enora.lecuyer1@gmail.com"><FaEnvelope /></a>
                        <a className="icon" href="https://github.com/enoralecuyer"><FaGithub /></a>
                        <a className="icon" href="https://www.linkedin.com/in/enoralecuyer1/"><FaLinkedin /></a>
                    </Row>
                    <h1 className="home-title">
                        <strong>Projects: </strong>
                    </h1>
                    <a href="https://www.trilliontreecampaign.org/">
                        <h1 className="home-project">
                            <Emoji symbol="🌳" label="tree"/> 
                            The Trillion Tree
                        </h1>
                    </a>
                    <h4 className="home-project-subtitle">
                        Improving the accessibility of a React Native-based Open Source App.
                    </h4>
                    
                    <a href="https://store-resort.netlify.app/">
                        <h1 className="home-project">
                            <Emoji symbol="🏨" label="hotel"/> 
                            W Hotels Resort
                        </h1>
                    </a>
                    <h4 className="home-project-subtitle">
                        React-based hotel generated via Contentful and deployed on Netlify.
                    </h4>
                    <a href="http://www.enoralecuyer.com/indexcoaching.html">
                        <h1 className="home-project">
                            <Emoji symbol="🔮" label="crystal ball"/> 
                            Confidence Coaching
                        </h1>
                    </a>
                    <h4 className="home-project-subtitle">
                        Built with Bulma, Bootstrap and the classic HTML5 and CSS3.
                    </h4>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;