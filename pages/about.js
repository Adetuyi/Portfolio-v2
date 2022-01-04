import Link from 'next/link';
import React from 'react';
import About from '../components/About';
import Navbar from '../components/Navbar';

const about = () => {
	return (
		<>
			<br />
			<Navbar />
			<About isInPage={true}>
				<article>
					<h2>Me, Myself & I</h2>
					<p>
						My name is Seyi Adetuyi, I am a front-end developer based in Lagos. I have a
						passion for UI effects, animations, design patterns and thoughtful
						interactions.
					</p>

					<p>
						I love what I do. Im versatile, learn fast and work faster. I enjoy learning
						new technologies and solving challenging problems.
					</p>
					<p>
						I am a well-organised individual, problem solver with high attention to
						details. Lots of experience on web development. Most of my projects are
						personal projects. You can find some <Link href='/projects'>here</Link>.
					</p>
					<p>
						If you have any question about my service, or just want to say hello, feel
						free to contact me. You can email me at{' '}
						<a href='mailto:seyispecial17@gmail.com'>seyispecial17@gmail.com</a> or
						through the <Link href='/contact'>contact form</Link> or message me on
						linkedIn at{' '}
						<a
							href='https://www.linkedin.com/in/seyi-adetuyi-054b56206/'
							target='_blank'
							rel='noreferrer'
						>
							Seyi Adetuyi
						</a>
						.
					</p>
				</article>
			</About>
		</>
	);
};

export default about;
