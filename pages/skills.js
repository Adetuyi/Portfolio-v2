import React, { useEffect, useState } from 'react';
import { callbackFunc } from '../utils/IntersectionObserver';
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

				<h3>Quirks</h3>
				<div className='quirks'>
					{data.skills.quirks.map(quirk => (
						<div key={quirk.text}>
							<label>{quirk.text}</label>
							<span>{quirk.desc}</span>
						</div>
					))}
				</div>

				<h4>Technologies</h4>
				<article className='technologies'>
					{data.skills.languages.map(lang => (
						<div key={lang}>
							<Image width={40} height={40} src={lang.img} alt='' />
							<p>{lang.text}</p>
						</div>
					))}
				</article>
			</Wrapper>
			<Socials />
		</>
	);
};

export default Skills;
