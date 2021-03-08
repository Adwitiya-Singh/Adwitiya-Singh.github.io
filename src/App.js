import './App.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faFileAlt, faMapPin, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import React from 'react'


class AppBase extends React.Component {
    componentDidMount() {
        if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ) {
            let observer = new IntersectionObserver(entries => {
                if (entries[0].boundingClientRect.y < 0) {
                    document.body.classList.add("header-not-at-top");
                } else {
                    document.body.classList.remove("header-not-at-top");

                }
            }, {
                root: null,
                threshold: 1.0
            });
            observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
        }
    }

    render() {
        let iconColor = "#101820FF";

        return (
            <div>
                <header id="header">
                    <div>
                        <ul className="c-social">
                            <li>
                                <a href="mailto:adwitiya.karan@gmail.com" title="Add me on LinkedIn">
                                    <FontAwesomeIcon icon={faEnvelope} color={iconColor}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/adwitiya-singh-a31251153/"
                                   title="Add me on LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} color={iconColor}/>
                                </a>
                            </li>
                            <li>
                                &nbsp; AS &nbsp;
                            </li>
                            <li>
                                <a href="resume.pdf" title="Check out my resume">
                                    <FontAwesomeIcon icon={faFileAlt} color={iconColor}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Adwitiya-Singh" title="Check out my projects">
                                    <FontAwesomeIcon icon={faGithubSquare} color={iconColor}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                <body>
                <div className="titlecard">
                    ADWITIYA SINGH
                </div>
                <div>
                    <img className="center" src="pfp.jpg" alt="Profile"/>
                </div>
                <div className="map-pin">
                    <FontAwesomeIcon icon={faMapPin} color={iconColor}/>
                    &nbsp; Los Angeles, California
                </div>
                <div>
                    <ul className="c-social">
                        <li>
                            <a href="mailto:adwitiya.karan@gmail.com" title="Add me on LinkedIn">
                                <FontAwesomeIcon icon={faEnvelope} color={iconColor}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/adwitiya-singh-a31251153/" title="Add me on LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} color={iconColor}/>
                            </a>
                        </li>
                        <li>
                            <a href="resume.pdf" title="Check out my resume">
                                <FontAwesomeIcon icon={faFileAlt} color={iconColor}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Adwitiya-Singh" title="Check out my projects">
                                <FontAwesomeIcon icon={faGithubSquare} color={iconColor}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="about-me">
                    Full Stack Developer at California State University, Northridge & Database Architect at UAW Local
                    4123
                    Los Angeles, California, United States
                </div>
                <div className="timeline-area">
                    <div className="container">
                        <div className="timelines">
                            <h2>Timeline</h2>
                        </div>
                        <div className="all-timelines">
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>July 2019</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
					<span>
						Full Stack Developer - CSU, Northridge <br/>
                        · Worked on the frontend and backend for the content management system for our campus chat bot. Tools used include:<br/>
                        &nbsp; - RESTful API in python using SQLAlchemy as the ORM hosted on an AWS Lambda for the Backend<br/>
                        &nbsp; - React.js interface for the Frontend with the API library generated using OpenAPI<br/>
                        &nbsp; - Dialogflow integration for seamless training of the chatbot<br/>
                        · Wrote accessible components for our, heavily accessibility focused, in-house React Component library<br/>

					</span>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>February 2018</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
					<span>
						Instructional Student Assistant - CSU, Northridge<br/>
						· Reviewed computer science class material specifically with implementation of data structures and algorithms with students
                        to help them discover the correct answers to problems in Java<br/>
                        · Conducted tutorial services for students to provide academic support in computer programming
					</span>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>April 2020</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
					<span>
						The successful Hamedan Hardfork, supported by all AYA exchanges, aimed at integrating the dPoW algorithm, improving the security of the AYA blockchain.
					</span>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>July 2020</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
					<span>
						Aryna Exchange goes live, opening more trading opportunities globally
					</span>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>July 2020</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
					<span>
						The enabling of our Coin Exchanger
					</span>
                                    <div className="t-square"></div>
                                </div>
                            </div>

                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>June 2020</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
					<span>
						The implementation of Smart Contracts into the Aryacoin Ecosystem
					</span>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>August 2018</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">

                                    <span>
                                        <h3>Started working at the Database Administrator for UAW 4123</h3>

                                    </span>
                                    <img className="circle" width="150" height="150"
                                         src="UAW.jpg"
                                    />
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>May 2018</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <span>
                                        <img src="AS.png"/>
                                        <h3>Was elected to the Associated Student's Senate as a Senator for the College of Engineering and Computer Science</h3>

                                    </span>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>Feb 2018</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <span>
                                        <h3>Began tutoring lower level Computer Science courses at the CECS Tutoring Lab at CSUN</h3>
                                        <br/>
                                        I tutored students on concepts ranging from paradigms of Objected Oriented Programming to shortest path algorithms for Graphs. <br/><br/>
                                        Concepts tutored:
                                        <ul>
                                            <br/>
                                            <li>· Algorithms, their representation, design, structuring, analysis and optimization. Implementation of algorithms as structured programs in a high level language. </li>
                                            <br/><br/>
                                            <li>· Composite data types, such as arrays, records, strings and sets.</li>
                                            <br/><br/>
                                            <li>· Definition, implementation and application of data structures, such as stacks, queues, linked lists, trees, hash tables and graphs.</li>
                                            <br/><br/>
                                            <li>· Recursion, Abstraction and the use of time complexity expressions in evaluating algorithms.</li>
                                            <br/><br/>
                                            <li>· Comparative study of sorting and searching algorithms. </li>
                                            <br/><br/>
                                            <li>· Computer architecture, assembly language programming, system software and computer applications. </li>
                                        </ul>

                                    </span>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>August 2017</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <img width="150" height="150" src="csun.png"
                                         alt="Girl in a jacket"/>
                                    <span>

                        <h3>Started Bachelor's of Science in Computer Science at California State University, Northridge</h3>
					</span>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    copyright © 2021
                </div>
                </body>
                <div id="top-of-site-pixel-anchor"></div>
            </div>
        );
    }
}

export default AppBase;
