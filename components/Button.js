import React from 'react';

const Button = ({ callback, text }) => {
	return (
		<>
			<button onClick={callback}>{text}</button>
			<style jsx>{`
				button {
					display: block;
					padding: 0.5em 1em;
					font-size: 1.3rem;
					min-width: 140px;
					border-radius: 5px;
					background: var(--secClr);
					color: #fff;
					text-decoration: none;
					cursor: pointer;
					border: none;
				}
			`}</style>
		</>
	);
};

export default Button;
