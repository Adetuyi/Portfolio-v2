import styled from 'styled-components';

export const Wrapper = styled.article`
	padding: 0 1em;

	> section {
		display: flex;
		align-items: center;
		gap: 1em 2em;

		article {
			flex-basis: 50%;
			padding: 0;
			margin: 0;
		}

		@media (max-width: 1024px) {
			flex-direction: column;

			.skills {
				width: 100%;
			}
		}
	}

	.skills {
		flex-basis: 50%;

		label {
			display: inline-block;
			font-size: 1.3rem;
			padding: 0.8em 0 0.3em;
		}
		.bar {
			width: 100%;
			height: 4px;
			max-width: 800px;
			border-radius: 5px;
			background: grey;
			position: relative;
			overflow: hidden;
		}
		.bar::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			transform: translateX(-100%);
			transition: transform 1s;
			height: 100%;
			border-radius: 5px;
		}
		.bar.active:before {
			transform: translateX(0);
		}
		.fbar:before {
			width: 75%;
			background: var(--fbarClr);
		}
		.bbar:before {
			width: 35%;
			background: var(--bbarClr);
		}
	}

	.quirks {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		grid-column-gap: 1.5em;
		grid-row-gap: 1em;
		max-width: 100%;
		margin-bottom: 2em;
		font-weight: 300;

		div {
			margin: 0;

			label {
				display: block;
				font-size: 1.3rem;
				font-weight: 400;
				margin-bottom: 0.2em;
			}
		}

		@media (max-width: 240px) {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		}
	}

	.technologies {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem 3rem;
		text-align: center;
		padding-bottom: 1em;

		div {
			width: 100px;
			height: 80px;
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			img {
				width: 50px;
				height: 50px;
				display: block;
				margin: 0 auto;
			}
			p {
				margin: 0;
			}
		}

		@media (max-width: 425px) {
			gap: 1em 0;
			justify-content: space-around;
		}
	}
`;
