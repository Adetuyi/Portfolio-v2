import React from 'react';
import { Wrapper } from './About.styled';

const About = ({ children }) => {
	return (
		<Wrapper>
			<section id='main-content'>{children}</section>
		</Wrapper>
	);
};

export default About;
