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
            <Emoji symbol="⚛️" label="react" />
            What I learned from Women of React 2020
          </h1>
          <p>April 29, 2020</p>
          <p>
            I had such a great time attending the Women of React conference.
            What a blast! This is what I learned from it.
          </p>
          <h1>
            <strong>1. Accessible components by Yuraima Estevez</strong>
          </h1>
          <img
            className="img-fluid mt-4"
            src={accessibility}
            alt="Accessibility"
          ></img>
          <h6>
            <i>The code on the left is fully accessible!</i>
          </h6>
          <p>
            <strong>
              There are three easy ways to make components more accessible:
            </strong>
          </p>
          <ul>
            <li>Semantic HTML</li>
            <li>ARIA attributes</li>
            <li>Keyboard navigation</li>
          </ul>

          <p>
            <strong>Semantic HTML</strong>
          </p>
          <p>
            They provide meaning to your content and components beyond their
            visual representations. For example, use appropriate 'button'
            instead of 'div' or 'span'.
          </p>
          <p>
            <strong>ARIA attributes</strong>
          </p>
          <p>
            ARIA attributes are HTML attributes that help define/enhance the
            semantics of our components to make them more accessible. The best
            ARIA is no ARIA at all. They override all the semantic meaning for
            the elements they’re applied to. It can be applied for roles, states
            and properties.
          </p>
          <p>
            <strong>Keyboard navigation</strong>
          </p>
          <p>
            How can users interact with our components using only a keyboard?
            Not everyone uses a mouse to navigate on the web. Each component
            needs to have keyboard support.
          </p>
          <p>For example :</p>
          <ul>
            <li>
              Gain keyboard focus whenever a user reaches it with 'tabIndex="0"'
            </li>
            <li>Assign a PressHandler with 'onKeyPress'</li>
            <li>
              Always have focus on where the user is. For example, have a blue
              outline around a button. Users know where their keyboard focus is,
              and where to go from there.
            </li>
            <li>
              Manage focus persistence between modules. If you open up a pop up,
              the keyboard has to go back to the original button when closing
              the popup.
            </li>
          </ul>
          <h3>
            <strong>FAQ</strong>
          </h3>
          <p>
            <strong>How to address accessibility to coworkers or PO?</strong>
          </p>
          <ul>
            <li>
              To engineers: Accessibility is as important as security,
              performance and UX experience.
            </li>
            <li>To PO: we are missing people who cannot use our services.</li>
          </ul>
          <p>
            <strong>
              What is the best approach to refactor an existing design system
              that is in use?
            </strong>
          </p>
          <p>
            Don’t try to do it all at once. It takes time, especially
            retroactively. Resolve little errors, and ultimately it will build
            up into full accessibility support.
          </p>

          <h1>
            <strong>2. Design System by Neha Sharma</strong>
          </h1>
          <img
            className="img-fluid mt-4"
            src={designsystem}
            alt="Design System"
          ></img>
          <h6>
            <i>Important elements of a Design Dystem</i>
          </h6>
          <p>
            <strong>
              When every product team has its own design, the solution is to
              create a Design System.
            </strong>
          </p>
          <p>It’s important to go see each team and to ask them:</p>
          <ul>
            <li>What are your products’ needs?</li>
            <li>
              What excites you and what challenges you in your current design
              system?
            </li>
          </ul>
          <p>
            <strong>The most importants components of a Design System:</strong>
          </p>
          <ol>
            <li>Scalability (with atoms)</li>
            <li>Base Component Structure</li>
            <li>Accessibility</li>
            <li>Data Validation</li>
            <li>Naming conventions of components</li>
            <li>Design Language</li>
            <li>Storybook</li>
            <li>Less PR and more automation</li>
          </ol>
          <h3>
            <strong>FAQ</strong>
          </h3>
          <p>
            <strong>What are some good softwares for automation?</strong>
          </p>
          <p>Axe, Lighthouse.</p>
          <p>
            <strong>What are the learning keys?</strong>
          </p>
          <ul>
            <li>
              Scalability could be easy if you think in terms of reusability.
            </li>
            <li>Early previews and early feedback are crucial.</li>
            <li>Process your documentation.</li>
          </ul>

          <h1>
            <strong>
              3. Level up your Design System with styled-system by Taley'a Mirza
            </strong>
          </h1>
          <img
            className="img-fluid mt-4"
            src={styledsystem}
            alt="Styled System"
          ></img>
          <h6>
            <i>Great use of the styled-systems by Brent Jackson</i>
          </h6>

          <p>
            When you have built a website too fast, and you realize that you
            have 3 styles of button, 2 different colors for links, and a
            different padding on all pages, what do you do? You assess the
            problem: inconsistent design, need for refactoring and need for
            responsive styling.
          </p>
          <p>
            The solution is to use the Styled-systems by Brent Jackson. They
            work as a layer of abstraction for CSS in JS libraries.
          </p>
          <p>
            <strong>Advantages:</strong>
          </p>
          <ul>
            <li>Builds consistent UIs faster.</li>
            <li>Styles props that pick up values from a global theme.</li>
            <li>Applies styles responsively across breakpoints.</li>
          </ul>

          <h1>
            <strong>
              4. Drawing the Invisible: How to Explain React through Visual
              Metaphors by Maggie Appleton
            </strong>
          </h1>
          <img
            className="img-fluid mt-4"
            src={metaphor1}
            alt="What is React?"
          ></img>
          <h6>
            <i>What is React?</i>
          </h6>
          <img
            className="img-fluid mt-4"
            src={metaphor2}
            alt="What is React DOM?"
          ></img>
          <h6>
            <i>What is React DOM?</i>
          </h6>
          <p>
            <strong>How to build metaphors?</strong>
          </p>
          <ol>
            <li>Find your nouns and verbs.</li>
            <li>State one main concept in simple terms.</li>
            <li>Pick functions and key qualities to highlight.</li>
            <li>Think laterally to find alternatives.</li>
            <li>Add in storytelling.</li>
          </ol>
          <p>
            <i>
              “Metaphor is just a conduit for the transportation of ideas
              between minds.” -Tim Rohrer
            </i>
          </p>

          <h1>
            <strong>5. React Dev Tools by Anushree Subramani</strong>
          </h1>
          <p>Instead of using console.log(), use React Dev Tools!</p>
          <ul>
            <li>Fast refresh to solve hot reloading.</li>
            <li>Inspect and filter props to remove all the console.log().</li>
            <li>Get full hook support.</li>
            <li>Find the element’s owner to debug props values.</li>
            <li>Filter for a cleaner tree.</li>
            <li>Suspense toggles.</li>
            <li>Inspect matching DOM elements.</li>
            <li>View source.</li>
            <li>Have better warnings with component stacks.</li>
            <li>Expand and collapse subtree with keyboard arrows.</li>
          </ul>

          <h1>
            <strong>6. Self-Care In Tech with Carolyn Stransky</strong>
          </h1>
          <ul>
            <li>www.bit.ly/self-care-talk-resources</li>
            <li>selfcare.tech</li>
            <li>lemonaid.io</li>
            <li>codenewbie.org</li>
            <li>burnout.io</li>
            <li>complicated.life</li>
            <li>talkspace.com</li>
          </ul>

          <h1>
            <strong>
              7. Test-driven development (TDD) with React by Eve Porcello
            </strong>
          </h1>
          <p>
            TDD is not the test, the code coverage or the library. It is a
            process that drives how to write code. Use Jest in VSC.
          </p>
          <ul>
            <li>Red: write the tests, watch them fail.</li>
            <li>Green: write minimal amount of code and pass test.</li>
            <li>Gold: refactor code and pass test.</li>
          </ul>
          <p>
            Eve live coded an App to distribute weight between her backpack and
            her husband’s when they go hiking.
          </p>

          <h1>
            <strong>
              8. Preparing for React tech interviews by Adrianna Valdivi
            </strong>
          </h1>
          <p>
            <strong>1. Types of technical interviews</strong>
          </p>
          <ol>
            <li>whiteboarding</li>
            <li>github pull request/repo</li>
            <li>timed assessments</li>
            <li>pair programming</li>
            <li>conceptual questions</li>
          </ol>
          <p>
            <strong>2. What is React?</strong>
          </p>
          <p>
            They already know React is declarative, composable, component-based
            and reusable. Her best definition is: “It’s a JSX transpiler, a
            library that lets you build reusable code that manages state, and
            has the user provided properties.”
          </p>
          <p>
            <strong>3. State VS Props</strong>
          </p>
          <img
            className="img-fluid mt-4"
            src={interview1}
            alt="State VS Props"
          ></img>
          <h6>
            <i>
              Props are immutable in children components, but can change on
              parent’s components.
            </i>
          </h6>
          <p>
            <strong>4. Prop drilling</strong>
          </p>
          <p>
            It is the process of explicitly passing values throughout the view
            of your application, to pass props down your React DOM tree.
          </p>
          <p>
            <strong>5. React Context API</strong>
          </p>
          <p>
            Context provides a way to pass data through the component tree
            without having to pass props down manually at every level.
          </p>
          <p>
            React provides 'createContext' for consumer and provider, and
            'useContext' for hook.
          </p>
          <p>
            <strong>6. Lifecycle Hooks or React hooks</strong>
          </p>
          <img className="img-fluid mt-4" src={interview3} alt="Hooks"></img>
          <h6>
            <i>You can not use both of them at the same time.</i>
          </h6>
          <p>
            <strong>7. Making API calls</strong>
          </p>
          <p>useState() and useEffect().</p>
          <p>
            <strong>8. Async/Await</strong>
          </p>
          <p>
            async before a function means one simple thing: a function always
            returns a promise. await makes JS wait until that promise settles
            and returns its result.
          </p>
          <p>
            <strong>9. Set</strong>
          </p>
          <p>
            The Set object lets you store unique values of any type, whether
            primitive values or object references.
          </p>
          <p>
            <strong>10. Must Know</strong>
          </p>
          <img
            className="img-fluid mt-4"
            src={interview4}
            alt="Must Know"
          ></img>
          <img
            className="img-fluid mt-4"
            src={interview5}
            alt="Var Let Const"
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;

