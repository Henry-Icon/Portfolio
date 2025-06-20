import './About.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos'; 
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiSnapchat } from 'react-icons/si'
import wig from './assets/wig proj.png'
import sec from './assets/sec.jpg.jpeg'
import henry from './assets/henry.jpeg';

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='about'  data-aos="fade-up">
      <h1> :</h1>
      <div>
        <div className="about-flex">

          <div className='border-shadow' data-aos="fade-right">
            <img src={henry} alt="Henry" />
          </div>

          <div className="about-flex-text" data-aos="fade-left">
            <h1>Experience:</h1>
            <p>
              I have experience working on multiple front-end projects using React, JavaScript,
              HTML, and CSS. My focus is on building responsive, accessible, and user-friendly interfaces.
              I'm constantly learning and improving my craft.
            </p>
            <hr />

            <div className="project" data-aos="fade-up" data-aos-delay="200">
              <h1>Project</h1>
              <p>
                Some of my recent projects include a responsive e-commerce website, a personal portfolio,
                and an animated landing page using React and Tailwind CSS.
              </p>
              <img src={wig} alt="" />
              <img src={sec} alt="" />
              <hr />
              <h1>social @handles </h1>
              <p>Connect with me on social media to see my latest projects, design inspiration, and behind-the-scenes content.Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
              <div className="social-icons" data-aos="fade-up">
                {/* dont forget to add profle */}
                
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color="#C13584" />
              </a>

              <a href="https://wa.me/2348129216588" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} color="#25D366" />
              </a>
              {/* dont forget to add ursename */}
              <a href="https://www.snapchat.com/add/hsamuel24595" target="_blank" rel="noopener noreferrer">
              <SiSnapchat size={30} color="#FFFC00" />
              </a>
              </div>
              <h2>Or send a mail </h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
