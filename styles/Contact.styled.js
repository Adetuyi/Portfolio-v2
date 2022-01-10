import styled from 'styled-components';

export const Wrapper = styled.article`
	p {
		margin: 0 0 1em;
	}
	.loading {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 5px solid #333333;
		border-top: 5px solid #aaa;
		margin-left: 4em;
		animation: rotate 1.8s linear infinite;

		@keyframes rotate {
			to {
				transform: rotate(360deg);
			}
		}
	}
	.group {
		display: flex;

		form {
			flex-basis: 80%;
		}
		.bot {
			position: relative;
			text-align: center;

			.feedback {
				position: absolute;
				text-align: left;
				right: 0;
				top: 0px;
				transition: 0.5s;
				transform: translateY(-50%);
				opacity: 0;
				width: 220px;
				padding: 1em;
				font-size: 1.2rem;
				border-radius: 10px;
				background: #000;
				font-weight: 300;

				::before,
				::after {
					content: '';
					position: absolute;
					top: 100%;
					left: 20%;
					transform: translateX(-50%);
					border: 25px solid var(--bgClr);
					border-top: 25px solid black;
				}
				::after {
					left: 13%;
					width: 30px;
					height: 30px;
					border: none;
					background: var(--bgClr);
				}
			}

			.feedback.active {
				opacity: 1;
				transform: translateY(-100%);
			}
		}

		@media (max-width: 768px) {
			flex-direction: column;

			.bot .feedback.active {
				transform: translateY(-50%);
			}

			img {
				height: 300px !important;
			}
		}

		@media (max-width: 600px) {
			.bot .feedback.active {
				transform: translateY(-80%);
			}
		}
		@media (max-width: 400px) {
			.bot .feedback.feedback {
				::before {
					left: 70%;
				}
				::after {
					left: 63%;
				}
			}
		}
	}
`;

export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0.6em;
	max-width: 800px;
	height: fit-content;

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
			background-color: #2b2b2b;
			border: none;
			outline: none;
			width: 100%;
			padding: 15px 30px;
			color: #fff;
			font-size: 1.2rem;
			border-bottom: 1px solid transparent;
			resize: vertical;

			@media (max-width: 425px) {
				padding: 7px 20px;
				font-size: 1.1rem;
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
		width: 180px;
	}
`;
