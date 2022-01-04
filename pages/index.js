import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import About from '../components/About';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import { callbackFunc, callbackFuncTwo } from '../utils/IntersectionObserver';

export default function Home() {
	const heroRef = useRef();
	const navRef = useRef();
	const compRef = useRef();

	useEffect(() => {
		const targetRef = heroRef.current;

		//Navbar Observer
		const observer = new IntersectionObserver(entries => callbackFunc(entries, navRef), {
			rootMargin: '-100px 0px 0px 0px',
		});

		//Computer Observer
		const observerTwo = new IntersectionObserver(callbackFuncTwo, {
			threshold: 1,
			rootMargin: '0px 0px -200px 0px',
		});

		if (targetRef) observer.observe(targetRef);

		if (compRef.current) observerTwo.observe(compRef.current);

		return () => observer.unobserve(targetRef);
	}, [heroRef, compRef]);

	return (
		<>
			<Navbar navRef={navRef} />
			<HeroImage heroRef={heroRef} />
			<About compRef={compRef}>
				<article>
					<h2>Who am I ?</h2>

					<p>
						I am an experienced web developer, doing mainly front-end. I have a
						curiosity about new technologies and a constant desire to learn new things
						and perfect them as much as possible.
					</p>
					<p>
						Programming is a fun and exciting concept to me. You can{' '}
						<Link href='/about'>read more</Link> about me or look up some of{' '}
						<Link href='/projects'>my works</Link>.
					</p>
					<p>
						Wanna talk ? You can email me at{' '}
						<a href='mailto:seyispecial17@gmail.com'>seyispecial17@gmail.com</a> or
						message me on linkedIn at{' '}
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
}
