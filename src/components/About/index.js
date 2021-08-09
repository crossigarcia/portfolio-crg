import React from 'react';
import self from '../../assets/imgs/cecilia.jpg';

function About() {
   return (
    
       <div className="row justify-content-center about-me">
         <div className="col-sm-12 col-md-4 col-lg-3 about-img">
            <img src={self} alt="portrait of me" className="portrait" ></img>
         </div>
         <div className="col-sm-12 col-md-8 col-lg-9">
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
           </p>
         </div>
       </div>
   );
}

export default About;