import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faMapPin } from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
        <div>
            <div className="titlecard">
                ADWITIYA SINGH
            </div>
            <div>
                <img className="center" src="pfp.jpg" alt="Profile Picture"/>
            </div>
            <div className="map-pin">
                <FontAwesomeIcon icon={faMapPin}color="#101820FF"/>
                &nbsp; Los Angeles, California
            </div>
            <div>
                <ul className="c-social">
                    <li>
                        <a href="https://www.linkedin.com/in/adwitiya-singh-a31251153/" title="Add me on LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} color="#101820FF" />
                        </a>
                    </li>
                    <li>
                        <a href="resume.pdf" title="Check out my resume">
                            <FontAwesomeIcon icon={faFileAlt} color="#101820FF"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Adwitiya-Singh" title="Check out my projects">
                            <FontAwesomeIcon icon={faGithubSquare} color="#101820FF"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="about-me">
                Full Stack Developer at California State University, Northridge & Database Architect at UAW Local 4123
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
                                    <h6>April 2019</h6>
                                </div>
                            </div>
                            <div className="timeline-text d-flex-2">
					<span>
						The launch of Aryancoin; AYA ICO, resulting in over 30BTC collected
					</span>
                                <div className="t-square"></div>
                            </div>
                        </div>
                        <div className="single-timeline d-flex-2">
                            <div className="timeline-blank">
                                <div className="timeline-text-title">
                                    <h6>December 2019 </h6>
                                </div>
                            </div>
                            <div className="timeline-text d-flex-2">
					<span>
						The launch of AYA Pay
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
						<img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                             alt="Girl in a jacket"/>
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
                                    <h6>Q1 2021</h6>
                                </div>
                            </div>
                            <div className="timeline-text d-flex-2">
					<span>
						Alef B goes live (more details coming soon)
						<img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                             alt="Girl in a jacket"/>
					</span>
                                <div className="t-square"></div>
                            </div>
                        </div>
                        <div className="single-timeline d-flex-2">
                            <div className="timeline-blank">
                                <div className="timeline-text-title">
                                    <h6>Q1 2021</h6>
                                </div>
                            </div>
                            <div className="timeline-text d-flex-2">
					<span>
						Alef B goes live (more details coming soon)
						<img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                             alt="Girl in a jacket"/>
					</span>
                                <div className="t-square"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
