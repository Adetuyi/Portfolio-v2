import React from 'react';

const Socials = () => {
	return (
		<>
			<div className="socials">
				<a href="https://github.com/Adetuyi" target="_blank" rel="noreferrer">
					<i className="fa-brands fa-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/seyi-adet" target="_blank" rel="noreferrer">
					<i className="fa-brands fa-linkedin-in"></i>
				</a>
				<a href="https://mail.google.com/mail/?view=cm&fs=1&to=seyispecial17@gmail.com" target="_blank" rel="noreferrer">
					<i className="fa-solid fa-envelope-open-text"></i>
				</a>
				<a href="https://wa.me/2349017299030" target="_blank" rel="noreferrer">
					<i className="fa-brands fa-whatsapp"></i>
				</a>
				{/* <a href="/files/Adetuyi-Resume.pdf">
					<i className="fa-brands fa-resume"></i>
					<i className="fa-brands fa-pdf"></i>
				</a> */}
			</div>
			<style jsx>{`
				.socials {
					margin-top: 2em;
					text-align: center;
					padding: 5px 5px 10px;
					width: 100%;
					text-align: center;
				}
				.socials a {
					font-size: 1.3rem;
					color: #fff;
					text-decoration: none;
					padding: 0.3em 0.5em;
					margin: 0 0.4em;
				}
			`}</style>
		</>
	);
};

export default Socials;
