import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	img {
		width: 599px;
		max-width: 100%;
	}
	h1 {
		position: absolute;
		user-select: none;
		top: 50%;
		left: 50%;
		font-size: 3rem;
		transform: translate(-50%, calc(-50% - 30px));
		width: max-content;
		background: transparent;
		color: #0e3742;
		text-transform: uppercase;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
		line-height: 0.7em;

		@media (max-width: 670px) {
			font-size: 2.5rem;
		}
		@media (max-width: 480px) {
			font-size: 1.7rem;
			transform: translate(-50%, calc(-50% - 20px));
		}
		@media (max-width: 370px) {
			font-size: 1.3rem;
			transform: translate(-50%, calc(-50% - 20px));
		}
	}
	h1.active {
		animation: lightUp 3.5s linear forwards;

		::before {
			content: '';
			position: absolute;
			width: 1px;
			border-radius: 50% 0 0 50%;
			height: 150%;
			top: 0;
			left: 0;
			transform: translateX(-100%);
		}

		::after {
			content: '';
			position: absolute;
			width: 1px;
			border-radius: 50%;
			height: 150%;
			top: 0;
			right: 0;
			transform: translateX(100%);
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
			color: #0e3742;
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
