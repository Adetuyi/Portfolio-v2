import React, { useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Form, Wrapper } from './Contact.styled';
import emailjs from 'emailjs-com';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const form = useRef();
	const [msg, setMsg] = useState('');

	const sendEmail = () => {
		const service_id = process.env.SERVICE_ID;
		const template_id = process.env.TEMPLATE_ID;
		const user_id = process.env.USER_ID;

		emailjs.sendForm(service_id, template_id, form.current, user_id).then(
			result => {
				return true;
			},
			error => {
				console.log(error.text);

				return false;
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

	function submitForm(e) {
		e.preventDefault();
		try {
			if (name.length > 0 && email.length > 0 && message.length > 0) {
				if (!validateEmail(email)) {
					throw new Error('Invalid Email');
				}
				if (sendEmail()) {
					//Show success
					console.log('email sent successfully');
				} else {
					new Error('Unable to send email, try contacting through another means');
				}
				clearInputs();
			} else {
				throw new Error('Missing one or more required input fields');
			}
		} catch (error) {
			console.log(error);
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
			<Wrapper className='contained'>
				<h1>Reach Out</h1>
				<p>
					I’m interested in freelance opportunities – especially ambitious or large
					projects. However, if you have other requests or questions, don’t hesitate to
					use the form.
				</p>

				<Form onSubmit={submitForm} ref={form} autoComplete='new-password'>
					<section>
						<input
							type='text'
							autoComplete='off'
							name='user_name'
							placeholder='Name'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</section>
					<section>
						<input
							type='text'
							autoComplete='off'
							name='user_email'
							placeholder='Email'
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
							placeholder='Message'
							maxLength={1000}
							value={message}
							onChange={e => setMessage(e.target.value)}
						></textarea>
						{msg.length > 0 ? <p className={valid ? 'success' : 'err'}>{msg}</p> : null}
					</section>
					<button type='submit'>Send</button>
				</Form>
			</Wrapper>
		</>
	);
};

export default Contact;
