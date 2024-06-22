import { useRef } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_olv8h27',
      'template_dckyftr',
      form.current,
      'X_EG9itcqnYqRHKIo'
    ).then(
      () => {
        console.log('SUCCESS!');
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
