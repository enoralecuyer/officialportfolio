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
            Emmet shortcuts allow me to write my code faster in Visual Studio Code, and these are the ones I use the most:
          </p>
          <p className="title-with-border">
            <strong>1. Boilerplate HTML (The '!' at the very beginning of a HTML page)</strong>
          </p>
          <p>Just type:</p>
          <pre>{`!`}</pre>
          <p>And it will print:</p>
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
          <p>Just type:</p>
          <pre>{` link:css `}</pre>
          <p>And it will print:</p>
          <pre>{`<link rel="stylesheet" href="style.css">`}
          </pre>

          <p className="title-with-border">
            <strong>3. Write tags</strong>
          </p>
          <p>If you want to create a paragraph, a h1, a section or any tag:</p>
          <pre>{`p`}</pre>
          <p>And it will print your full tag, while placing your cursor exactly in the middle:</p>
          <pre>{`<p></p>`}
          </pre>

          <p className="title-with-border">
            <strong>5. Lorem Ipsum</strong>
          </p>
          <p>Just type:</p>
          <pre>{` lorem50 `}</pre>
          <p>And it will print the first 50 words from the lorem ipsum:</p>
          <pre>{`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptatibus numquam aspernatur necessitatibus ab odit ipsam delectus vel sapiente architecto dolores cum velit quis et magni, aperiam saepe mollitia nobis suscipit temporibus illo eius voluptatem nulla! Eligendi molestiae unde earum impedit sunt deleniti quaerat error? Veritatis deserunt tenetur eos laborum?`}
          </pre>

          <p className="title-with-border">
            <strong>6. Paragraphs of lorem ipsum</strong>
          </p>
          <p>Create two paragraphs and populate them with lorem ipsum:</p>
          <pre>{` (p>lorem5)*2 `}</pre>
          <p>And it will print:</p>
          <pre>{`<p>Lorem ipsum dolor sit amet.</p>
           <p>Non sapiente accusamus at eum?</p>`}
          </pre>

          <p className="title-with-border">
            <strong>7. Div with a class</strong>
          </p>
          <p>To create a div with the class "hero-class", just type:</p>
          <pre>{`.hero-class`}</pre>
          <p>And it will print:</p>
          <pre>{`<div class="hero-class"></div>`}
          </pre>

          <p className="title-with-border">
            <strong>8. Div with an id</strong>
          </p>
          <p>Similarly, to create a div with an id of "hero-id", just type:</p>
          <pre>{`#hero-id`}</pre>
          <p>And it will print:</p>
          <pre>{`<div id="hero-id"></div>`}
          </pre>

          <p className="title-with-border">
            <strong>9. Child and Parent Div</strong>
          </p>
          <p>To create a child div inside of a parent div:</p>
          <pre>{`section>p`}</pre>
          <p>And it will print:</p>
          <pre>{` <section>
                      <p></p>
                  </section>`}
          </pre>

          <p className="title-with-border">
            <strong>10. Combine it all! </strong>
          </p>
          <p>To create an unordered list of 10 items, each containing 5 words of the lorem ipsum: </p>
          <pre>{`ul.list>(li>lorem5)*10`}</pre>
          <p>And it will print:</p>
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
