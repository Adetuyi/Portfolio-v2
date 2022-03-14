import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Wrapper } from '../styles/Skills.styled';
import Image from 'next/image';
import Socials from '../components/Socials';
import data from '../utils/data';

const Skills = () => {
	return (
		<>
			<Navbar />
			<Wrapper id='skills'>
				<h2>Skills</h2>
				<div className='quirks'>
					{data.skills.quirks.map((quirk) => (
						<div key={quirk.text}>
							<label>{quirk.text}</label>
							<span>{quirk.desc}</span>
						</div>
					))}
				</div>

				<h3>Technologies</h3>
				<article className='technologies'>
					{data.skills.technologies.map((tech) => (
						<div key={tech.text}>
							<Image width={40} height={40} src={tech.img} alt='' />
							<p>{tech.text}</p>
						</div>
					))}
				</article>
			</Wrapper>
			<Socials />
		</>
	);
};

export default Skills;
