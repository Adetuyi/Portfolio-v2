import styled from 'styled-components';

export const Wrapper = styled.header`
	position: fixed;
	top: 0;
	z-index: 2;
	width: 100%;

	> a {
		color: #fff;
		text-decoration: none;
		background: var(--secClr);
		padding: 0.5em 1em;
		border-radius: 0 0 3px;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-70px);
		transition: 0.5s;

		:focus,
		:hover {
			transform: translateY(0);
		}
	}

	nav {
		background: var(--mainClr);
		transition: background 0.5s;

		.contained {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 2em;
			position: relative;

			> a {
				cursor: pointer;
			}
		}
		section {
			height: max-content;
		}
		.contained > a > svg {
			width: 1.2em;
			height: 2.4em;
		}

		a {
			color: #fff;
			text-decoration: none;
			padding: 0.3em 0.6em;
			margin: 0 0.4em;
			cursor: pointer;

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
				width: 18px;
			}

			.close {
				width: 15px;
			}

			path {
				stroke: white;
			}
		}
	}
	nav.bg-light {
		background: hsl(0, 0%, 15%);
		box-shadow: 0 0 5px rgba(0 0 0 / 0.1);
	}
	@media (max-width: 768px) {
		nav button {
			display: inline-block;
		}
		section {
			background: hsl(0, 0%, 15%);
			position: absolute;
			top: calc(100% + 1px);
			left: 50%;
			transform: translateX(-50%);
			width: 500px;
			max-width: calc(100% - 4rem);
			border-radius: 4px;
			box-shadow: 0 1px 5px rgba(0 0 0 / 0.4);
		}
		section.inactive {
			display: none;
		}
		section a {
			display: block;
			text-align: center;
		}
	}
`;
