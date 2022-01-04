import React from 'react';
import { Wrapper } from './About.styled';
import Comp from '../../components/Comp';

const About = ({ compRef, isInPage, children }) => {
	return (
		<Wrapper id='about'>
			<div id='main-content'>
				{<Comp compRef={compRef} isInPage={isInPage} />}
				{children}
			</div>
		</Wrapper>
	);
};

export default About;
