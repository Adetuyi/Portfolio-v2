import styled from 'styled-components';

export const Wrapper = styled.article`
	padding: 3em 2em 1em;
	p {
		max-width: 800px;
		margin-bottom: 1em;
	}
`;

export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1em 1em;
	max-width: 1000px;

	section {
		width: 100%;
		position: relative;
		overflow: hidden;

		::before {
			content: '';
			transform: translateX(-101%);
			transition: transform 0.5s;
			position: absolute;
			inset: 0;
			border-bottom: 3px solid var(--terClr);
		}
		:focus-within::before {
			transform: translateX(0);
		}

		input,
		textarea {
			background-color: hsl(0, 0%, 13%);
			border: none;
			outline: none;
			width: 100%;
			padding: 10px 30px;
			color: #fff;
			font-size: 1.2rem;
			border-bottom: 1px solid transparent;
			resize: vertical;

			@media (max-width: 425px) {
				padding: 7px 10px;
			}
		}
		textarea {
			overflow: -moz-scrollbars-none;
			-ms-overflow-style: none;

			::-webkit-scrollbar {
				display: none;
			}
		}
	}

	.full {
		grid-column: 1 / 3;
	}

	label {
		display: block;
		font-size: 1.2rem;
		margin-bottom: 0.2em;
	}
	button {
		display: inline-block;
		grid-column: 1 / 3;
		width: 180px;
		height: 50px;
		font-size: 1.5rem;
		background: var(--secClr);
		color: #fff;
		font-weight: 600;
		border: none;
		cursor: pointer;
	}
`;
