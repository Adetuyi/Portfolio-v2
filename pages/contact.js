import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { Form, Wrapper } from '../styles/Contact.styled';
import emailjs from 'emailjs-com';
import Image from 'next/image';

export const getStaticProps = () => {
	const service_id = process.env.SERVICE_ID;
	const template_id = process.env.TEMPLATE_ID;
	const user_id = process.env.USER_ID;
	console.log(service_id, template_id, user_id);

	return {
		props: { service_id, template_id, user_id },
	};
};
const Contact = ({ service_id, template_id, user_id }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const form = useRef();
	const feedback = useRef();
	const [msg, setMsg] = useState('I see you peeping');
	const [isMsgShowing, setIsMsgShowing] = useState(false);
	const [isBtnDisabled, setIsBtnDisabled] = useState(false);
	const timeout = useRef();

	const sendEmail = () => {
		emailjs.sendForm(service_id, template_id, form.current, user_id).then(
			result => {
				//Show success
				setMsg("Email sent successfully. I'll get back as soon as I can.");
				showPopUp();
				clearInputs();
			},
			error => {
				console.log(error.text);
				new Error('Unable to send email, try contacting through another means.');
			}
		);
	};
	const validateEmail = emailLocal => {
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
		}, 2000);
	}

	useEffect(() => {
		return () => clearTimeout(timeout.current);
	}, []);

	function submitForm(e) {
		e.preventDefault();
		setIsBtnDisabled(true);
		try {
			if (name.length > 0 && email.length > 0 && message.length > 0) {
				if (!validateEmail(email)) {
					throw new Error('Invalid Email');
				}
				sendEmail();
			} else {
				throw new Error('Missing one or more required input fields.');
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
		}
		setIsBtnDisabled(false);
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
			<Wrapper className='contained'>
				<h1>Reach Out</h1>
				<br />
				<p>
					I’m interested in freelance opportunities. If you have any request or question,
					don’t hesitate to use the form.
				</p>
				<br />

				<div className='group'>
					<Form onSubmit={submitForm} ref={form} autoComplete='new-password'>
						<section>
							<input
								type='text'
								autoComplete='off'
								name='user_name'
								placeholder='Name *'
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</section>
						<section>
							<input
								type='text'
								autoComplete='off'
								name='user_email'
								placeholder='Email *'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</section>
						<section className='full'>
							<input
								type='text'
								autoComplete='off'
								name='subject'
								placeholder='Subject'
								value={subject}
								onChange={e => setSubject(e.target.value)}
							/>
						</section>

						<section className='full'>
							<textarea
								name='message'
								cols='90'
								rows='5'
								placeholder='Message *'
								maxLength={1000}
								value={message}
								onChange={e => setMessage(e.target.value)}
							></textarea>
						</section>
						{isBtnDisabled ? (
							<button type='submit' disabled>
								Send
							</button>
						) : (
							<button type='submit'>Send</button>
						)}
					</Form>
					<div className='bot'>
						<div
							className={isMsgShowing ? 'feedback active' : 'feedback'}
							ref={feedback}
						>
							{msg}
						</div>
						<Image width={500} height={300} src='/svgs/contact.svg' alt='' />
					</div>
				</div>
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
			</Wrapper>
		</>
	);
};

export default Contact;
