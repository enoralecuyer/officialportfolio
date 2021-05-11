import React from "react";
import Emoji from "../../components/Emoji";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Blog() {
    return (
        <Container fluid={true} className="blog-article">
            <Row>
                <Col>
                    <h1>
                        <Emoji symbol="💕" label="two hearts" />
            My Favorite Visual Code Studio Emmet
          </h1>
                    <p>May 10, 2021</p>
                    <p>
                        Emmets are a great way to save time when writing code. Here are the ones I used most often.
          </p>
                    <p className="title-with-border">
                        <strong>Extensions</strong>
                    </p>
                    <script src="https://gist.github.com/enoralecuyer/61bb181f2901fa2b46f9f88fe22c81cc.js"></script>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;
