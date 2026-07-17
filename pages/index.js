import Link from 'next/link';
import About from '../components/About';
import HeroImage from '../components/HeroImage';
import MiniWorks from '../components/MiniWorks';
import Navbar from '../components/Navbar';
import Contact from './contact';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export async function getServerSideProps({ res }) {
  if (res) {
    res.writeHead(307, { Location: 'https://adetuyi.vercel.app' });
    res.end();
  }
  return { props: {} };
}

export default function Home() {
	  const service_id = process.env.SERVICE_ID;
	  const template_id = process.env.TEMPLATE_ID;
	  const user_id = process.env.USER_ID;
	  const router = useRouter();

	  useEffect(() => {
      	// Replaces the current page in history to prevent back-button loops
      	window.location.replace('https://adetuyi.vercel.app');
  	  }, []);
	
	return (
		<>
			<Navbar />
			<HeroImage />
			<br />
			<br />
			<br />
			<About>
				<article id="main-content">
					<h2>Quick Bio</h2>

					<p>
						{/* I am an experienced web developer passionate about creating great user experiences through tasteful and intuitive UIs that look
						stunning on both desktop and mobile screens. I have a curiosity about new technologies and a constant desire to learn new things and
						perfect them as much as possible. */}
						Look, I&apos;m good, really good at what I do.
						<br /> The most complex of designs? The most challenging logic? Impeccable responsiveness? I can do it all!
					</p>
					<br />
					<p>
						Programming is a fun and exciting concept to me. You can <Link href="/about">read more</Link> about me or look up
						some of <Link href="/projects">my projects</Link>. Here&apos;s a link to my{' '}
						<a href="/files/Adetuyi-Resume.pdf" target="_blank" rel="noreferrer">
							resume
						</a>
						<br />
						Wanna talk ? You can email me at{' '}
						<a href="mailto:seyispecial17@gmail.com" target="_blank" rel="noreferrer">
							seyispecial17@gmail.com
						</a>{' '}
						or message me on LinkedIn at{' '}
						<a href="https://www.linkedin.com/in/seyi-adet/" target="_blank" rel="noreferrer">
							Seyi Adetuyi
						</a>
						.
					</p>
				</article>
			</About>
			<br />
			<br />
			<br />
			<MiniWorks />
			<br />
			<br />
			<br />
			<Contact service_id={service_id} template_id={template_id} user_id={user_id} />
		</>
	);
}

