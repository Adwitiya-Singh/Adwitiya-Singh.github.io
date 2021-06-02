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
                    Accessibility Focused Full Stack Developer at <a href="https://www.workboard.com/">Workboard</a>

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
                                        <h6>May 2021</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <div className="d-flex-image-text">
                                        <span>

                                    <h3>Started working at <a href="https://www.workboard.com/">Workboard</a> as an Accessibility Focused Full Stack Developer </h3>
                                            	</span>
                                        <div>
                                            <img className="circle" width="150" height="150" src="Workboard.png"
                                                 alt="Workboard logo Seal"/>
                                        </div>
                                    </div>
                                    <div className="t-square"></div>
                                </div>
                            </div>

                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>May 2021</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <div className="d-flex-image-text">
                                        <span>

                                    <h3>Graduated Summa-Cum-Laude from CSUN with a degree in Computer Science and a Minor in Mathematics</h3>
                                            	</span>
                                        <div>
                                        <img className="circle" width="150" height="150" src="csun.png"
                                             alt="CSUN Seal"/>
                                    </div>
                                    </div>
                                    <div className="t-square"></div>
                                </div>
                            </div>

                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>January 2021</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <div className="d-flex-image-text">


                                        <span>

                                            <h3>Created <a href="https://www.youtube.com/watch?v=WuvE46WdUSY">Discord ASL Bot</a> for CSUN Accessibility Coding Competition 2021 </h3>
                                            <br/>

                                            The goal of this project was to make online chat platforms, like Discord and Zoom, more accessible for the hard-of-hearing. I was the Team Lead for this project.
                                            <br/><br/>
                                            The ASL Discord bot is very modular and has a <a href="https://github.com/CECS2021AccessibilityCompetitionTeam2/Discord_Frontend">frontend</a> that is purely written in Javascript,
                                            a backend written in <a href="https://github.com/CECS2021AccessibilityCompetitionTeam2/Signature">python</a> and a web scraper written in <a href="https://github.com/CECS2021AccessibilityCompetitionTeam2/Signature/blob/master/video_cache/getAllClips.sh">shell script</a>.
                                            <br/><br/>
                                            The bot can be added to any Discord voice/video conversation and it starts listening on command. It uses Google's <a href="https://cloud.google.com/speech-to-text">speech-to-text</a> to create a transcript of the current conversation and hands the flow of control the backend.
                                            <br/><br/>
                                            The backend then uses Stanford's NLP Library, <a href="https://stanfordnlp.github.io/stanza/">Stanza</a>, to convert the English Transcript to ASL grammar and creates a ASL translation for each sentence.
                                             <br/><br/>
                                            Then, the shell script scrapes the web for ASL videos for all words in the translation generated by python and stitches them together. Finally, the Discord bot sends the video back to the user in a Discord text channel.
                                            <br/><br/>
                                            We decided to make this a modular project as this increases the reusability of the service many fold. The translation-backend being separate from the Discord bot lets us use the same backend for a Zoom ASL bot as well!
                                            <br/><br/>
                                            This was designed and created with <a href="https://github.com/ChristopherHaklar">Christopher Haklar</a>, <a href="https://github.com/JaimeGG64">Jaime Garcia</a> and, <a href="https://github.com/slodoco">Kyle Chan</a>.




					</span>
                                    </div>
                                    <div className="t-square"></div>
                                </div>
                            </div>

                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>December 2020</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <div className="d-flex-image-text">


                                        <span>
                                            <img src="postgame.svg" alt="postgame logo"/>
                                            <h3>Designed the HeatMap Generation Service for <a href="https://github.com/allejo/postgame/pull/34">Postgame</a>  </h3>
                                            <br/>

                                            Postgame is an open-source project by <a href="https://allejo.io/">allejo</a>. It is a web application built using Symfony and its purpose is to analyze BZFlag games.
                                             <br/><br/>
                                            A little bit of context, <a href="https://www.bzflag.org/">BZFlag</a> is an open-world tank-based, and team-based, capture the flag game.
                                            I worked on generating a heatmap from player movement data for this project.
                                             <br/><br/>

                                            It was an extensive task and required:

                                            <li>Creating a 2d <a href="https://github.com/allejo/postgame/pull/34/files#diff-d6cedd52ccca105ddd6f466a897a6352a99b43d0bd1b9ea1925da5b446f20851">matrix of movement</a> data for each player. This was done by analyzing the movement packets that each player's computer sends to the game server with the player's location.</li>

                                            <li>Transforming movement data into a heatmap matrix. This was done by just linearly mapping the movement data to a smaller 2d matrix.</li>

                                            <li><a href="https://github.com/allejo/postgame/pull/34/files#diff-5fcb0349d87a2f6adab49fbf3c88c0303ad5c887c4458d9d0d350a78000340aa">Generating the heatmap image</a>. I used an SVG library to generate the heatmap image. This has multiple advantages, including, being able to choose whatever gradient we want for the heatmap during run time and being able to alter the size of the heatmap during run time.</li>
                                             <br/>
                                        There are thousands of examples of the heatmaps my service generated on the <a href="https://postgame.allejo.org/replays">Postgame</a> site. Just click on any of the replays and scroll all the way down to see heatmaps by player.



					</span>
                                    </div>
                                    <div className="t-square"></div>
                                </div>
                            </div>


                            <div className="single-timeline d-flex-2">
                                <div className="timeline-blank">
                                    <div className="timeline-text-title">
                                        <h6>February 2020</h6>
                                    </div>
                                </div>
                                <div className="timeline-text d-flex-2">
                                    <div className="d-flex-image-text">

                                        <span>

                                            <h3>My try at calculating the <a href="https://github.com/Adwitiya-Singh/InstantInsanity/tree/master">Minimum Obstacle</a> for any given <a href="https://en.wikipedia.org/wiki/Instant_Insanity">Instant Insanity</a> problem. Created as a final project for my Algorithm Design Class with Prof. John Dye.</h3>
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


                                    <span>

                        <h3>Awarded the Southern California Edison STEM Scholarship and the CSUN Julian Beck Endowment Award</h3>
					</span>
                                        <img width="20%" height="20%"
                                             src="Edison.jpg"
                                             alt="Southern California Edison Logo"
                                        />
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


                                    <span>
                                        <h3>Started working at the Database Administrator for UAW 4123</h3>
                                         <br/>
                                        I do a multitude of things for the UAW. I keep their membership database, written in MySQL, up to date.
                                        <br/> <br/>I also do a lot of data analysis for them using their monthly membership reports, <a href="https://github.com/Adwitiya-Singh/UAWResponseAnalysis">membership surveys</a> and state membership data.
                                        One of my favourite projects was analysing the yearly membership survey. It involved importing the ~10,000 responses, many of which included multiple
                                        sentence replies, into a data frame using <br/><a href="https://numpy.org/">Pandas</a>. The data was analysed
                                        using <a href="https://pandas.pydata.org/">Numpy </a> and <a href="https://stanfordnlp.github.io/stanza/">Stanza</a>, the Stanford NLP library. The final goal was to assign each
                                        responder with a confidence score which can be later used to make informed decisions when electing new leadership for the organisation, among many others.

                                    </span>
                                        <img className="circle" width="150" height="150"
                                             src="UAW.jpg"
                                             alt="UAW4123 Seal"
                                        />
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
                                        <h3>Elected to the Associated Student's Senate as a Senator for the College of Engineering and Computer Science</h3>
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
                                        <h6>February 2018</h6>
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
