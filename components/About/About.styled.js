import styled from 'styled-components';

export const Wrapper = styled.article`
	padding: 2em;
	font-family: sans-serif;

	> div {
		display: flex;
		align-items: center;
		gap: 2em;

		article {
			flex-basis: 50%;
			padding: 0;
		}

		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}
`;
