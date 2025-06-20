import Body from "./body"
import { Link } from 'react-router-dom';
import Contact from "./Email";

import About from "./About";
function Header(){


    return(
        <div>
        <div className="header-container" >
           
                <h1>Filani Henry  <span>Samuel</span> portfoilo<br />
                
                {/* <Link to="/contact"> */}
                <div >
                        {/* <button id='but' >Contact Me</button> */}
                        <a href="#Contact" ><button id='but' >Contact Me</button> </a>
                        </div>
                      {/* </Link> */}
                        
            <a href="#About">
                 <button id="contact">work!</button>
            </a>
               
                </h1>
                
        </div>
        <Body/>
        <About/>
        <Contact/>
        </div>
    )
}

export default Header 