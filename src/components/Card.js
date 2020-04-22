import React from 'react';
import Content from '../components/Content';
import Button from 'react-bootstrap/Button';

import resort from '../images/work-resort.png';
import robot from '../images/work-robot.png';
import coaching from '../images/work-coaching.png';
import contentful from '../images/contentful.png';
import netlify from '../images/netlify.png';
import react from '../images/react.svg';
import html from '../images/html5.svg';
import css from '../images/css.png';
import bootstrap from '../images/bootstrap.svg';
import bulma from '../images/bulma.png';
import api from '../images/api.png';

function Card() {
    return(
        <Content>
            <a href="/">
				<div className="container d-flex col-example">
					<div className="row">
						<div className="col-md-6">
							<img src={resort} className="img-fluid" alt="resort" />
						</div>
						<div class="col-md-6 mt-4">
                            <h2><strong>W Hotels Resort</strong></h2>
                            <h2>Building a Resort Hotel with filtering options for size, price and type.</h2>
                        <div className="mt-4">
                            <img className="logo-icon" src={react} alt="react" />
                            <img className="logo-icon" src={contentful} alt="contentful" />
                            <img className="logo-icon" src={netlify} alt="netlify" />
                        </div>
                        <div className="mt-4">
                            <Button variant="primary"><h4>Read Case Study</h4></Button>
                        </div>
						</div>
					</div>
				</div>
			</a>

            <a href="/">
				<div className="container d-flex col-example">
					<div className="row">
						<div className="col-md-6">
							<img src={robot} className="img-fluid" alt="resort" />
						</div>
						<div class="col-md-6 mt-4">
                            <h2><strong>Robot App</strong></h2>
                            <h2>Web App to search for robots by names, with API RobotSearch.</h2>
                        <div className="mt-4">
                            <img className="logo-icon" src={react} alt="react" />
                            <img className="logo-icon" src={api} alt="api" />
                        </div>
                        <div className="mt-4">
                            <Button variant="primary"><h4>Read Case Study</h4></Button>
                        </div>
						</div>
					</div>
				</div>
			</a>

            <a href="/">
				<div className="container d-flex col-example">
					<div className="row">
						<div className="col-md-6">
							<img src={coaching} className="img-fluid" alt="resort" />
						</div>
						<div class="col-md-6 mt-4">
                            <h2><strong>Coaching Website</strong></h2>
                            <h2>Building a business website with testimonials, price ranges and blog.</h2>
                        <div className="mt-4">
                            <img className="logo-icon" src={html} alt="html5" />
                            <img className="logo-icon" src={css} alt="css3" />
                            <img className="logo-icon" src={bootstrap} alt="bootstrap" />
                            <img className="logo-icon" src={bulma} alt="bulma" />
                        </div>
                        <div className="mt-4">
                            <Button variant="primary"><h4>Read Case Study</h4></Button>
                        </div>
						</div>
					</div>
				</div>
			</a>
      </Content>
    );
}


export default Card;