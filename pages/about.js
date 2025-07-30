import Link from 'next/link';
import React from 'react';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Comp from '../components/Comp';
import Socials from '../components/Socials';

const about = () => {
	return (
		<>
			<br />
			<Navbar />
			<About>
				<div>
					<Comp />
					<article>
						<h2>Me, Myself & I</h2>
						<p>
							My fullname is Oluwaseyi Adetuyi, I am a Front-end developer based in Lagos. I have a passion for UI effects,
							animations, design patterns and thoughtful interactions.
						</p>

						<p>
							I love what I do. I&#39;m very versatile, I learn fast and work faster. I enjoy learning new technologies and
							solving challenging problems.
						</p>
						<p>
							I am a well-organised individual, problem solver with high attention to details. Lots of experience on web
							development. You can find some of my personal projects <Link href="/projects">here</Link>. Here&apos;s a link to
							my <a href="/files/Adetuyi-Resume.pdf">resume</a>
						</p>
						<p>
							If you have any question about my service, or just want to say hello, feel free to contact me. You can email me
							at <a href="mailto:seyispecial17@gmail.com">seyispecial17@gmail.com</a> or through the{' '}
							<Link href="/contact">contact form</Link> or message me on LinkedIn at{' '}
							<a href="https://www.linkedin.com/in/seyi-adet/" target="_blank" rel="noreferrer">
								Seyi Adetuyi
							</a>
							.
						</p>
					</article>
				</div>
			</About>
			<Socials />
		</>
	);
};

export default about;
