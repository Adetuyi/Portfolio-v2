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
				<section>
					<article>
						<h2>Skills</h2>
						<p>
							I create successful responsive websites that are fast, easy to use, and
							built with best practices. The main area of my expertise is front-end
							development, HTML, CSS, JS, building small and medium web apps,
							animations, and interactive layouts.
						</p>
						<p>
							I also have back-end developer experience with PHP, MySql and C. Visit
							my{' '}
							<a
								href='https://www.linkedin.com/in/seyi-adetuyi-054b56206/'
								target='_blank'
								rel='noreferrer'
							>
								LinkedIn profile
							</a>{' '}
							for more details or <a href='#contact'>contact me</a>.
						</p>
					</article>
					<div className='skills'>
						<label htmlFor='frontend bar'>Front-end</label>
						<div className='fbar bar'></div>

						<label htmlFor='backend bar'>Back-end</label>
						<div className='bbar bar'></div>
					</div>
				</section>

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
							<Image width={50} height={50} src={lang.img} alt='' />
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
