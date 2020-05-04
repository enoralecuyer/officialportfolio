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
        <Container fluid={true} className="table-of-contents">
            <Row className="justify-content-center" >
                <Col md={8}>
                    <h1>
                        <strong>
                            Hi, I'm Enora!
                        </strong>
                    </h1>
                    <h1>
                        I'm a front-end developer
                    </h1>
                   <h1 className="home-subtitle">
                        based in Orange County  <span class="wave"><Emoji symbol="🍊" label="tangerine"/></span> , CA
                    </h1>
                    <Row>
                        <a className="icon" href="mailto:enora.lecuyer1@gmail.com">
                            <FaEnvelope />
                        </a>
                        <a className="icon" href="https://github.com/enoralecuyer" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a className="icon" href="https://www.linkedin.com/in/enoralecuyer1/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </Row>
                    <h1 className="home-title">
                        <strong>
                            Projects: 
                        </strong>
                    </h1>
                    <a href="https://www.trilliontreecampaign.org/" target="_blank" rel="noopener noreferrer">
                        <h1 className="home-project">
                            <Emoji symbol="🌳" label="tree"/> 
                            The Trillion Tree Campaign
                        </h1>
                    </a>
                    <h4 className="home-project-subtitle">
                        Improving the accessibility of a React Native based Open Source App.
                    </h4>
                    
                    <a href="https://store-resort.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <h1 className="home-project">
                            <Emoji symbol="🏨" label="hotel"/> 
                            W Hotels Resort
                        </h1>
                    </a>
                    <h4 className="home-project-subtitle">
                        React-based hotel generated via Contentful and deployed on Netlify.
                    </h4>
                    <a href="http://www.enoralecuyer.com/indexcoaching.html" target="_blank" rel="noopener noreferrer">
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
    );
}

export default Home;