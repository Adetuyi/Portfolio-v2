import styled from 'styled-components';

export const Wrapper = styled.article`
	padding: 0 1em;
	min-height: calc(100vh - 8.5rem);

	h2 {
		margin-bottom: 0.9rem;
	}
	h3 {
		margin: 1.2em 0 0.5em;
		font-size: 1.8rem;
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
			span {
				line-height: 1.4;
			}
		}

		@media (max-width: 240px) {
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		}
	}

	.technologies {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1.5rem 3rem;
		text-align: center;
		padding: 1em;

		div {
			width: 70px;
			height: 70px;
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			p {
				margin: 0;
				font-size: 1rem;
			}
		}

		@media (max-width: 800px) {
			gap: 1.5em 2em;
		}
		@media (max-width: 500px) {
			gap: 1.5em;
			justify-content: space-evenly;
		}
	}
	@media (max-width: 425px) {
		&,
		.technologies {
			padding: 0;
		}
		.technologies {
			gap: 1rem 0.8rem;
		}
	}
`;
