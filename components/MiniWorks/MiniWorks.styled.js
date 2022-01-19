import styled from 'styled-components';

export const Wrapper = styled.article`
	perspective: 10000px;

	.cube {
		position: relative;
		max-width: 900px;
		margin: 3em auto;

		> button {
			position: absolute;
			top: 50%;
			transform: translateY(calc(-50% - 110px));
			font-size: 2rem;
			padding: 0 0.3em;
			background: rgb(0 0 0 / 0.6);
			border-radius: 5px;
			color: #fff;
			border: 0;
			cursor: pointer;

			:hover,
			:focus {
				opacity: 0.8;
			}
		}
		button:nth-child(2) {
			right: 0;
		}
	}

	> a {
		display: inline-block;
		width: fit-content;
		text-decoration: none !important;
		margin: 1em 0 3em;
	}
`;
