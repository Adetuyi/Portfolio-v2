import styled from 'styled-components';

export const Wrapper = styled.article`
	font-family: sans-serif;
	> section article {
		padding: 0;
	}
	> section > div {
		display: flex;
		align-items: center;
		gap: 2em;

		.laptop {
			flex-basis: 50%;
		}

		article {
			flex-basis: 50%;
		}

		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}
`;
