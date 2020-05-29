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
            My Favorite Visual Code Studio Extensions
          </h1>
          <p>April 25, 2020</p>
          <p>
            Visual Studio Code is by far my favorite code editor. I've tried
            Sublime and Atom in the past but they really don't make the cut.
          </p>
          <p className="title-with-border">
            <strong>Extensions</strong>
          </p>
          <ul>
            <li>
              <strong>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bracket Pair Colorizer 2
                </a>
              </strong>
            </li>
            <p>Colors matching brackets.</p>
            <li>
              <strong>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React/Redux/GraphQL/React-Native snippets
                </a>
              </strong>
            </li>
            <p>Writes snippets instead of the full text.</p>
            <li>
              <strong>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Highlight Matching Tag
                </a>
              </strong>
            </li>
            <p>Highlights matching tags.</p>
            <li>
              <strong>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lorem Ipsum
                </a>
              </strong>
            </li>
            <p>Generates lorem ipsum paragraphs.</p>
            <li>
              <strong>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Night Owl
                </a>
              </strong>
            </li>
            <p>Favorite night theme.</p>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
