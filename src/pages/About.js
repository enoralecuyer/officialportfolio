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
              Born and raised in France, I now live in Southern California with
              my cat and dog. I have a professional background in art history,
              project management, and business coaching. After running a
              coaching business, I joined the customer service field where I
              delivered the best possible experience to clients in tech and
              accounting support. Today I am pursuing my love of technical
              analysis.
            </p>
            <p className="pt-3">
              When I am not coding and learning new languages, I am usually
              found hiking, gardening or playing video games.
            </p>
            <p className="pt-3">
              <strong>Tech Skills: </strong>
              XML, HTML5, HTTP, CSS3, SASS, JavaScript, React, Redux, NodeJS,
              Python, SQL, Jupyter Notebook, Rest APIs, JSON, npm, CRM,
              Contentful, Netlify, SEO, SSO, Git, Linux, Windows, Mac, Jira,
              Slack, Salesforce, Zendesk, Figma, InDesign, Agile, Project
              Management, Software Training, IT Support, Data Analysis, Data
              Management, Spanish, French (native)
            </p>
            <p className="pt-3">
              <strong>IT Support Skills: </strong>
              Basic computer architecture, Operating systems (Windows, Linux,
              Mac), Remote connection and virtual machines, Computer networking,
              Software management, Troubleshooting, Customer service, Routing
              concepts, VPNs and proxies, Permissioning, Package and software
              management, Process management, Resource monitoring, Systems
              administration, Configuration, Centralized management,
              Implementing/managing directory services, Data management and
              recovery, IT security, Cryptology/encryption, Hashing, Network
              security
            </p>
            <p className="pt-3">
              <strong>Soft Skills: </strong>
              Positive attitude, excellent customer service, clear
              communication, active listening, conflict resolution, empathy,
              sense of humor.
            </p>
            <p className="pt-3">
              <strong>Certifications: </strong>
              <ul>
                <li>Getting Started with Python - Coursera</li>
                <li>SQL Certification - SoloLearn</li>
                <li>Google IT Support Professional Certification - Coursera</li>
                <li>
                  The Complete Web Developer in 2021 - Udemy, Andrei Neagoie
                </li>
                <li>
                  Software Product Management Specialization - University of
                  Alberta, Canada
                </li>
                <li>Data Science Professional Certificate - Coursera, IBM</li>
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
                href="https://drive.google.com/file/d/1eQky9y91-gGIz2dVGKgIYSH53G3KE9xZ/view?usp=sharing"
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
