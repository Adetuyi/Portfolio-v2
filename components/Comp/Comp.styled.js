import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	h1 {
		position: absolute;
		user-select: none;
		z-index: 1;
		top: 50%;
		left: 50%;
		font-size: 2.5rem;
		transform: translate(-50%, calc(-50% - 40px));
		width: max-content;
		background: transparent;
		color: #367790;
		text-transform: uppercase;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
		line-height: 0.7em;
		animation: lightUp 3.5s 2s linear forwards;

		@media (max-width: 560px) {
			font-size: 2.2rem;
		}

		@media (max-width: 480px) {
			font-size: 1.8rem;
			transform: translate(-50%, calc(-50% - 30px));
		}

		@media (max-width: 380px) {
			font-size: 1.5rem;
			transform: translate(-50%, calc(-50% - 25px));
		}

		@media (max-width: 320px) {
			font-size: 1.2rem;
			transform: translate(-50%, calc(-50% - 18px));
		}
		@media (max-width: 260px) {
			font-size: 1rem;
		}
	}

	@keyframes lightUp {
		0%,
		5%,
		15%,
		25%,
		35%,
		40%,
		46%,
		60%,
		70%,
		75%,
		95% {
			color: #367790;
			text-shadow: none;
		}
		6%,
		26%,
		41%,
		53%,
		71%,
		96%,
		100% {
			color: aqua;
			text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4, 0 0 80px #03bcf4,
				0 0 160px #03bcf4;
			::before {
				box-shadow: -10px 0 60px #03bcf4, -10px 0 60px #03bcf4, -10px 0 60px #03bcf4,
					-10px 0 60px #03bcf4;
			}
			::after {
				box-shadow: 10px 0 60px #03bcf4, 10px 0 60px #03bcf4, 10px 0 60px #03bcf4,
					10px 0 60px #03bcf4;
			}
		}
	}
`;
