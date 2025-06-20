import './email.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
 

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_30bji3w', // EmailJS service ID
        'template_qss3vlr', // EmailJS template ID
        form.current,
        '89nOFcAaGSXHeroja' // EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
           setUserName('');
          setUserEmail('');
          setMessage('');
        },
        (error) => {
          alert('Failed to send message, try again.');
        }
      );
  };

  return (

    <div className="contact" id='Contact' >
      
      <div id="get" data-aos="fade-up">
        <p>Get in touch</p>
        <h1>LET'S WORK TOGETHER</h1>
      </div>
      <form
        id="input"
        ref={form}
        onSubmit={sendEmail}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <input type="text" name="user_name" placeholder="Your name" onChange={(e) => setUserName(e.target.value)} required /> <br />
        <input type="email" name="user_email" placeholder="Your Email" onChange={(e) => setUserEmail(e.target.value)} required /> <br />
        <textarea name="message" placeholder="HOW CAN I HELP YOU?" rows="4" onChange={(e) => setMessage(e.target.value)} required></textarea> <br />
        <button type="submit">Send Message </button>
      </form>
    </div>
  );
}

export default Contact;
