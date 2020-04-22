import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Enora Lecuyer',
      headerLinks: [
        { title: 'Work', path: '/work' },
        { title: 'About', path: '/about' },
        { title: 'Blog', path: '/blog' },
      ],
      home: {
        title: `Hi, I'm Enora,`,
        subTitle: `I'm a front-end developer.`,
        text: ''
      },
      about: {
        title: `About Me`,
      },
      work: {
        title: `My Recent Projects`,
      },
      blog: {
        title: `My Blog`,
      }
    }
  }


  render(){
    return (
    <Router>
      <Container className="p-0" fluid={true}> 
        <Navbar expand="lg" className="new-nav">
          <Nav><Link className="nav-purple" to="/"><strong>Enora Lecuyer</strong></Link></Nav>
          {/* border-0 removes border around burger */}
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar=toggle">
            {/* margin-left-auto, sends links of menu to the right */}
            <Nav className="ml-auto">
              <Link className="nav-purple" to="/work">Work</Link>
              <Link className="nav-purple" to="/about">About</Link>
              <Link className="nav-purple" to="/blog">Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
        <Route path="/work" render={() => <Work title={this.state.work.title}/> } />
        <Route path="/about" render={() => <About title={this.state.about.title}/> } />
        <Route path="/blog" render={() => <Blog title={this.state.blog.title}/> } />

        <Footer />

      </Container>
    </Router>
    );
  }
}

export default App;
