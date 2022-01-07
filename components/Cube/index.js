import React, { useEffect, useRef } from 'react';
import { Content, Section, Wrapper } from './Cube.styled';
import Image from 'next/image';
import Button from '../Button';
import data from '../../utils/data';

const Window = ({ rotation }) => {
	const front = useRef(null);
	const back = useRef(null);
	const left = useRef(null);
	const right = useRef(null);
	const cube = useRef(null);

	useEffect(() => {
		window.onresize = () => {
			setTransitions();
		};
		window.onload = () => {
			setTransitions();
		};

		return () => {
			window.onresize = window.onload = null;
		};
	}, []);
	useEffect(() => {
		cube.current.style.transform = `rotateY(${rotation}deg)`;
	}, [rotation]);

	function setTransitions() {
		const offset = cube.current.offsetWidth / 2;
		front.current.style.transform = `translateZ(${offset}px)`;
		back.current.style.transform = `translateZ(${offset * -1}px) rotateY(180deg)`;
		left.current.style.transform = `translateX(${offset * -1}px) rotateY(-90deg)`;
		right.current.style.transform = `translateX(${offset}px) rotateY(90deg)`;

		//Get largest height
		const fHght = front.current.children[0].offsetHeight;
		const bHght = back.current.children[0].offsetHeight;
		const lHght = left.current.children[0].offsetHeight;
		const rHght = right.current.children[0].offsetHeight;

		let tallest = fHght;

		if (bHght > fHght) {
			tallest = bHght;
		}
		if (lHght > bHght) {
			tallest = lHght;
		}
		if (rHght > lHght) {
			tallest = rHght;
		}

		cube.current.style.height = `${tallest + 50}px`;
	}

	return (
		<>
			<Wrapper ref={cube}>
				<Section className='front' ref={front}>
					<Content>
						<Image width={800} height={400} src={data.works[0].image} alt='' />

						<h4>{data.works[0].name}</h4>

						<p>{data.works[0].desc}</p>
						<p>
							Built with:&nbsp;{' '}
							{data.works[0].langs.map((lang, index) => {
								if (index === data.works[1].langs.length - 1) {
									return lang;
								} else {
									return lang + ', ';
								}
							})}
						</p>
						<a href={data.works[0].link} target='_blank' rel='noreferrer'>
							<Button text='Visit' />
						</a>
					</Content>
				</Section>
				<Section className='back' ref={back}>
					<Content>
						<Image width={800} height={400} src={data.works[1].image} alt='' />

						<h4>{data.works[1].name}</h4>

						<p>{data.works[1].desc}</p>
						<p>
							Built with:&nbsp;{' '}
							{data.works[1].langs.map((lang, index) => {
								if (index === data.works[1].langs.length - 1) {
									return lang;
								} else {
									return lang + ', ';
								}
							})}
						</p>
						<a href={data.works[1].link} target='_blank' rel='noreferrer'>
							<Button text='Visit' />
						</a>
					</Content>
				</Section>
				<Section className='left' ref={left}>
					<Content>
						<Image width={800} height={400} src={data.works[2].image} alt='' />

						<h4>{data.works[2].name}</h4>

						<p>{data.works[2].desc}</p>
						<p>
							Built with:&nbsp;{' '}
							{data.works[2].langs.map((lang, index) => {
								if (index === data.works[1].langs.length - 1) {
									return lang;
								} else {
									return lang + ', ';
								}
							})}
						</p>
						<a href={data.works[2].link} target='_blank' rel='noreferrer'>
							<Button text='Visit' />
						</a>
					</Content>
				</Section>
				<Section className='right' ref={right}>
					<Content>
						<Image width={800} height={400} src={data.works[3].image} alt='' />

						<h4>{data.works[3].name}</h4>

						<p>{data.works[3].desc}</p>
						<p>
							Built with:&nbsp;{' '}
							{data.works[3].langs.map((lang, index) => {
								if (index === data.works[1].langs.length - 1) {
									return lang;
								} else {
									return lang + ', ';
								}
							})}
						</p>
						<a href={data.works[3].link} target='_blank' rel='noreferrer'>
							<Button text='Visit' />
						</a>
					</Content>
				</Section>
			</Wrapper>
		</>
	);
};

export default Window;
