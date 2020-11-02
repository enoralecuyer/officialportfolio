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
            <p>
              I live in Orange County, CA with my wife, and our cat and dog.
              Originally from France, I previously studied Art History, Project
              Management and Business Coaching. After running a confidence
              coaching business, I returned to my deep love of IT support and
              coding.
            </p>
            <p className="pt-3">
              When I am not coding and learning about new languages, I am
              usually found hiking, gardening or playing video games with my
              wife.
            </p>
          </div>
          <img className="profile" src={profile} alt="profile" />
          <div className="about-description">
          <p className="pt-3">
              <strong>IT Support Skills: </strong>
              Basic computer architecture, Operating systems (Windows, Linux, Mac), Remote connection 
              and virtual machines, Computer networking, Software management, Troubleshooting, Customer 
              service, Routing concepts, VPNs and proxies, Permissioning, Package and software management, 
              Process management, Resource monitoring, Systems administration, Configuration, Centralized 
              management, Implementing/managing directory services, Data management and recovery, IT security, 
              Cryptology/encryption, Hashing, Network security
            </p>
            <p className="pt-3">
              <strong>Dev Skills: </strong>
              HTML5, CSS3, JavaScript, React, Redux, Bootstrap, Tachyons, Bulma,
              Rest APIs, Node, Express, Contentful, Netlify, Git, Version
              Control.
            </p>
            <p className="pt-3">
              <strong>Soft Skills: </strong>
              Positive attitude, customer service, clear communication, , active listening,
              conflict resolution, sense of humor.
            </p>
            <p className="pt-3">
              <strong>Certifications: </strong>
              <ul>
                <li>
                  Google IT Support Professional Certification - Coursera
                </li>
                <li>
                  The Complete Web Developer in 2020 - Udemy, Andrei Neagoie
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
                href="https://drive.google.com/file/d/15XWS344J4H31qoAdlRDlR2gKrT6H50In/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              ,<a href="mailto:enora.lecuyer1@gmail.com"> Email</a> ,
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
