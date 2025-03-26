import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { Form, Wrapper } from '../styles/Contact.styled';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import Socials from '../components/Socials';
import Button from '../components/Button';

const Contact = ({ service_id, template_id, user_id }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const form = useRef();
	const feedback = useRef();
	const [msg, setMsg] = useState('');
	const [isMsgShowing, setIsMsgShowing] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const timeout = useRef();
	const bot = useRef();

	const sendEmail = () => {
		emailjs.sendForm(service_id, template_id, form.current, user_id).then(
			(result) => {
				//Show success
				setMsg("Email sent successfully. I'll get back as soon as I can.");
				showPopUp();
				clearInputs();
				setIsSending(false);
			},
			(error) => {
				console.log(error.text);
				setMsg('Unable to send email, try contacting through another means.');
				showPopUp();
				setIsSending(false);
				// new Error('Unable to send email, try contacting through another means.');
			}
		);
	};
	const validateEmail = (emailLocal) => {
		let regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (regex.test(emailLocal)) {
			return true;
		} else {
			return false;
		}
	};

	function showPopUp() {
		setIsMsgShowing(true);
		feedback.current.scrollIntoView();

		timeout.current = setTimeout(() => {
			setIsMsgShowing(false);
		}, 3500);
	}

	const sayHello = useCallback((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setMsg("Hi there, don't hesitate to reach out.");
				showPopUp();
				observer.unobserve(entry.target);
			}
		});
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(sayHello, { rootMargin: '0px 0px -100px 0px' });
		observer.observe(bot.current);

		return () => clearTimeout(timeout.current);
	}, [sayHello]);

	function submitForm(e) {
		e.preventDefault();
		setIsSending(true);

		try {
			if (name.length > 0 && email.length > 0 && message.length > 0) {
				if (!validateEmail(email)) {
					throw new Error('Invalid Email');
				}
				sendEmail();
			} else {
				throw new Error('Missing one or more required field.');
			}
		} catch (error) {
			console.log(error.message);
			if (error.message) {
				setMsg(error.message);
				showPopUp();
			} else {
				setMsg('Something went wrong');
				showPopUp();
			}
			setIsSending(false);
		}
	}

	function clearInputs() {
		setName('');
		setEmail('');
		setMessage('');
		setSubject('');
	}
	return (
		<>
			<Navbar />
			<Wrapper className="contained">
				<h1>Reach Out</h1>
				<br />
				<p>I’m interested in freelance opportunities. If you have any request or question, don’t hesitate to use the form.</p>
				<br />

				<div className="group">
					<Form onSubmit={submitForm} ref={form} autoComplete="new-password">
						<section>
							<input
								type="text"
								autoComplete="off"
								name="user_name"
								placeholder="Name *"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</section>
						<section>
							<input
								type="text"
								autoComplete="off"
								name="user_email"
								placeholder="Email *"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</section>
						<section className="full">
							<input
								type="text"
								autoComplete="off"
								name="subject"
								placeholder="Subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
							/>
						</section>

						<section className="full">
							<textarea
								name="message"
								cols="90"
								rows="8"
								placeholder="Message *"
								maxLength={1000}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</section>
						{isSending ? <div className="loading"></div> : <Button text="Send" type="submit" />}
					</Form>
					<div className="bot" ref={bot}>
						<div className={isMsgShowing ? 'feedback active' : 'feedback'} ref={feedback}>
							{msg}
						</div>
						<Image width={500} height={300} src="/svgs/contact.svg" alt="" />
					</div>
				</div>
				<Socials />
			</Wrapper>
		</>
	);
};

export default Contact;

export const getStaticProps = () => {
	const service_id = process.env.SERVICE_ID;
	const template_id = process.env.TEMPLATE_ID;
	const user_id = process.env.USER_ID;

	return {
		props: { service_id, template_id, user_id },
	};
};
