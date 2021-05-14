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
            <Emoji symbol="✍🏾" label="writing hand" />
            How to Use VSC Emmet Shortcuts?
          </h1>
          <p>May 13, 2021</p>
          <p>
            Emmet shortcuts allow me to code faster in Visual Studio Code. This is my top 10!
          </p>
          <p className="title-with-border">
            <strong>1. Boilerplate HTML (The '!' at the very beginning of a HTML page)</strong>
          </p>
          <p>Type:</p>
          <pre>{`!`}</pre>
          <p>Result:</p>
          <pre>{`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
            </head>
            <body>
              
            </body>
            </html> `}
          </pre>

          <p className="title-with-border">
            <strong>2. Import the CSS Stylesheet</strong>
          </p>
          <p>Type:</p>
          <pre>{` link:css `}</pre>
          <p>Result:</p>
          <pre>{`<link rel="stylesheet" href="style.css">`}
          </pre>

          <p className="title-with-border">
            <strong>3. Write tags</strong>
          </p>
          <p>Type:</p>
          <pre>{`p`}</pre>
          <p>Result:</p>
          <pre>{`<p></p>`}
          </pre>

          <p className="title-with-border">
            <strong>5. Lorem Ipsum</strong>
          </p>
          <p>Type:</p>
          <pre>{` lorem50 `}</pre>
          <p>Result:</p>
          <pre>{`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptatibus numquam aspernatur necessitatibus ab odit ipsam delectus vel sapiente architecto dolores cum velit quis et magni, aperiam saepe mollitia nobis suscipit temporibus illo eius voluptatem nulla! Eligendi molestiae unde earum impedit sunt deleniti quaerat error? Veritatis deserunt tenetur eos laborum?`}
          </pre>

          <p className="title-with-border">
            <strong>6. Paragraphs of lorem ipsum</strong>
          </p>
          <p>Type:</p>
          <pre>{` (p>lorem5)*2 `}</pre>
          <p>Result:</p>
          <pre>{`<p>Lorem ipsum dolor sit amet.</p>
           <p>Non sapiente accusamus at eum?</p>`}
          </pre>

          <p className="title-with-border">
            <strong>7. Div with a class</strong>
          </p>
          <p>Type:</p>
          <pre>{`.hero-class`}</pre>
          <p>Result:</p>
          <pre>{`<div class="hero-class"></div>`}
          </pre>

          <p className="title-with-border">
            <strong>8. Div with an id</strong>
          </p>
          <p>Type:</p>
          <pre>{`#hero-id`}</pre>
          <p>Result:</p>
          <pre>{`<div id="hero-id"></div>`}
          </pre>

          <p className="title-with-border">
            <strong>9. Parent div and child div</strong>
          </p>
          <p>Type:</p>
          <pre>{`section>p`}</pre>
          <p>Result:</p>
          <pre>{` <section>
                      <p></p>
                  </section>`}
          </pre>

          <p className="title-with-border">
            <strong>10. Combine them all! </strong>
          </p>
          <p>Type: </p>
          <pre>{`ul.list>(li>lorem5)*10`}</pre>
          <p>Result:</p>
          <pre>{` <ul class="list">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Inventore culpa vel quod labore!</li>
                        <li>Aspernatur iste exercitationem ratione quo?</li>
                        <li>Aspernatur magnam quia molestiae veniam.</li>
                        <li>Eius, debitis? Beatae, veritatis tempora.</li>
                        <li>Asperiores, deserunt. Non, recusandae praesentium.</li>
                        <li>Veritatis excepturi illum sequi inventore.</li>
                        <li>Explicabo alias minus fuga porro.</li>
                        <li>Pariatur voluptatibus fugit sequi suscipit.</li>
                        <li>Adipisci aperiam totam vitae laborum?</li>
                    </ul>`}
          </pre>
        </Col>
      </Row>
    </Container >
  );
}

export default Blog;
