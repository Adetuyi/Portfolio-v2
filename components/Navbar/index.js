import Link from 'next/link';
import React, { useState } from 'react';
import { close, ham, logo } from '../../utils/svgs';
import { Wrapper } from './Navbar.styled';

const Navbar = ({ navRef }) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Wrapper>
			<a href='#main-content'>Skip to main content</a>
			<nav ref={navRef}>
				<div className='contained'>
					<Link href='/'>
						<a>{logo}</a>
					</Link>
					<section className={!isVisible ? 'inactive' : null}>
						<Link href='/'>
							<a>Home</a>
						</Link>
						<Link href='/about'>
							<a>About</a>
						</Link>
						<Link href='/skills'>
							<a>Skills</a>
						</Link>
						<Link href='/projects'>
							<a>Projects</a>
						</Link>
						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</section>
					<button onClick={() => setIsVisible(!isVisible)}>
						{isVisible ? close : ham}
					</button>
				</div>
			</nav>
		</Wrapper>
	);
};

export default Navbar;
