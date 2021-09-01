import React from "react";
import Emoji from "../components/Emoji";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <Container fluid={true} className="table-of-contents">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>
            <strong>Hi, I'm Enora!</strong>
          </h1>
          <h1>I'm a Software Engineer</h1>
          <h1 className="home-subtitle">
            based in Orange County{" "}
            <span class="wave">
              <Emoji symbol="🍊" label="tangerine" />
            </span>{" "}
            , CA
          </h1>
          <Row>
            <a
              className="icon"
              href="mailto:enora.lecuyer1@gmail.com"
              title="Email Me"
            >
              <FaEnvelope />
            </a>
            <a
              className="icon"
              href="https://github.com/enoralecuyer"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/enoralecuyer1/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </Row>
          <h1 className="home-title">
            <strong>Projects:</strong>
          </h1>
          <a
            href="https://socalparks.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="home-project">
              <Emoji symbol="🏞️ " label="mountain" />
              SoCal Parks
            </h1>
          </a>
          <h4 className="home-project-subtitle">
            A collection of all the hikes I've done in SoCal, organized by length, difficulty, city, accessibility and more!
          </h4>
          <a
            href="https://confidencecoaching.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="home-title">
            <strong>Projects:</strong>
          </h1>
          <a
            href="https://online-musikk.netlify.app/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="home-project">
              <Emoji symbol="🎵 " label="musical note" />
              OnlineMusikk
            </h1>
          </a>
          <h4 className="home-project-subtitle">
            A responsive music store built with HTML5, SASS and JavaScript.
          </h4>
          <a
            href="https://confidencecoaching.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
            <h1 className="home-project">
              <Emoji symbol="🔮 " label="crystal ball" />
              Coaching Business Portfolio
            </h1>
          </a>
          <h4 className="home-project-subtitle">
            My previous coaching business website built with Bulma, HTML5, CSS3 and
            Google Analytics.
          </h4>
          <a
            href="https://w-hotels-resort.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="home-project">
              <Emoji symbol="🏨 " label="hotel" />W Hotels Resort
            </h1>
          </a>
          <h4 className="home-project-subtitle">
            Resort website in React and Contentful with search options for
            price, size and type of room.
          </h4>
          <a
            href="https://face-recognition-web.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="home-project">
              <Emoji symbol="🔲 " label="square" />
              Face Recognition App
            </h1>
          </a>
          <h4 className="home-project-subtitle">
            Upload the photo of a person and see their face being detected. Built
            with Clarifai API.
          </h4>
          <a
            href="https://cat-robot-redux.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="home-project">
              <Emoji symbol="🐈 " label="cat" />
              Cat Gallery
            </h1>
          </a>
          <h4 className="home-project-subtitle">
            Gallery of cats with names and images automatically generated
            from an API and json placeholders. Built with React + Redux.
          </h4>
          <a
            href="https://enoralecuyer.github.io/textadventure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="home-project">
              <Emoji symbol="⚔️ " label="cat" />
              Choose Your Own Adventure
            </h1>
          </a>
          <h4 className="home-project-subtitle">
            Minigame in the style of a Choose Your Own Adventure book, written in HTML5, CSS3 and JS.
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
