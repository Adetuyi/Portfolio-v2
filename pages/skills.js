import React, { useEffect, useState } from 'react';
import { callbackFunc } from '../utils/IntersectionObserver';
import Navbar from '../components/Navbar';
import { Wrapper } from '../styles/Skills.styled';
import Image from 'next/image';
import Socials from '../components/Socials';
import data from '../utils/data';

const Skills = () => {
	const [bars, setBars] = useState([]);
	useEffect(() => setBars(document.querySelectorAll('.bar')), []);

	useEffect(() => {
		//Bar Observer
		const observer = new IntersectionObserver(callbackFunc, {
			threshold: 1,
			rootMargin: '0px 0px -300px 0px',
		});

		if (bars.length > 0) {
			bars.forEach(bar => observer.observe(bar));
		}

		return () => bars.forEach(bar => observer.unobserve(bar));
	}, [bars]);
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
