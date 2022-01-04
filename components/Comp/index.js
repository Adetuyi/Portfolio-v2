import React from 'react';
import { Wrapper } from './Comp.styled';

const Comp = ({ compRef, isInPage }) => {
	// document.body.classList.add('dark-mode');
	return (
		<Wrapper>
			<h1 className={isInPage ? 'shine active' : 'shine'} ref={compRef}>
				Seyi Adetuyi
			</h1>
			<img src='/svgs/comp.svg' alt='' />
		</Wrapper>
	);
};

export default Comp;
