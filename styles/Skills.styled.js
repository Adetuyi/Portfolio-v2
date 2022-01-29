import styled from 'styled-components';

export const Wrapper = styled.article`
	padding: 0 1em;

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
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.5rem 1rem;
		text-align: center;
		padding-bottom: 1em;

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

		@media (max-width: 475px) {
			gap: 1em 0;
			justify-content: space-around;
		}
	}
`;
