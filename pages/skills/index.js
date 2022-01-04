import React, { useEffect, useState } from 'react';
import { callbackFuncTwo } from '../../utils/IntersectionObserver';
import Navbar from '../../components/Navbar';
import { Wrapper } from '../../styles/Skills.styled';
import Image from 'next/image';

const Skills = () => {
	const [bars, setBars] = useState([]);
	useEffect(() => setBars(document.querySelectorAll('.bar')), []);

	useEffect(() => {
		//Bar Observer
		const observer = new IntersectionObserver(callbackFuncTwo, {
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
				<h4>Technologies</h4>
				<article className='technologies'>
					<div>
						<Image width={50} height={50} src='/svgs/html5.svg' alt='' />
						<p>HTML</p>
					</div>
					<div>
						<Image width={50} height={50} src='/svgs/css3.svg' alt='' />
						<p>CSS</p>
					</div>
					<div>
						<Image width={50} height={50} src='/svgs/bootstrap.svg' alt='' />
						<p>Bootstrap</p>
					</div>
					<div>
						<Image width={50} height={50} src='/svgs/js.svg' alt='' />
						<p>Javascript</p>
					</div>
					<div>
						<Image width={50} height={50} src='/svgs/react.svg' alt='' />
						<p>React</p>
					</div>
					<div>
						<Image width={50} height={50} src='/svgs/next-js.svg' alt='' />
						<p>Next Js</p>
					</div>
					<div>
						<Image width={50} height={50} src='/svgs/php.svg' alt='' />
						<p>PHP</p>
					</div>
					<div>
						<Image width={50} height={50} src='/svgs/mysql.svg' alt='' />
						<p>MySql</p>
					</div>
					<div>
						<Image width={50} height={50} src='/svgs/c.svg' alt='' />
						<p>C</p>
					</div>
				</article>

				<h3>Quirks</h3>
				<div className='quirks'>
					<div>
						<label>Responsive Design</label>
						<span>Creating responsive sites across all screen sizes</span>
					</div>
					<div>
						<label>Problem Solving</label>
						<span>Solve problems cleanly and efficiently</span>
					</div>
					<div>
						<label>Fast learner</label>
						<span>
							Fast rate of learning new skills enabling easier and faster adaptation
						</span>
					</div>
					<div>
						<label>Versatile</label>
						<span>High flexibilty and competence</span>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default Skills;
