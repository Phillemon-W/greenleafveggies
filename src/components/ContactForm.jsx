import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { motion } from "framer-motion";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    // const location = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [captchaState, setCaptachaState] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleCaptcha = (e) => {
        if (e) {
            setCaptachaState(e);
        } else {
            setCaptachaState(false);
        }
    };

    const handleContact = async (e) => {
        e.preventDefault();
        console.log("form", e.target);
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICEID,
                process.env.REACT_APP_EMAILJS_TEMPLATEID,
                e.target,
                process.env.REACT_APP_EMAILJS_PUBLICID
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        // console.log("form submited", result.status);
        e.target.reset();
    };

    return (
        <div className="contact-form">
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleContact}
            >
                <div className="item">
                    <label htmlFor="nom">Name</label>
                    <div className="input-item">
                        <AiOutlineUser />
                        <input
                            type="text"
                            id="nom"
                            required
                            placeholder="Eg: John Doe"
                            name="name"
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
                            required
                            placeholder="Eg: johndoe@gmail.com"
                            name="email"
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
                            required
                            placeholder="Eg: +254 710 000 000"
                            name="phone"
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
                            placeholder="Write your message here"
                            name="message"
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
                    className="thecaptcha"
                    sitekey="6LcbctYiAAAAAKV7wyrFg52ltHwQJNE-aYoSi7P7"
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
