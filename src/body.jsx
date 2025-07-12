import React, { useEffect, useState } from 'react';

import 'aos/dist/aos.css';
import cod3 from './assets/cod3.jpeg';
import './Body.css';
import './About.css';
import Contact from "./Email";
import henry from './assets/henry.jpeg'
import { Link } from 'react-router-dom';

import About from './About';

function Body() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleAnimate = () => {
    setAnimate(true);
  };
  

  return (
    <div className="body-container">

       <div>
        <img id='mg'
          src={cod3}
          alt=""
          className={animate ? 'slide-in-left' : ''}
          onClick={handleAnimate}
        />
      </div>
       <div>
        <div className={animate ? 'slide-in-right' : ''}>
          <h2 className={animate ? 'slide-in-h2' : ''}>
            I’m Henry — a Front-End Developer & Designer
        </h2>
 <br />
         <p className={animate ? 'slide-in-p' : ''}>
        Hi, I'm Henry — a front-end developer with a passion for building responsive, user-friendly web interfaces. <br />
        I specialize in translating design concepts into functional, accessible websites and applications using modern<br />
        web technologies like HTML, CSS, JavaScript, and React.
        </p>

        </div>
        
           {/* <Link to="/contact"> */}
           <a href="#Contact">
        <button id='contact'>Contact Me</button></a>
      {/* </Link>
       */}
      </div>
      <hr />
      
    
    </div>
  );
}

export default Body;
