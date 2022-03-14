import styled from 'styled-components';

export const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	font-size: 1.2rem;
	width: 100%;
	background: var(--bgClr);

	> a {
		color: #fff;
		text-decoration: none;
		background: var(--secClr);
		padding: 0.5em 1em;
		border-radius: 0 0 3px;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-200px);
		transition: 0.3s;
		z-index: 100;

		:focus,
		:hover {
			transform: translateY(0);
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.6rem 2em;
		position: relative;
		height: 43px;

		a {
			cursor: pointer;
		}

		svg {
			width: 1.2em;
			height: 2em;
		}

		header {
			display: none;
			background: #1f2020;
			padding: 0 1em 2em;

			svg {
				width: 70px;
				height: 120px;
			}
			h2 {
				font-size: 1.7rem;
				color: #fff;
				text-align: center;
				margin: -1.2em 0 0.5em;
			}
			p {
				font-size: 1.1rem;
				text-align: center;
				text-transform: capitalize;
			}
		}
		.socials {
			display: none;
			position: fixed;
			bottom: 0;
			padding: 5px 5px 10px;
			width: 100%;
			text-align: center;
			background: var(--bgClr);
		}

		section a {
			color: #fff;
			text-decoration: none;
			padding: 0.3em 0.5em;
			margin: 0 0.4em;

			:hover,
			:focus {
				opacity: 0.8;
			}
		}
		button {
			background: none;
			border: none;
			outline: none;
			height: 20px;
			cursor: pointer;
			display: none;

			svg {
				width: 23px;
			}

			.close {
				width: 20px;
			}

			path {
				stroke: white;
			}
		}
	}

	@media (max-width: 768px) {
		nav {
			padding: 1.6rem 1em;

			header {
				display: block;
				text-align: center;

				a {
					display: inline-block;
				}
			}
			.socials {
				display: block;
				text-align: center;
			}
			button {
				display: inline-block;
			}
		}
		section {
			background: var(--bgClr);
			position: fixed;
			z-index: 10;
			top: 51px;
			left: 0;
			opacity: 1;
			visibility: visible;
			width: 100%;
			min-height: fit-content;
			height: calc(100% - 43px);
			overflow-y: auto;
			transition: all 0.5s;
		}
		section.inactive {
			left: 40%;
			opacity: 0;
			visibility: hidden;
		}
		section > a {
			:not(:nth-child(1)) {
				display: block;
				border-top: 1px solid #ccc2;
				text-align: center;
				line-height: 2.3em;
			}
			:nth-child(6) {
				border-bottom: 1px solid #ccc2;
				margin-bottom: 4em;
			}
			:hover,
			:focus {
				color: var(--terClr);
			}
		}
	}
`;
