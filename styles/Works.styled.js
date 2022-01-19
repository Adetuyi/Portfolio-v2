import styled from 'styled-components';

export const Wrapper = styled.article`
	.worksCon {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
		gap: 2em;
	}

	.scene {
		perspective: 1200px;
		width: clamp(250px, 90%, 330px);
		height: fit-content;
		margin: 0 auto;

		.flipped {
			transform: rotateY(-180deg);
		}
	}

	@media (hover: hover) {
		.buttons,
		.flipBtn {
			display: none !important;
		}
		.scene:hover > article {
			transform: rotateY(-180deg);
		}
		.langs {
			bottom: 8px;
		}
	}
`;

export const Card = styled.article`
	position: relative;
	width: 100%;
	height: 480px;
	transform-style: preserve-3d;
	transition: 1s;

	.front,
	.back {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		border-radius: 5px;
	}
	.front {
		transform: translateZ(1px);
		background-color: var(--bgClr);
		background-position: center;
		background-size: cover;

		.bottom {
			position: absolute;
			bottom: 0;
			background: rgb(0 0 0 / 0.9);
			padding: 1em;
			width: 100%;

			h2 {
				font-size: 2rem;
				color: #fff;
				font-weight: 400;
			}

			.buttons {
				display: flex;
				justify-content: space-between;
				margin-top: 1.5em;
			}
		}
	}

	.back {
		transform: rotateY(180deg);
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1em;
		text-align: center;

		h2 {
			font-size: 2rem;
			color: #1f1f1f;
		}
		p {
			margin: 0em 0 1em;
			color: #1f1f1f;
			font-size: 1.1rem;
		}
		.langs {
			color: #1f1f1f;
			position: absolute;
			bottom: 55px;
		}

		.flipBtn {
			color: #000;
			border: 2px solid #555;
			position: absolute;
			bottom: 0;
			right: 0;
			margin: 0 0.5em 0.5em 0;
		}
	}

	.flipBtn {
		padding: 0.5em 1.5em;
		color: #fff;
		background: none;
		border: 2px solid #fff;
		border-radius: 5px;
		min-width: 80px;
		letter-spacing: 0.5px;
		font-size: 1rem;
	}
	a {
		text-decoration: none !important;
	}
`;
