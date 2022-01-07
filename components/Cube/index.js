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
	const refs = [front, right, back, left];

	useEffect(() => {
		window.onresize = () => {
			setTransitions();
		};
		window.onload = () => {
			setTransitions();
		};
		setTransitions();

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

		cube.current.style.height = `${tallest + 48}px`;
	}

	return (
		<>
			<Wrapper ref={cube}>
				{data.works.map((work, index) => {
					if (index >= 4) return null;

					return (
						<Section ref={refs[index]} key={index}>
							<Content>
								<Image width={800} height={400} src={work.image} alt='' />

								<h4>{work.name}</h4>

								<p>{work.desc}</p>
								<p>
									Built with:&nbsp;{' '}
									{work.langs.map((lang, index) => {
										if (index === work.langs.length - 1) {
											return lang;
										} else {
											return lang + ', ';
										}
									})}
								</p>
								<a href={work.link} target='_blank' rel='noreferrer'>
									<Button text='Visit' />
								</a>
							</Content>
						</Section>
					);
				})}
			</Wrapper>
		</>
	);
};

export default Window;
