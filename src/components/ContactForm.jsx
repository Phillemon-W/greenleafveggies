import React, { useState, useRef } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";


const ContactForm = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [values, setValues] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [captchaState, setCaptachaState] = useState(false);

  const refCaptcha = useRef();
	const handleContact = async (e) => {
		e.preventDefault();
		// load button
    setIsLoading(true);

		// validate values
		if (values.name && values.email && values.phone && values.message) {
			// check for captcha
			if (captchaState) {
				console.log("go");

				
				let emailJsServiceId = "service_o2gv5b8";;
				let emailJsTemplateId = "template_m62ean4";
        let emailJsPublicKey = "YWjap1A0HWS29WQpl";
        
        // const token = refCaptcha.current.getValue();

        emailjs
					.send(
						emailJsServiceId,
						emailJsTemplateId,
						values,
						emailJsPublicKey
					)
					.then(
						(result) => {
							// console.log(result.text);
							notification("Message Envoyé");
							setIsLoading(false);
							emptyFields();
						},
						(error) => {
							// console.log(error.text);
							notification(`Erreur ${error.text}`);
							console.log(error);
              setIsLoading(false);
              
						}
					);
			} else {
				notification("verifiez captcha");
				setIsLoading(false);
			}
		} else {
			notification("verifiez les champs");
			setIsLoading(false);
		}
	};

	const handleCaptcha = (e) => {
		if (e) {
			setCaptachaState(e);
		} else {
			setCaptachaState(false);
		}
	};

	const emptyFields = () => {
		setValues({
			name: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	const notification = (text) => {
		const header = document.querySelector(".header");

		let notif = document.createElement("div");
		notif.classList.add("notification");
		notif.innerText = text;

		header.appendChild(notif);

		let top = 3;
		Array.from(document.querySelectorAll(".notification")).forEach((not) => {
			not.style.top = top + 5.5 + "%";
			top = top + 5.5;
		});

		let indexRem = setTimeout(() => {
			document.querySelector(".notification").remove();
			if (!notif) {
				clearTimeout(indexRem);
			}
		}, 7000);
	};

	return (
		<div className="contact-form">
			<motion.form
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				onSubmit={(e) => handleContact(e)}
				
			>
				<div className="item">
					<label htmlFor="nom">Name</label>
					<div className="input-item">
						<AiOutlineUser />
						<input
							type="text"
							id="nom"
							name="name"
							required
							placeholder="Eg: John Doe"
							onChange={(e) =>
								setValues({
									name: e.target.value,
									email: values.email,
									phone: values.phone,
									message: values.message,
								})
							}
							value={values.name}
						/>
					</div>
				</div>
				<div className="item">
					<label htmlFor="email">Email</label>
					<div className="input-item">
						<MdOutlineEmail />
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="Eg: johndoe@gmail.com"
							onChange={(e) =>
								setValues({
									name: values.name,
									email: e.target.value,
									phone: values.phone,
									message: values.message,
								})
							}
							value={values.email}
						/>
					</div>
				</div>
				<div className="item">
					<label htmlFor="phone">Number</label>
					<div className="input-item">
						<MdOutlinePhone />
						<input
							type="number"
							id="phone"
							name="phone"
							required
							placeholder="Eg: +254 710 000 000"
							onChange={(e) =>
								setValues({
									name: values.name,
									email: values.email,
									phone: e.target.value,
									message: values.message,
								})
							}
							value={values.phone}
						/>
					</div>
				</div>
				<div className="item">
					<label htmlFor="message">Message</label>
					<div className="input-item">
						<textarea
							id="message"
							cols="30"
							rows="10"
							required
							name="message"
							placeholder="Write your message here"
							onChange={(e) =>
								setValues({
									name: values.name,
									email: values.email,
									phone: values.phone,
									message: e.target.value,
								})
							}
							value={values.message}
						></textarea>
					</div>
				</div>
				{/* captcha */}
				<ReCAPTCHA
					ref={refCaptcha}
					className="thecaptcha"
					sitekey="6LepjkEiAAAAAIRJVxvsH0jMHKy2zxglStU0OHRi"
					onChange={handleCaptcha}
				/>

				{isLoading && <button disabled>In progress ...</button>}
				{!isLoading && <button>Send</button>}
			</motion.form>

			<motion.div
				initial={{ opacity: 0, x: "-1rem" }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.6, duration: 0.8 }}
				className="image"
			></motion.div>
		</div>
	);
};

export default ContactForm;
