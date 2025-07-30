import Link from 'next/link';
import React, { useState } from 'react';
import { close, ham, logo } from '../../utils/svgs';
import { Wrapper } from './Navbar.styled';
import Socials from '../Socials';

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Wrapper>
			<a href="#main-content">Skip to main content</a>
			<nav className="contained">
				<Link href="/">
					<a>{logo}</a>
				</Link>
				<section className={!isVisible ? 'inactive' : null}>
					<header>
						<Link href="/">
							<a>{logo}</a>
						</Link>
						<h2>Seyi</h2>
						<p>web developer</p>
					</header>
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/about">
						<a>About</a>
					</Link>
					<Link href="/skills">
						<a>Skills</a>
					</Link>
					<Link href="/projects">
						<a>Projects</a>
					</Link>
					<Link href="/contact">
						<a>Contact</a>
					</Link>

					<Socials />
				</section>
				<button onClick={() => setIsVisible(!isVisible)}>{isVisible ? close : ham}</button>
			</nav>
		</Wrapper>
	);
};

export default Navbar;
