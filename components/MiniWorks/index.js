import Link from 'next/link';
import React, { useState } from 'react';
import { Wrapper } from './MiniWorks.styled';
import Cube from '../Cube';
import Button from '../Button';

const MiniWorks = () => {
	const [rotation, setRotation] = useState(0);
	return (
		<Wrapper>
			<h2>My Portfolio</h2>
			<p>
				A small gallery of recent projects. Interested in seeing some more ? Visit my{' '}
				<Link href="/projects">
					<a>projects</a>
				</Link>{' '}
				page.
			</p>
			<Link href="/projects">
				<a>
					<Button text="See More" />
				</a>
			</Link>
			<hr />
			<div className="cube">
				<Cube rotation={rotation} />

				<button onClick={() => setRotation(rotation - 90)}>
					<i className="fas fa-angle-right"></i>
				</button>
				<button onClick={() => setRotation(rotation + 90)}>
					<i className="fas fa-angle-left"></i>
				</button>
			</div>
			<hr />
		</Wrapper>
	);
};

export default MiniWorks;
