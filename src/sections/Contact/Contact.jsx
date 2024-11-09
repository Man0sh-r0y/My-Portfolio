import React, { useState } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from 'emailjs-com'; // Import the EmailJS library
import toast from 'react-hot-toast';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function emailSend(e) {
    e.preventDefault();

    // EmailJS service details
    const serviceID = import.meta.env.VITE_SERVICE_ID; // Replace with your EmailJS service ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID; // Replace with your EmailJS template ID
    const userID = import.meta.env.VITE_USER_ID; // Replace with your EmailJS user ID

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Manash Roy",
      message: message,
    };

    const toastID = toast.loading("Loading...")

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        toast.dismiss(toastID);
        toast.success("Message sent successfully!");
        console.log('Email sent successfully: ', response);
        setName('');
        setEmail('');
        setMessage('');
      }) 
      .catch((error) => {
        toast.dismiss(toastID);
        toast.error("Failed to send message: " + error.text);
        console.log('Failed to send email: ', error);
      });
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={emailSend}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
