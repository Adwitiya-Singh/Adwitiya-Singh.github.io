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
                                        <h6>August 2019</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                <div className="d-flex-image-text">
                                    <span>

                        <h3>Worked on <a href="https://csun-it.github.io/simile/?path=/story/components-accordion--usage">Simile</a>, our accessibility focused React component library</h3>
                                         <ul aria-label="Concepts tutored">
                                            <li>Creating and testing the  <a href="https://csun-it.github.io/simile/?path=/story/components-checklists--usage">Checklist</a> component.</li>
                                             <li>Stylised the <a href="https://csun-it.github.io/simile/?path=/story/components-tab--default">Tab</a> component.</li>
                                             <li>Designed responsive scss classes to support screen readers.</li>
                                             <li>Restructured components on the Simile demo website to migrate from our custom demo to <a href="https://storybook.js.org/">Storybook.js</a>.</li>
                                        </ul>
					</span>
                                    </div>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>August 2019</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <div className="d-flex-image-text">

                                    <img width="20%" height="20%"
                                         src="Edison.jpg"
                                         alt="Southern California Edison Logo"
                                    />
                                    <span>

                        <h3>Was awarded the Southern California Edison STEM Scholarship and the CSUN Julian Beck Endowment Award</h3>
					</span>
                                    </div>
                                    <div className="t-square"></div>
                                </div>
                            </div>
                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>July 2019</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <div className="d-flex-image-text">

                                    <span>

                        <h3>Transitioned from tutoring position to a Full Stack intern at CSUN Central IT, Web and Emerging Technology Team</h3>
					</span>
                                    </div>
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
                                    <div className="d-flex-image-text">

                                    <img className="circle" width="150" height="150"
                                         src="UAW.jpg"
                                         alt="UAW4123 Seal"
                                    />
                                    <span>
                                        <h3>Started working at the Database Administrator for UAW 4123</h3>
                                         <br/>
                                        I do a multitude of things for the UAW. I keep their membership database, written in MySQL, up to date.
                                         <br/> <br/>I also do a lot of data analysis for them using their monthly membership reports, membership surveys and state membership data.
                                        One of my favourite projects was analysing the yearly membership survey. It involved importing the ~10,000 responses, many of which included multiple
                                        sentence replies, into a data frame using <br/><a href="https://numpy.org/">Pandas</a>. The data was analysed
                                        using <a href="https://pandas.pydata.org/">Numpy </a> and <a href="https://stanfordnlp.github.io/stanza/">Stanza</a>, the Stanford NLP library. The final goal was to assign each
                                        responder with a confidence score which can be later used to make informed decisions when electing new leadership for the organisation, among many others.

                                    </span>
                                    </div>
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
                                    <div className="d-flex-image-text">

                                    <span >
                                        <img src="AS.png"  alt="CSUN Associated Students Logo"/>
                                        <h3>Was elected to the Associated Student's Senate as a Senator for the College of Engineering and Computer Science</h3>
                                        <br/>
                                        Championed legislation including:
                                         <ul aria-label="Concepts tutored">
                                            <li>Increasing the allotment of funds for campus health services from the CSUN Campus Quality fee. </li>
                                             <li>Creation of "<a href="https://www.csun.edu/usu/newheart/">new heart of campus</a>". A sustainable architectural project
                                             designed to replace one of CSUN's largest and most energy-inefficient buildings on campus.</li>
                                        </ul>
                                        <br/>
                                         I also helped the organisation navigate the political and cultural turmoil caused by CSU Executive Order 1100.
                                        <br/> <br/>
                                        Was appointed to the Dean's search committee to advise, interview, and vote upon candidates for the position of Dean of the College of Engineering and Computer Science.
                                        <br/> <br/>
                                        I was also appointed to the Campus Quality Fee budget committee where I advocated for the efficient use of student dollars and fought for more funding for tutorial services on campus.
                                    </span>
                                    </div>
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
                                    <div className="d-flex-image-text">

                                    <span>
                                        <img src="CS.png" alt="CSUN CS Logo"/>

                                        <h3>Began tutoring Computer Science courses at the CECS Tutoring Lab at CSUN</h3>
                                        <br/>
                                        I tutored students on concepts ranging from paradigms of Objected Oriented Programming to shortest path algorithms for Graphs. <br/><br/>
                                        Concepts tutored:
                                        <ul aria-label="Concepts tutored">
                                            <li>Algorithms, their representation, design, structuring, analysis and optimization. Implementation of algorithms as structured programs in a high level language. </li>
                                            <li>Composite data types, such as arrays, records, strings and sets.</li>
                                            <li>Definition, implementation and application of data structures, such as stacks, queues, linked lists, trees, hash tables and graphs.</li>
                                            <li>Recursion, Abstraction and the use of time complexity expressions in evaluating algorithms.</li>
                                            <li>Comparative study of sorting and searching algorithms. </li>
                                            <li>Computer architecture, assembly language programming, system software and computer applications. </li>
                                        </ul>

                                    </span>
                                    </div>
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
                                    <div className="d-flex-image-text">


                                    <span>

                        <h3>Started Bachelor's of Science in Computer Science at California State University, Northridge</h3>
					</span>
                                    <img width="150" height="150" src="csun.png"
                                         alt="CSUN Seal"/>
                                    </div>
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
