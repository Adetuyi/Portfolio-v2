import styled from 'styled-components';

export const Wrapper = styled.div`
	height: clamp(500px, 90vh, 900px);
	overflow: hidden;
	position: relative;

	.parallax {
		position: absolute;
		display: none;
		width: 100%;
		height: 100%;
	}
	.layer {
		position: absolute;
		top: 0;
		left: 0;
		min-width: 1150px;
		height: 100%;
		z-index: -1;
		object-fit: cover;
	}

	section {
		padding: 0 2em 2em;
		height: 100%;
		display: flex;
		align-items: center;
		gap: 1em;

		div:nth-child(1) {
			flex-basis: 50%;
		}

		> .logo {
			flex-grow: 1;
			text-align: center;
			animation: upDown 5s linear infinite;

			img {
				border-radius: 50%;
			}
		}
		h2 {
			font-size: 5rem;
			min-height: 1.2em;
			width: max-content;
			color: #fff;
		}
		p {
			font-size: 3rem;
			width: max-content;
			min-height: 1.2em;
		}
		h2,
		p {
			::before {
				content: '';
			}
		}
		.greetings::before {
			animation: typeGreetings 1.5s 0.5s linear forwards;
		}

		.intro::before {
			animation: typeIntro 3s 2.5s linear forwards;
		}
		.profession::before {
			animation: typeProfession 2s 6s linear forwards;
		}
		a {
			display: inline-block;
			padding: 0.5em 1em;
			margin-top: 1.5em;
			transform: translateY(20px);
			opacity: 0;
			animation: fadeInUp 0.8s 8s linear forwards;
		}
	}

	> p {
		position: absolute;
		bottom: 10px;
		width: 100%;
		text-align: center;
		transform: translateY(20px);
		font-weight: 300;
		font-size: 1.1rem;
		transition: 0.5s;
		opacity: 0;
		animation: fadeInUp 0.8s 8s linear forwards;
	}
	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes upDown {
		25% {
			transform: translateY(10px);
		}
		75% {
			transform: translateY(-10px);
		}
	}

	@keyframes typeGreetings {
		10% {
			content: 'H';
		}
		20% {
			content: 'He';
		}
		30%,
		40% {
			content: 'Hel';
		}
		50%,
		60% {
			content: 'He';
		}
		65%,
		70% {
			content: 'H';
		}
		75%,
		100% {
			content: 'Hi';
		}
	}
	@keyframes typeIntro {
		5% {
			content: 'M';
		}
		10% {
			content: 'My';
		}
		15% {
			content: 'My ';
		}
		20% {
			content: 'My n';
		}
		25%,
		35% {
			content: 'My na';
		}
		38% {
			content: 'My n';
		}
		41% {
			content: 'My ';
		}
		44% {
			content: 'My';
		}
		47% {
			content: 'M';
		}
		50%,
		56% {
			content: '';
		}
		61% {
			content: 'I';
		}
		65% {
			content: "I'";
		}
		70% {
			content: "I'm";
		}
		75% {
			content: "I'm ";
		}
		80% {
			content: "I'm S";
		}
		85% {
			content: "I'm Se";
		}
		90% {
			content: "I'm Sey";
		}
		95%,
		100% {
			content: "I'm Seyi";
		}
	}

	@keyframes typeProfession {
		0% {
			content: 'a';
		}
		6.25% {
			content: 'a ';
		}
		13.5% {
			content: 'a w';
		}
		19.75% {
			content: 'a we';
		}
		26% {
			content: 'a web';
		}
		32.25% {
			content: 'a web ';
		}
		38.5% {
			content: 'a web d';
		}
		44.75% {
			content: 'a web de';
		}
		51% {
			content: 'a web dev';
		}
		57.25% {
			content: 'a web deve';
		}
		63.5% {
			content: 'a web devel';
		}
		69.75% {
			content: 'a web develo';
		}
		76% {
			content: 'a web develop';
		}
		82.25% {
			content: 'a web develope';
		}
		88.5%,
		100% {
			content: ' a web developer';
		}
	}

	@media (max-width: 768px) {
		> p {
			font-size: 1rem;
		}
		section {
			padding: 0 1em 2em;

			h2 {
				font-size: 4rem;
			}
			p {
				font-size: 2.5rem;
			}
		}
	}
	@media (max-width: 580px) {
		a {
			font-size: 1.1rem;
		}
	}
	@media (max-width: 500px) {
		.logo {
			display: none;
		}
	}
	@media (max-width: 375px) {
		section {
			padding: 0;
		}
		section h2 {
			font-size: 3rem;
		}
		section p {
			font-size: 1.7rem;
		}
	}
	@media (hover: hover) {
		.parallax {
			display: block;
		}
	}
`;
