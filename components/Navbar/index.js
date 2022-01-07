import Link from 'next/link';
import React, { useState } from 'react';
import { close, ham, logo } from '../../utils/svgs';
import { Wrapper } from './Navbar.styled';

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Wrapper>
			<a href='#main-content'>Skip to main content</a>
			<nav className='contained'>
				<Link href='/'>
					<a>{logo}</a>
				</Link>
				<section className={!isVisible ? 'inactive' : null}>
					<header>
						<Link href='/'>
							<a>{logo}</a>
						</Link>
						<h2>Seyi</h2>
						<p>web developer</p>
					</header>
					<Link href='/'>
						<a>Home</a>
					</Link>
					<Link href='/about'>
						<a>About</a>
					</Link>
					<Link href='/skills'>
						<a>Skills</a>
					</Link>
					<Link href='/works'>
						<a>Works</a>
					</Link>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>

					<div className='socials'>
						<a
							href='https://twitter.com/Seyi50629405?t=1OeG9ZDJZtzoKeeW2vc4bA&s=09'
							target='_blank'
							rel='noreferrer'
						>
							<i className='fa-brands fa-twitter'></i>
						</a>
						<a
							href='https://www.linkedin.com/in/seyi-adetuyi-054b56206'
							target='_blank'
							rel='noreferrer'
						>
							<i className='fa-brands fa-linkedin-in'></i>
						</a>
						<a
							href='https://mail.google.com/mail/?view=cm&fs=1&to=seyispecial17@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							<i className='fa-solid fa-envelope-open-text'></i>
						</a>
						<a href='http://github.com/Adetuyi' target='_blank' rel='noreferrer'>
							<i className='fa-brands fa-github'></i>
						</a>
					</div>
				</section>
				<button onClick={() => setIsVisible(!isVisible)}>{isVisible ? close : ham}</button>
			</nav>
		</Wrapper>
	);
};

export default Navbar;
