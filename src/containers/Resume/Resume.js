import React from "react";

import classes from "./Resume.module.css";
import VSCODE from "../UI/Icons/VSCODE";
import GIT from "../UI/Icons/GIT";
import CSS from "../UI/Icons/CSS";
import HTML from "../UI/Icons/HTML";
import JS from "../UI/Icons/JS";
import PG from "../UI/Icons/PG";
import RAILS from "../UI/Icons/RAILS";
import RUBY from "../UI/Icons/RUBY";
import REACT from "../UI/Icons/REACT";
import REDUX from "../UI/Icons/REDUX";
import CHROME from "../UI/Icons/CHROME";
import DOWNLOAD from "../UI/Icons/DOWNLOAD";

const Resume = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Resume}>
				<div className={classes.ResumeTop}>
					<h2>Ryan Seit Resume</h2>
					<a
						href='http://localhost:3000/Ryan_Seit_Resume.pdf'
						alt='Download Ryan Seit Resume'
						download
					>
						<DOWNLOAD />
					</a>
				</div>
				<div className={classes.ResumeLeft}>
					<div className={classes.ResumeLeft_Summary}>
						<h3>Summary</h3>
						<p>
							Full stack developer proficient in&nbsp;
							<a
								href='https://www.javascript.com/'
								target='_blank'
								rel='noopener noreferrer'
								alt='JavaScript Site'
							>
								JavaScript
							</a>
							,&nbsp;
							<a
								href='https://reactjs.org/'
								target='_blank'
								rel='noopener noreferrer'
								alt='React Site'
							>
								React
							</a>
							,&nbsp;
							<a
								href='https://redux.js.org/'
								target='_blank'
								rel='noopener noreferrer'
								alt='Redux Site'
							>
								Redux
							</a>
							,&nbsp;
							<a
								href='https://www.iso.org/standard/63555.html'
								target='_blank'
								rel='noopener noreferrer'
								alt='SQL Site'
							>
								SQL
							</a>
							,&nbsp;
							<a
								href='https://www.ruby-lang.org/en/'
								target='_blank'
								rel='noopener noreferrer'
								alt='Ruby Site'
							>
								Ruby
							</a>
							&nbsp;and&nbsp;
							<a
								href='https://rubyonrails.org/'
								target='_blank'
								rel='noopener noreferrer'
								alt='Rails Site'
							>
								Rails
							</a>
							. With over 16 years experience in the IT industry, I’ve worked
							with multiple organizations to help them achieve their goals by
							developing and executing strategies with a focus on technology.
							Balances agility with a methodical, data-driven approach to
							minimize risk and maximize efficiency. Looking forward to joining
							a mid to late-stage startup to develop applications that excite
							and inspire while expanding my frontend and backend skills.
						</p>
					</div>

					<div className={classes.ResumeLeft_Skills}>
						<h3>Software Development Skills</h3>
						<div className={classes.ResumeLeft_Skills__L}>
							<ul>
								<li>
									<a
										href='https://www.javascript.com/'
										target='_blank'
										rel='noopener noreferrer'
										alt='JavaScript Site'
									>
										<JS />
										JavaScript
									</a>
								</li>
								<li>
									<a
										href='https://reactjs.org/'
										target='_blank'
										rel='noopener noreferrer'
										alt='React Site'
									>
										<REACT />
										React
									</a>
								</li>
								<li>
									<a
										href='https://redux.js.org/'
										target='_blank'
										rel='noopener noreferrer'
										alt='Redux Site'
									>
										<REDUX />
										Redux
									</a>
								</li>
								<li>
									<a
										href='https://rubyonrails.org/'
										target='_blank'
										rel='noopener noreferrer'
										alt='Rails Site'
									>
										<RAILS />
										Rails
									</a>
								</li>
								<li>
									<a
										href='https://www.ruby-lang.org/en/'
										target='_blank'
										rel='noopener noreferrer'
										alt='Ruby Site'
									>
										<RUBY />
										Ruby
									</a>
								</li>
							</ul>
						</div>
						<div className={classes.ResumeLeft_Skills__R}>
							<ul>
								<li>
									<a
										href='https://html.spec.whatwg.org/'
										target='_blank'
										rel='noopener noreferrer'
										alt='HTML 5 Site'
									>
										<HTML />
										HTML
									</a>
								</li>
								<li>
									<a
										href='https://www.w3.org/Style/CSS/'
										target='_blank'
										rel='noopener noreferrer'
										alt='CSS Site'
									>
										<CSS />
										CSS
									</a>
								</li>
								<li>
									<a
										href='https://code.visualstudio.com/'
										target='_blank'
										rel='noopener noreferrer'
										alt='Microsoft Visual Studio Code Site'
									>
										<VSCODE />
										Visual Studio Code
									</a>
								</li>
								<li>
									<a
										href='https://git-scm.com/'
										target='_blank'
										rel='noopener noreferrer'
										alt='Git Site'
									>
										<GIT />
										Git
									</a>
								</li>
								<li>
									<a
										href='https://www.postgresql.org/'
										target='_blank'
										rel='noopener noreferrer'
										alt='PostgreSQL Site'
									>
										<PG />
										PostgreSQL
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className={classes.ResumeLeft_Recognition}>
						<h3>Professional Recognition</h3>
						<ul>
							<li>
								<a
									href='https://youtu.be/ehSm2eVTNQM'
									target='_blank'
									rel='noopener noreferrer'
									alt='Google Next 2019
							G Suite Security Panel Link'
								>
									<h4>Google Next 2019 G Suite Security Panel</h4>
								</a>
								<iframe
									title='Google Next 2019 G Suite Security Panel'
									width='560'
									height='340'
									src='https://www.youtube.com/embed/ehSm2eVTNQM'
									frameborder='0'
									allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							</li>
							<li>
								<a
									href='https://www.youtube.com/watch?v=DJi7i1Blf04'
									target='_blank'
									rel='noopener noreferrer'
									alt='Google Next 2018
							G Suite Security Panel Link'
								>
									<h4>Google Next 2018 G Suite Security Panel</h4>
								</a>
								<iframe
									title='Google Next 2018 G Suite Security Panel'
									width='560'
									height='340'
									src='https://www.youtube.com/embed/DJi7i1Blf04'
									frameborder='0'
									allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							</li>
							<li>
								<a
									href='https://anchor.fm/itkit/episodes/Ryan-Seit--Director-IT--Casper-e3v58h'
									target='_blank'
									rel='noopener noreferrer'
									alt='IT Kit Podcast Link'
								>
									<h4>IT Kit Podcast 2019</h4>
								</a>
								<iframe
									title='IT Kit Podcast 2019'
									src='https://anchor.fm/itkit/embed/episodes/IT-Kit-1--Ryan-Seit--Casper-e3v58h/a-aegm9a'
									height='140px'
									width='560px'
									frameborder='0'
									scrolling='no'
								></iframe>
							</li>
						</ul>
					</div>
				</div>
				<div className={classes.ResumeRight}>
					<div className={classes.ResumeRight_Experience}>
						<h3>Professional Experience</h3>
						<h4>IT Director</h4>
						<div className={classes.ResumeRight__Company_Dates}>
							<h5>
								Casper Sleep Inc
								<a
									href='https://www.casper.com'
									target='_blank'
									rel='noopener noreferrer'
									alt='Casper Sleep Website'
								>
									<CHROME />
								</a>
							</h5>

							<h6>February 2016 - December 2019</h6>
						</div>
						<ul>
							<li>Founding member of IT team, reporting directly to the CTO</li>
							<li>
								Lead the development of global IT support and operations
								processes for corporate and retail business sectors (5 corporate
								offices and 60+ retail locations, achieving an IT support CSAT
								score of 96%)
							</li>
							<li>
								Managed over 50 IT vendor relationships, including sourcing,
								contract negotiations and performance evaluations
							</li>
							<li>
								Developed and managed annual company-wide IT budget of over $3M
							</li>
							<li>
								Lead the development and execution of IT hiring and onboarding
								strategies, resulting in a 30% reduction of onboarding time and
								a clear expectation of responsibilities for each hire
							</li>
							<li>
								Managed a diverse team of 8 people located on both east and west
								coasts, developed individualized career growth plans resulting
								in high performance and retention
							</li>
							<li>
								Identified and implemented over 100 scalable, cloud-based
								solutions to facilitate rapid company growth from 70 to 800+
								employees within a 4 year period
							</li>
							<li>
								Successfully lead the build out and IT operations of 60+ retail
								locations across North America between 2018-19, generating $2 -
								5M in revenue per location while simultaneously managing
								multiple high-priority projects
							</li>
							<li>
								Reduced retail location procurement and build lead times by 30%
								and capital expenditures by 20% as a result of vendor
								negotiations and process improvements
							</li>
							<li>
								Collaborated with both internal and external teams to
								achieve&nbsp;
								<a
									href='https://gdpr-info.eu/'
									target='_blank'
									rel='noopener noreferrer'
									alt='GDPR Site'
								>
									GDPR
								</a>
								&nbsp;compliance, prepare for company IPO (
								<a
									href='https://www.pcisecuritystandards.org/'
									target='_blank'
									rel='noopener noreferrer'
									alt='PCI Security Standards Council Site'
								>
									PCI
								</a>
								,&nbsp;
								<a
									href='https://uslaw.link/citation/us-law/public/107/204'
									target='_blank'
									rel='noopener noreferrer'
									alt='Sarbanes-Oxley Act of 2002 USLaw Site'
								>
									SOX
								</a>
								&nbsp;regulations and audits)
							</li>
							<li>
								Created and implemented company-wide onboarding processes across
								corporate and retail sectors, resulting in a 50% reduction in
								support requests for new employees
							</li>
							<li>Earned 3 promotions over a 4 year period</li>
							<li>
								Recognized both internally and externally as an IT thought
								leader, receiving multiple company awards and spoke at industry
								conferences (
								<a
									href='https://www.google.com/'
									target='_blank'
									rel='noopener noreferrer'
									alt='Google Site'
								>
									Google
								</a>
								,&nbsp;
								<a
									href='https://www.okta.com/'
									target='_blank'
									rel='noopener noreferrer'
									alt='Okta Site'
								>
									Okta
								</a>
								,&nbsp;
								<a
									href='https://itkit.io/'
									target='_blank'
									rel='noopener noreferrer'
									alt='ITKit Site'
								>
									ITKit
								</a>
								,&nbsp;
								<a
									href='https://www.bettercloud.com/'
									target='_blank'
									rel='noopener noreferrer'
									alt='BetterCloud Site'
								>
									BetterCloud
								</a>
								)
							</li>
						</ul>
						<h4>Software Engineering</h4>
						<div className={classes.ResumeRight__Company_Dates}>
							<h5>
								Flatiron School
								<a
									href='https://flatironschool.com/'
									target='_blank'
									rel='noopener noreferrer'
									alt='The Flatiron School Website'
								>
									<CHROME />
								</a>
							</h5>
							<h6>February 2020 - June 2020</h6>
						</div>
						<ul>
							<li>
								Focus on both frontend and backend development disciplines
							</li>
							<li>
								Created UI/UX design wireframes in Sketch, Figma, Miro and
								translated them to actual code
							</li>
							<li>
								Collaborated with team and project managers to ensure
								deliverables were met on time using Trello, PivotalTracker
							</li>
							<li>
								Developed applications using JavaScript, React, Redux, Ruby,
								Rails, Sinatra, SQLite, PostgreSQL, HTML, CSS{" "}
							</li>
							<li>
								Built custom APIs using Ruby on Rails, integrated external APIs
								with custom applications
							</li>
						</ul>
						<h4>Founder</h4>
						<div className={classes.ResumeRight__Company_Dates}>
							<h5>Special Blend Inc</h5>
							<h6>May 2006 - Present</h6>
						</div>
						<ul>
							<li>
								Provide individualized IT direction and support for over 25
								clients in industries such as design studios, architectural
								firms, museums, publishing and retail companies
							</li>
							<li>
								Source and manage vendors and subcontractors in order to
								facilitate completion of small and large-scale projects
							</li>
						</ul>
					</div>
					<div className={classes.ResumeRight_Education}>
						<h3>Education</h3>
						<h4>Software Engineering</h4>
						<div className={classes.ResumeRight__Company_Dates}>
							<h5>Flatiron School</h5>
							<h6>February 2020 - June 2020</h6>
						</div>
						<h4>Systems Engineering and Network Administration</h4>
						<div className={classes.ResumeRight__Company_Dates}>
							<h5>Computer Career Center</h5>
							<h6>August 2000 - September 2001</h6>
						</div>
					</div>
				</div>

				{/* <img src={Ryan_Seit_Resume} target="_blank"  rel="noopener noreferrer" alt='Ryan Seit Resume' /> */}
				{/* <p>Resume download link</p> */}
			</div>
		</div>
	);
};

export default Resume;
