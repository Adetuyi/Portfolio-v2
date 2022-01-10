import styled from 'styled-components';

export const Wrapper = styled.section`
	width: clamp(300px, 95%, 800px);
	height: 600px;
	position: relative;
	transform-style: preserve-3d;
	margin: 0 auto;
	transition: transform 0.8s cubic-bezier(0.46, 0.02, 0.19, 1.24);
`;
export const Section = styled.section`
	width: 100%;
	height: 100%;
	position: absolute;
	background: var(--bgClr);
`;

export const Content = styled.div`
	img {
		object-fit: cover;
		object-position: center;
	}
	h4 {
		margin: 0.5em 0 1em;
	}
	p {
		padding: 0 0 1em;
	}
	a {
		text-decoration: none !important;
		display: inline-block;
	}
`;
