import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import { Wrapper } from './HeroImage.styled';

const HeroImage = ({ heroRef }) => {
	return (
		<Wrapper className='hero-image' ref={heroRef}>
			<section className='contained'>
				<div>
					<h2 className='greetings'></h2>
					<h2 className='intro'></h2>
					<p className='profession'></p>

					<Link href='/contact'>
						<a>
							<Button text='Contact Me' />
						</a>
					</Link>
				</div>
				<div className='logo'>
					<Image width={300} height={300} src='/svgs/logo.svg' alt='' />
				</div>
			</section>
			<p>Welcome to my website</p>
		</Wrapper>
	);
};

export default HeroImage;
