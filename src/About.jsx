import './About.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiSnapchat } from 'react-icons/si';
import wig from './assets/wig proj.png';
import sec from './assets/sec.jpg.jpeg';
import henry from './assets/henry.jpeg';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true, 
      once: false,  
    });
  }, []);

  return (
    <div className="about" data-aos="fade-up">
      <h1 className="section-title" data-aos="zoom-in">About Me</h1>

      <div className="about-flex">
       
        <div className="about-image" data-aos="fade-right">
          <img src={henry} alt="Henry Samuel portrait" />
        </div>

        <div className="about-flex-text" data-aos="fade-left">
          
          <h2 data-aos="fade-up">Experience</h2>
          <p data-aos="fade-up">
            I’ve worked on multiple front-end projects using React, JavaScript, HTML, and CSS.
            My focus is on building responsive, accessible, and user-friendly interfaces.
            I'm always learning and sharpening my craft.
          </p>

          <hr data-aos="zoom-in" />

          <h2 data-aos="fade-up">Projects</h2>
          <p data-aos="fade-up">
            My recent work includes a responsive e-commerce website, a modern portfolio,
            and an animated landing page using React and Tailwind CSS.
          </p>

          <div className="project" data-aos="zoom-in-up">
            <img src={wig} alt="Wig Project" />
            <img src={sec} alt="Security Project" />
          </div>

          <hr data-aos="zoom-in" />

          
          <h2 data-aos="fade-up">Social @Handles</h2>
          <p data-aos="fade-up">
            Connect with me on social media to see my latest projects, design inspiration,
            and behind-the-scenes content. Feel free to reach out for collaborations, inquiries,
            or just to say hello!
          </p>

          <div className="social-icons" data-aos="fade-up">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#C13584" />
            </a>
            <a href="https://wa.me/2348129216588" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a href="https://www.snapchat.com/add/hsamuel24595" target="_blank" rel="noopener noreferrer">
              <SiSnapchat size={30} color="#FFFC00" />
            </a>
          </div>

          <h3 data-aos="fade-up">Or send a mail</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
