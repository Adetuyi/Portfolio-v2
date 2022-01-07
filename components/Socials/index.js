import React from 'react';

const Socials = () => {
	return (
		<>
			<div className='socials'>
				<a
					href='https://twitter.com/Seyi50629405?t=1OeG9ZDJZtzoKeeW2vc4bA&s=09'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fa-brands fa-twitter'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/seyi-adetuyi-054b56206'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fa-brands fa-linkedin-in'></i>
				</a>
				<a
					href='https://mail.google.com/mail/?view=cm&fs=1&to=seyispecial17@gmail.com'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fa-solid fa-envelope-open-text'></i>
				</a>
				<a href='http://github.com/Adetuyi' target='_blank' rel='noreferrer'>
					<i className='fa-brands fa-github'></i>
				</a>
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
