import React from 'react';
import { Wrapper } from './HeroImage.styled';

const HeroImage = ({ heroRef }) => {
	return (
		<Wrapper className='hero-image' ref={heroRef}>
			<section className='contained'>
				<div>
					<h2 className='greetings'></h2>
					<h2 className='intro'></h2>
					<p className='profession'></p>

					<a href='#contact'>Contact Me</a>
				</div>
				<img src='/svgs/logo.svg' alt='' />
			</section>
			<p>Welcome to my website</p>
		</Wrapper>
	);
};

export default HeroImage;
