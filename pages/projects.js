import React from 'react';
import Navbar from '../components/Navbar';
import Socials from '../components/Socials';
import Button from '../components/Button';
import { Card, Wrapper } from '../styles/Works.styled';
import Image from 'next/image';
import data from '../utils/data';
import Link from 'next/link';

const Projects = () => {
	return (
		<>
			<Navbar />
			<Wrapper>
				<h1>Projects</h1>
				<br />
				<div className="worksCon">
					{data.works.map((work) => (
						<div className="scene" key={work.name}>
							<Card>
								<div className="front" style={{ backgroundImage: `url(${work.mImage || work.image})` }}>
									<div className="bottom">
										<h2>{work.name}</h2>

										<div className="buttons">
											<Link href={work.link}>
												<a target="_blank" rel="noreferrer">
													<Button text="Visit" />
												</a>
											</Link>
											<button
												onClick={(e) => {
													e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle(
														'flipped'
													);
												}}
												className="flipBtn"
											>
												Flip
											</button>
										</div>
									</div>
								</div>
								<div className="back">
									<h2>{work.name}</h2>
									<p>{work.desc}</p>
									<Link href={work.link}>
										<a target="_blank" rel="noreferrer">
											<Button text="Visit" active={true} />
										</a>
									</Link>
									<div className="langs">
										{work.langs.map((lang, index) => {
											if (index === work.langs.length - 1) {
												return lang;
											} else {
												return lang + ', ';
											}
										})}
									</div>
									<button
										onClick={(e) => {
											e.target.parentElement.parentElement.classList.toggle('flipped');
										}}
										className="flipBtn"
									>
										Flip
									</button>
								</div>
							</Card>
						</div>
					))}
				</div>
			</Wrapper>
			<Socials />
		</>
	);
};

export default Projects;
