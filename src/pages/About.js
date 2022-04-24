import React from "react";
import profile from "../images/profile.png";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="about-description">
            <h1 className="about-title">Hi, nice to meet you!</h1>
            <img className="profile" src={profile} alt="profile" />
            <p>
              Born and raised in France, I now live in Southern California with my wife, cat and dog.
            </p>
            <p className="pt-3">
              I have a background in analytics, front-end development, project management, 
                and business coaching. I have a passion for the arts and sustainable development.
            </p>
            <p className="pt-3">
              When I am not coding and continually expanding my technical knowledge, I am usually 
              found hiking, gardening or playing video games.
            </p>
            <p className="pt-3">
              <strong>Skills: </strong>
              <ul>
              <li>Requirement Gathering and Analysis</li>
              <li>Technical Customer Support</li>
              <li>Stakeholder Management</li>
              <li>Agile Project Management</li>
              <li>Information Architecture (IA)</li>
              <li>Front-End Development</li>
              <li>Data Analysis, Data Visualization</li>
              <li>UX/UI Principles</li>
              </ul>
            </p>
            <p className="pt-3">
              <strong>Tools & Programming Languages: </strong>
              MS Office, MS Excel, Pivot Tables, SQL, Tableau, Jira, Confluence, Salesforce, Zendesk, HubSpot, Figma, 
                InDesign, Miro, Netlify, Git, PHP, HTML5, CSS3, SASS, JavaScript, ReactJS, API, JSON
            </p>
            <p className="pt-3">
              <strong>Certifications: </strong>
              <ul>
                <li>Google IT Support Professional Certification</li>
                <li>Software Product Management Specialization, University of Alberta, Canada</li>
                <li>SQL Certification, SoloLearn</li>
                <li>The Complete Web Developer in 2021, Udemy</li>
                <li>Data Science Professional Certificate, Coursera, IBM</li>
              </ul>
            </p>
            <p className="pt-3">
              <strong>Education: </strong>
              <ul>
                <li>
                  Associate Certified Coach, ACC - Erickson Coaching
                  International, Vancouver, Canada
                </li>
                <li>
                  Master’s Degree in Cultural Management - ICCOM Institute,
                  Paris, France
                </li>
                <li>
                  Master's degree in Art History - Université Rennes II, Rennes,
                  France
                </li>
              </ul>
            </p>
            <p className="pt-3">
              <strong>Get in touch: </strong>
              <a
                href="https://drive.google.com/file/d/1E-zcIcL7TAbZ3AgWZjrPbem0AkGksS4E/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              ,<a href="mailto:enora.lecuyer1@gmail.com"> Email</a>,
              <a
                href="https://github.com/enoralecuyer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                GitHub
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/enoralecuyer1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
