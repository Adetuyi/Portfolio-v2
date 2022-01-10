import React from 'react';

const Button = ({ callback, text, active, type }) => {
	return (
		<>
			<button onClick={callback} className={active ? 'active' : null} type={type}>
				{text}
			</button>
			<style jsx>{`
				button {
					display: block;
					padding: 0.5em 1.5em;
					font-size: 1.1rem;
					min-width: 120px;
					border-radius: 5px;
					background: none;
					border: 2px solid var(--terClr);
					color: var(--terClr);
					text-decoration: none;
					cursor: pointer;
					transition: 0.5s;
				}
				button:hover,
				button:focus,
				button.active {
					border: 2px solid var(--secClr);
					background: var(--secClr);
					color: #fff;
				}
			`}</style>
		</>
	);
};

export default Button;
