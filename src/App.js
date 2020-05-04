import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Emoji from './components/Emoji';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import BlogIndex from './pages/BlogIndex';
import FavDevTools from './pages/blog/FavDevTools';
import WomenOfReact from './pages/blog/WomenOfReact';
import VSCExtensions from './pages/blog/VSCExtensions';
import Footer from './components/Footer';


class App extends React.Component {

  render(){
    return (
    <Router>
      <Container className="p-0" fluid={true}> 
        <Navbar expand="lg" className="nav-size">
          <Nav>
            <Link className="nav-style" to="/"><strong><Emoji symbol="🦔" label="hedgehog"/> Enora Lecuyer</strong></Link>
          </Nav>
          {/* border-0 removes border around burger */}
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar=toggle">
            {/* margin-left-auto, sends links of menu to the right */}
            <Nav className="ml-auto">
              <Link className="nav-style" to="/"><Emoji symbol="🏡" label="house"/> Home</Link>
              <Link className="nav-style" to="/about"><Emoji symbol="👩‍💻 " label="woman"/>About</Link>
              <Link className="nav-style" to="/blogindex"><Emoji symbol="📚" label="books"/> Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <Home /> } />
        <Route path="/about" render={() => <About /> } />
        <Route path="/blogindex" render={() => <BlogIndex /> } />
        <Route path="/womenofreact" render={() => <WomenOfReact /> } />
        <Route path="/favdevtools" render={() => <FavDevTools /> } />
        <Route path="/vscextensions" render={() => <VSCExtensions /> } />
        
        <Footer />
      </Container>
    </Router>
    );
  }
}

export default App;
