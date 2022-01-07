import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Button from '../Button';
import { Wrapper } from './HeroImage.styled';

const HeroImage = ({ heroRef }) => {
	useEffect(() => {
		document.querySelector('.hero-image').addEventListener('mousemove', parallax);
	}, []);

	function parallax(e) {
		this.querySelectorAll('.layer').forEach(layer => {
			const speed = layer.getAttribute('data-speed');
			const x = (window.innerWidth - e.pageX * speed) / 100;
			const y = (window.innerWidth - e.pageY * speed) / 100;

			layer.style.transform = `translate(${x}px, ${y}px)`;
		});
	}
	return (
		<Wrapper className='hero-image contained' ref={heroRef}>
			<div className='parallax'>
				<img src='/imgs/parallax/1.png' data-speed='-1' className='layer' alt='' />
				<img src='/imgs/parallax/2.png' data-speed='-2' className='layer' alt='' />
				<img src='/imgs/parallax/3.png' data-speed='-2' className='layer' alt='' />
				<img src='/imgs/parallax/4.png' data-speed='-2' className='layer' alt='' />
				<img src='/imgs/parallax/5.png' data-speed='1' className='layer' alt='' />
				<img src='/imgs/parallax/6.png' data-speed='3' className='layer' alt='' />
				<img src='/imgs/parallax/7.png' data-speed='-1' className='layer' alt='' />
				<img src='/imgs/parallax/8.png' data-speed='-2' className='layer' alt='' />
				<img src='/imgs/parallax/9.png' data-speed='-1' className='layer' alt='' />
				<img src='/imgs/parallax/10.png' data-speed='2' className='layer' alt='' />
				<img src='/imgs/parallax/12.png' data-speed='-1' className='layer' alt='' />
			</div>
			<section>
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
					<Image width={300} height={300} src='/imgs/avatar.jfif' alt='' />
				</div>
			</section>
			<p>Welcome to my website</p>
		</Wrapper>
	);
};

export default HeroImage;
