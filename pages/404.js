import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';
import Socials from '../components/Socials';

const NotFound = () => {
	return (
		<>
			<Navbar />
			<div className='notFound contained'>
				<article>
					<h1>404</h1>
					<p>Oh no, we can&apos;t seem to find that page</p>
					<Link href='/'>
						<a>Back to Homepage</a>
					</Link>
				</article>
			</div>
			<Socials />

			<style jsx>{`
				.notFound {
					background-image: url('/imgs/nf.jpg');
					background-position: center;
					background-size: cover;
					display: flex;
					align-items: center;
					justify-content: center;
					height: calc(100vh - 3rem - 90px);
					min-height: 500px;
				}
				article {
					text-align: center;
					font-weight: 600;
					padding: 1em 1em 2em;
					border-radius: 4px;
					width: 450px;
					max-width: 95%;
					background: rgba(0 0 0 / 0.4);
				}
				h1 {
					font-size: 4rem;
					margin-bottom: 0.2em;
				}
				p {
					font-size: 1.3rem;
				}
				a {
					color: var(--secClr);
					font-size: 1.3rem;
				}

                @media (max-width: 425px){
				p {
					font-size: 1.1rem;
				}
				a {
					font-size: 1.1rem;
				}

                })
			`}</style>
		</>
	);
};

export default NotFound;
