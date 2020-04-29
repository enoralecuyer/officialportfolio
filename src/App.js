import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
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
import WorkResort from './pages/WorkResort';
import WorkRobot from './pages/WorkRobot';
import WorkCoaching from './pages/WorkCoaching';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Enora Lecuyer',
      headerLinks: [
        { title: 'Work', path: '/work' },
        { title: 'About', path: '/about' },
        { title: 'Blog', path: '/blogindex' },
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
      workresort: {
        title: `W Hotels Resort`,
      },
      workrobot: {
        title: `Robot App`,
      },
      workcoaching: {
        title: `Coaching Website`,
      },
      blogindex: {
        title: `Blog Index`,
      },
      favdevtools: {
        title: `Blog Index`,
      },
      vscextensions: {
        title: `blog`
      },
      womenofreact: {
        title: `Blog Index`,
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
              <Link className="nav-purple" to="/blogindex">Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
        <Route path="/work" render={() => <Home title={this.state.home.title}/> } />
        <Route path="/workresort" render={() => <WorkResort title={this.state.workresort.title}/> } />
        <Route path="/workrobot" render={() => <WorkRobot title={this.state.workrobot.title}/> } />
        <Route path="/workcoaching" render={() => <WorkCoaching title={this.state.workcoaching.title}/> } />
        <Route path="/about" render={() => <About title={this.state.about.title}/> } />
        <Route path="/blogindex" render={() => <BlogIndex title={this.state.blogindex.title}/> } />
        <Route path="/womenofreact" render={() => <WomenOfReact title={this.state.womenofreact.title}/> } />
        <Route path="/favdevtools" render={() => <FavDevTools title={this.state.favdevtools.title}/> } />
        <Route path="/vscextensions" render={() => <VSCExtensions title={this.state.vscextensions.title}/> } />

        <Footer />

      </Container>
    </Router>
    );
  }
}

export default App;
