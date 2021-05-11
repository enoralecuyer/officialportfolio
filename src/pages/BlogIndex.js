import React from "react";
import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BlogIndex() {
  return (
    <Container fluid={true} className="table-of-contents">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* <Link to="/Emmet">
            <h1 className="blog-title">
              <Emoji symbol="🌱 " label="seedling" />
              How to use Emmet shortcuts in Visual Studio Code?
            </h1>
            <p>May 11, 2021</p>
          </Link> */}
          <Link to="/WomenOfReact">
            <h1 className="blog-title">
              <Emoji symbol="⚛️ " label="woman technologist react" />
              What I learned from Women of React 2020
            </h1>
            <p>April 29, 2020</p>
          </Link>
          <Link to="/VSCExtensions">
            <h1 className="blog-title">
              <Emoji symbol="💕 " label="two hearts" />
              My Favorite Visual Code Studio Extensions
            </h1>
            <p>April 25, 2020</p>
          </Link>
          <Link to="/FavDevTools">
            <h1 className="blog-title">
              <Emoji symbol="🎉 " label="party popper" />
              My Favorite Developer Tools
            </h1>
            <p>April 22, 2020</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogIndex;
