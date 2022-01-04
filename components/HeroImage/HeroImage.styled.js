import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 900px;
	max-height: 90vh;
	overflow: hidden;
	position: relative;
	background: var(--mainClr);

	section {
		padding: 0 2em 2em;
		height: 100%;
		display: flex;
		align-items: center;

		> div {
			flex-grow: 1;
		}
		h2 {
			font-size: 5rem;
			width: max-content;
			color: #fff;
		}
		p {
			font-size: 3rem;
			width: max-content;
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
			font-size: 1.3rem;
			background: var(--secClr);
			color: #fff;
			text-decoration: none;
			margin-top: 1.5em;
			cursor: pointer;
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

	@keyframes typeGreetings {
		10% {
			content: 'H';
		}
		20% {
			content: 'He';
		}
		30% {
			content: 'Hel';
		}
		40% {
			content: 'Hell';
		}
		50%,
		60% {
			content: 'Hello';
		}
		65% {
			content: 'Hell';
		}
		70% {
			content: 'Hel';
		}
		75% {
			content: 'He';
		}
		80% {
			content: 'H';
		}
		85%,
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
		25% {
			content: 'My na';
		}
		30% {
			content: 'My nam';
		}
		35% {
			content: 'My name';
		}
		38% {
			content: 'My nam';
		}
		41% {
			content: 'My na';
		}
		44% {
			content: 'My n';
		}
		47% {
			content: 'My ';
		}
		50% {
			content: 'My';
		}
		53% {
			content: 'M';
		}
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
		88.5% {
			content: 'a web developer';
		}
		94.75%,
		100% {
			content: ' a web developer.';
		}
	}

	@media (max-width: 768px) {
		img {
			display: none;
		}
		> p {
			font-size: 0.9rem;
		}
	}
	@media (max-width: 580px) {
		h2 {
			font-size: 4rem;
		}
		section p {
			font-size: 2rem;
		}
		a {
			font-size: 1.1rem;
		}
	}
	@media (max-width: 375px) {
		section {
			padding: 0 1.3em;
		}
		h2 {
			font-size: 3rem;
		}
		section p {
			font-size: 1.5rem;
		}
	}
`;
