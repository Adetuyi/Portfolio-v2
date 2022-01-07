import Image from 'next/image';
import React from 'react';
import { Wrapper } from './Comp.styled';

const Comp = () => {
	// document.body.classList.add('dark-mode');
	return (
		<Wrapper className='laptop'>
			<h1 className='shine active'>Seyi Adetuyi</h1>
			<Image width={500} height={500} src='/svgs/laptop.svg' alt='' />
		</Wrapper>
	);
};

export default Comp;
